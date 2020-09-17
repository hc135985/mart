/*
 * @Author: heinan 
 * @Date: 2020-07-14 14:44:39 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-16 14:57:26
 */
'use strict';

const Controller = require('egg').Controller;
const { tokenCreator, getUserByToken, nameCreator } = require('../utils');
const { JWT_KEYGEN } = require('../config');


class UserController extends Controller {
  /**
   * 用户登录接口
   * @ username  String 用户名
   * @ password  String 用户密码
   */
  async login() {
    const result = await this.ctx.service.user.login(this.ctx.request.body);
    if (result.length) {
      const token = tokenCreator(result[0].uid, JWT_KEYGEN)
      this.ctx.body = {
        code: 1,
        token,
        msg: '登录成功!',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '登录失败!',
      }
    }
  }
  /**
   * 用户注册接口
   * @ username  String 用户名
   * @ password  String 用户密码
   */
  async registry() {
    try {
      this.ctx.validate({ username: 'string', password: 'string' });
    } catch (err) {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        error: err.errors,
      };
      return;
    }
    const hasUser = await this.ctx.service.user.find(this.ctx.request.body);
    if (hasUser.length) {
      this.ctx.status = 403;
      this.ctx.body = {
        code: 0,
        msg: `用户名：'${this.ctx.request.body.username}'已经存在!`,
      }
    } else {
      const result = await this.ctx.service.user.registry(this.ctx.request.body);
      if (result.affectedRows > 0) {
        this.ctx.body = {
          code: 1,
          msg: '注册成功！',
        }
      } else {
        this.ctx.status = 500;
        this.ctx.body = {
          code: 0,
          msg: '注册失败！',
        }
      }
    }

  }
  /**
   * 通过token换取用户id 
   * @  token string 登录得token
   */
  async getUserByToken() {
    const { token } = this.ctx.query;
    this.ctx.body = {
      code: 1,
      ...getUserByToken(token),
    }
  }

  /**
   * 通过用户id获得用户信息
   */
  async getUserInfo() {
    const result = await this.ctx.service.user.getUserInfo(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        data: result[0],
      }
    } else {
      this.ctx.status = 403;
      this.ctx.body = {
        code: 0,
        msg: '没有数据！',
      }
    }
  }
  // 头像上传
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const filePath = require('path').normalize(file.filepath);
    const filename = nameCreator(file.filename);
    const result = await ctx.service.user.upload(filePath, filename);
    if (result) {
      ctx.status = 403;
      ctx.body = {
        code: 0,
        msg: '上传失败！',
        result,
      };
    } else {
      const imgUrl = `http://10.34.4.35:7001/public/upload/${filename}`;
      const updateAvatar = await ctx.service.user.updateAvatar({ uid: this.ctx.request.query.uid, imgUrl });
      const insertAvatar = await ctx.service.user.insertAvatar({ uid: this.ctx.request.query.uid, imgUrl })
      if (updateAvatar.affectedRows && insertAvatar.affectedRows) {
        ctx.status = 200;
        ctx.body = {
          code: 1,
          msg: '上传成功！',
          imgUrl,
        }
      } else {
        ctx.status = 500;
        ctx.body = {
          code: 0,
          msg: '上传失败！',
        }
      }

    }
  }

  async avatarList() {
    const result = await this.service.user.avatarList(this.ctx.request.query)
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        data: result,
      }
    } else {
      this.ctx.status = 403;
      this.ctx.body = {
        code: 0,
        msg: '没有数据！',
      }
    }
  }
  async addIdentity() {
    const result = await this.service.user.addIdentity(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '添加成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '添加失败！',
      }
    }
  }

  async identityList() {
    const result = await this.service.user.identityList();
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        data: result,
      }
    } else {
      this.ctx.status = 403;
      this.ctx.body = {
        code: 0,
        msg: '没有数据！',
      }
    }
  }
  async identiry() {
    const result = await this.service.user.identity(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        data: result[0],
      }
    } else {
      this.ctx.status = 403;
      this.ctx.body = {
        code: 0,
        msg: '没有数据！',
      }
    }
  }
}

module.exports = UserController;
