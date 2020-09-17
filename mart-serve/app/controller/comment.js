/*
 * @Author: heinan 
 * @Date: 2020-07-14 16:13:10 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-16 10:26:12
 */
'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  /**
   * tit 活动标题 
   * start_time 开始时间
   * end_time  结束时间
   * img  图片地址
   * type 投放 0 未投放 1 投放
   */
  async add() {

    const result = await this.service.comment.add(this.ctx.request.body)
    if (result.affectedRows > 0) {
      // 将评论添加到对应商品
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

  //TODO 分页
  async list() {
    const result = await this.ctx.service.comment.list(this.ctx.query)
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
  async del() {
    const result = await this.service.comment.delete(this.ctx.query)
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
}

module.exports = CommentController;
