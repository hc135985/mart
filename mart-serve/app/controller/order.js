/*
 * @Author: heinan 
 * @Date: 2020-07-14 16:13:10 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-16 11:53:49
 */
'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async add() {
    const result = await this.service.order.add(this.ctx.request.body)
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
  async del() {
    const result = await this.ctx.service.order.del(this.ctx.query)
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
  async edit() {
    const result = await this.ctx.service.order.edit(this.ctx.query)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '修改成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '修改失败！',
      }
    }
  }
  //订单列表
  async list() {
    const result = await this.ctx.service.order.list(this.ctx.query)
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
  //订单详情
  async detail() {
    const result = await this.ctx.service.order.detail(this.ctx.params)
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

  async updateStatus() {
    const result = await this.ctx.service.order.update(this.ctx.query);
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
}

module.exports = OrderController;
