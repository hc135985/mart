/*
 * @Author: heinan 
 * @Date: 2020-07-14 16:13:10 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:14:20
 */
'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  /**
   * 获取所有的评论
   * @ pagesize number  可选 每页个数
   * @ pagecount number 可选 页码
   */
  async allList() {
    const result = await this.ctx.service.comment.allList({})
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
 * 将评论添加到对应商品
 * @ uid, string  用户id
 * @ pid, string 商品id
 * @ uphoto, string 用户头像
 * @ uname, string 用户姓名
 * @ comment, string 用户评论
 * @ score number 星级
 */
  async add() {

    const result = await this.service.comment.add(this.ctx.request.body)
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
   * 获取商品评论
   * @ pid string 商品id
   * @ pagesize number  可选 每页个数
   * @ pagecount number 可选 页码
   */
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
  /**
   * 删除评论 
   * @ cid string 评论id
   */
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
