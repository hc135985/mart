/*
 * @Author: heinan 
 * @Date: 2020-07-14 16:13:10 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:13:51
 */
'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  /**
   * 添加订单
   * @ list, JSON.stringify([{}]) 订单列表内容
   * @ aid,  string  地址id
   * @ uid, string 用户id
   * @ summary, string 总金额
   * @ total, string 商品总数
   * @ status  number 状态 
   */
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
  /**
   * 删除订单
   * @ oid  string 订单id
   */
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
  /**
   * 修改订单
   * @ list, JSON.stringify([{}]) 订单列表内容
   * @ aid,  string  地址id
   * @ uid, string 用户id
   * @ summary, string 总金额
   * @ total, string 商品总数
   * @ status  number 状态 
   * @ oid string 订单id
   */
  async edit() {
    const result = await this.ctx.service.order.edit(this.ctx.request.body)
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
  /**
   * 获取当前用户订单列表
   * @ uid, string  用户id
   * @ status  string  状态 可选
   */
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
  /**
   * 获取所有的订单
   */
  async allList() {
    const result = await this.ctx.service.order.allList()
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
   * 订单详情
   *  @ oid string 订单id
   */
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
    this.ctx.body = {
      code: 0,
      msg: '暂无数据！',
    }
  }
}

module.exports = OrderController;
