'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async type() {
    const result = await this.ctx.service.product.type();
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '暂无数据',
      }
    }
  }

  async sort() {
    const result = await this.ctx.service.product.sort(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
      }
    }
  }

  async list() {
    const result = await this.ctx.service.product.list(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 0,
        msg: '暂无数据!',
      }
    }
  }

  async add() {
    const result = await this.service.product.add(this.ctx.request.body)
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

  async edit() {
    const result = await this.service.product.edit(this.ctx.request.body)
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
  async del() {
    const result = await this.service.product.delete(this.ctx.query)
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
  async searchByType() {
    const result = await this.ctx.service.product.searchByType(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: '搜索成功！',
        result,
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '暂无数据！',
      }
    }
  }
  async detail() {
    const result = await this.ctx.service.product.detail(this.ctx.params);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 0,
        msg: '暂无数据！',
      }
    }
  }
}

module.exports = ProductController;
