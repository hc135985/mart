/*
 * @Author: heinan 
 * @Date: 2020-07-14 16:13:10 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-09-20 20:08:16
 */
'use strict';

const Controller = require('egg').Controller;
const { nameCreator } = require('../utils');
const path = require('path')
class CarouselController extends Controller {
  /**
   * @ tit 活动标题 
   * @ start_time 开始时间
   * @ end_time  结束时间
   * @ img  图片地址
   * @ type 投放 0 未投放 1 投放
   */
  async add() {
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
      let img = `http://10.34.4.12:7001/public/upload/${filename}`

      const result = await this.service.carousel.add(this.ctx.request.body, img)
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
  }
  /**
   * 删除轮播图
   * @ cid string 轮播图id
   */
  async del() {
    const result = await this.ctx.service.carousel.del(this.ctx.query)
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
   * 修改轮播图
   * @ cid, string   轮播图id
   * @ tit,  string 标题
   * @ start_time, string  开始时间
   * @ end_time, string  结束时间
   * @ img, string 图片
   * @ type number  类型
   */
  async edit() {
    console.log(this.ctx.request.body)
    const result = await this.ctx.service.carousel.edit(this.ctx.request.body)
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
   * 获取轮播图
   *  @ type  number 轮播图类型 默认值为1
   */
  async list() {
    const result = await this.ctx.service.carousel.list(this.ctx.query)
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
   * 获取所有轮播图
   * @ pagesize  number-可选  页数
   * @ pagecount  number -可选 页码
   */
  async all() {
    const result = await this.ctx.service.carousel.all(this.ctx.query)
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

module.exports = CarouselController;
