'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.ctx.service.product.searchByType(this.ctx.query);
    if (result.length) {
      ctx.body = {
        result,
        code: 1
      };
    } else {
      ctx.body = {
        msg: '暂无数据',
        code: 0
      };
    }
  };
  a() {
    this.ctx.body = {
      data: {
        msg: 'aaa'
      }
    }
  }
}

module.exports = HomeController;
