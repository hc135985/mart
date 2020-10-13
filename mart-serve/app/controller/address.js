'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
  /**
   * 添加地址
   *  @ uid, string  用户id
   *  @ auser, string 名称
   *  @ mobile, string 用户手机号
   *  @ province, string  省
   *  @ city, string  城市
   *  @ county, string 县、区
   *  @ street  string 街道，详细
   */
  async add() {
    let aid = null;
    const result = await this.ctx.service.address.add(this.ctx.request.body, (val) => { aid = val });
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '添加成功！',
        aid
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
   *  @ auser, string 名称
   *  @ mobile, string 用户手机号
   *  @ province, string  省
   *  @ city, string  城市
   *  @ county, string 县、区
   *  @ street  string 街道，详细
   *  @ aid string 地址id
   */
  async edit() {
    const result = await this.ctx.service.address.edit(this.ctx.request.body);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '更新成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '更新失败！',
      }
    }
  }
  /**
   * 删除地址
   * @ aid  string 地址id
   */
  async del() {
    const result = await this.ctx.service.address.del(this.ctx.query)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '删除成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '删除失败！',
      }
    }
  }
  /**
   * 获取所有地址
   */
  async allList() {
    const result = await this.ctx.service.address.allList()
    if (result.length) {
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '暂无数据！',
      }
    }
  }
  /**
   * 获取指定地址数据
   * @ aid string 可选 ，地址id
   * @ uid string 必选 ， 用户id
   */
  async list() {
    const result = await this.ctx.service.address.list(this.ctx.query)
    if (result.length) {
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '暂无数据！',
      }
    }
  }
}

module.exports = AddressController;
