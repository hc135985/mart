/*
 * @Author: heinan 
 * @Date: 2020-07-14 14:44:39 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-05 19:28:24
 */
'use strict';

const Controller = require('egg').Controller;
const path = require('path')
const { tokenCreator, getUserByToken } = require('../utils');
const { JWT_KEYGEN } = require('../config');
const { idCreator, nameCreator } = require('../utils');


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
      this.ctx.body = {
        code: 0,
        msg: '登录失败!',
      }
    }
  }
  /**
   * 通过手机号获取验证码
   * @ mobile string 手机号
   */
  async verifyCode() {
    let { mobile } = this.ctx.query
    let verifyCode = Math.random().toString(16).slice(2, 8);
    this.ctx.session[mobile + 'MOBILEVerify'] = verifyCode;
    this.ctx.session[mobile + 'MOBILEVerifyTime'] = new Date().getTime()
    this.ctx.body = {
      code: 1,
      verifyCode
    }
  }
  /**
   * 通过手机号登录
   * @ mobile string 手机号
   * @ verifyCode string 验证码
   */
  async modileLogin() {


    let { mobile } = this.ctx.request.body
    if (new Date().getTime() - this.ctx.session[mobile + 'MOBILEVerifyTime'] > 60000) return this.ctx.body = {
      code: 0,
      msg: '验证超时'
    }
    if (this.ctx.session[mobile + 'MOBILEVerify'] != this.ctx.request.body.verifyCode) {
      return this.ctx.body = {
        code: 0,
        msg: '验证码错误'
      }
    }
    const result = await this.ctx.service.user.modileLogin(this.ctx.request.body);
    if (result.length) {
      const token = tokenCreator(result[0].uid, JWT_KEYGEN)
      this.ctx.body = {
        code: 1,
        token
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '无账号'
      }
    }

  }
  /**
   * 手机找回密码
   * 通过手机号修改密码
   * @ mobile string 手机号
   * @ verifyCode string 验证码
   * @ password string  新密码 
   */

  async modifyPwdByMobile() {
    let { mobile } = this.ctx.request.body
    if (new Date().getTime() - this.ctx.session[mobile + 'MOBILEverifyTime'] > 60000) return this.ctx.body = {
      code: 0,
      msg: '验证超时'
    }
    console.log(this.ctx.session[mobile + 'MOBILEVerify'] !== this.ctx.request.body.verifyCode);
    if (this.ctx.session[mobile + 'MOBILEVerify'] !== this.ctx.request.body.verifyCode) {
      return this.ctx.body = {
        code: 0,
        msg: '验证码错误'
      }
    }

    const result = await this.ctx.service.user.modifyPwdByMobile(this.ctx.request.body);
    if (result.affectedRows) {
      return this.ctx.body = {
        code: 1,
        msg: '密码修改成功，请重新登录'
      }
    } else {
      return this.ctx.body = {
        code: 0,
        msg: '密码修改失败，请重新修改'
      }
    }
  }


  /**
   * 发送邮箱验证码
   * @ email string 邮箱
   */
  async SendMailVerifyCode() {
    const ctx = this.ctx;
    let { email } = this.ctx.query
    let verifyCode = Math.random().toString(16).slice(2, 8);
    this.ctx.session[email + 'EMAILverify'] = verifyCode;
    this.ctx.session[email + 'EMAILverifyTime'] = new Date().getTime()
    const subject = '验证码';
    const text = '来自校园超市的验证码';
    const html = `<h1>您好，请接收您的验证码，有问题请联系黄大锤</h1><a class="elem-a" href="https://baidu.com"><span class="content-elem-span">
      验证码为:${verifyCode}</span></a>`;

    const has_send = await this.service.tool.sendMail(email, subject, text, html);

    if (has_send) {
      ctx.body = {
        code: 1,
        message: '发送成功',
      };
      return;
    }
    ctx.body = {
      code: 0,
      message: '发送失败',
    };
  }

  /**
   * 邮箱修改密码
   * @ email string 邮箱
   * @ verifyCode string  验证码
   * @ password string 新密码
   */
  async modifyPwdByEmail() {
    let { email } = this.ctx.request.body
    if (this.ctx.session[email + 'EMAILverify'] != this.ctx.request.body.verifyCode) {
      return this.ctx.body = {
        code: 0,
        msg: '验证码错误'
      }
    }
    if (new Date().getTime() - this.ctx.session[email + 'EMAILverifyTime'] > 60000) return this.ctx.body = {
      code: 0,
      msg: '验证超时'
    }
    const result = await this.ctx.service.user.modifyPwdByEmail(this.ctx.request.body);
    if (result.affectedRows) {
      return this.ctx.body = {
        code: 1,
        msg: '密码修改成功，请重新登录'
      }
    } else {
      return this.ctx.body = {
        code: 0,
        msg: '密码修改失败，请重新修改'
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
      this.ctx.validate({ username: 'string', password: 'string', mobile: 'string' });
    } catch (err) {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        error: err.errors,
      };
      return;
    }
    const hasUser = await this.ctx.service.user.find(this.ctx.request.body);
    if (hasUser) {
      this.ctx.body = {
        code: 0,
        msg: `用户名：'${this.ctx.request.body.username}'或者手机号${this.ctx.request.body.mobile}已经存在!`,
      }
    } else {
      const uid = idCreator(this.ctx.request.body.username).slice(0, 20);
      const result = await this.ctx.service.user.registry(this.ctx.request.body, uid)
      const res = await this.ctx.service.user.setuserinfo(this.ctx.request.body, uid)
      if (result.affectedRows > 0 && res.affectedRows > 0) {
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
   * 获取用户权限信息
   * @ token string token密匙
   */
  async getUserPermissions() {
    let { uid } = getUserByToken(this.ctx.query.token)
    let isd = await this.ctx.service.user.getUserPermissions(uid)
    if (isd.length) {
      isd = isd[0]['identity_id']
      let userp = await this.ctx.service.user.getuserq(isd)
      if (userp.length) {
        this.ctx.body = {
          userp
        }
      }

    }

  }
  /**
   * 通过用户id获得用户信息
   * @ uid string 用户id
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

  /**
   * 头像上传
   * @ uid string 用户id
   * @ files FromData 图片数据
   */
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const filePath = path.normalize(file.filepath);
    const filename = nameCreator(file.filename);
    const uploadError = await ctx.service.user.upload(filePath, filename)
    if (uploadError) {
      ctx.status = 403;
      ctx.body = {
        code: 0,
        msg: '上传失败!',
        result: uploadError,
      }
    } else {
      let img = `http://localhost:7001/public/upload/${filename}`
      if (!ctx.query.uid) {
        return ctx.body = {
          code: 1,
          msg: '上传轮播图成功!',
          imgurl: img
        }
      }
      const atavarSelect = await ctx.service.user.selectAvatar(img)
      if (atavarSelect.length) {
        return ctx.body = {
          code: 1,
          msg: '上传头像成功!',
          imgurl: img
        }
      }
      const result = await ctx.service.user.cutAvatar(img, ctx.query.uid)
      const addAvatar = await ctx.service.user.addAvatar(img, ctx.query.uid)
      if (result.affectedRows && addAvatar.affectedRows) {
        ctx.status = 200;
        ctx.body = {
          code: 1,
          msg: '上传头像成功!',
          imgurl: img
        }
      } else {
        ctx.body = {
          code: 0,
          msg: '上传头像失败!',
          result: uploadError,
        }
      }
    }
  }
  /**
   * 修改头像
   * @ imgUrl string 图片路径
   * @ uid string 用户id
   */
  async cutAvatar() {
    let { imgUrl, uid } = this.ctx.request.body;
    const result = await this.ctx.service.user.cutAvatar(imgUrl, uid)
    if (result.affectedRows) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: '上传头像成功!',
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '上传头像失败!',
      }
    }
  }
  /**
   * 修改用户信息
   * @ uid,  string 用户id
   * @ nickname,string   昵称
   * @ graph,  string  真实姓名
   * @ email,  string  邮箱
   * @ mobile   string 手机号
   */
  async updataUserInfo() {
    const result = await this.ctx.service.user.updataUserInfo(this.ctx.request.body);
    if (result.affectedRows) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: '修改成功',
      }
    } else {
      this.ctx.status = 403;
      this.ctx.body = {
        code: 0,
        msg: '修改失败！',
      }
    }
  }
  /**
   * 添加用户权限
   * @ identity_text,  用户权限类型字段
   * @ identity_type   用户权限类型
   */
  async addIdentiry() {
    const result = await this.service.user.addIdentiry(this.ctx.request.body)
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
  /**
   * 获取用户权限的列表
   */
  async identiryList() {
    const result = await this.service.user.identiryList();
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
  /**
   * 获取历史头像
   * @ uid string 用户id
   */
  async historyAvatar() {
    const result = await this.service.user.historyAvatar(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        data: result,
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '没有数据！',
      }
    }
  }
}

module.exports = UserController;
