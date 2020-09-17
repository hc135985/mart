/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-17 17:07:15
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class CarouselService extends Service {
  async add({ tit, start_time, end_time, img, type }) {
    const cid = idCreator(tit);
    type = type || 0;
    const $params = [cid, tit, start_time, end_time, img, type];
    const $sql = 'insert into carousel (cid,tit,start_time,end_time,img,type) values (?,?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async del({ cid }) {
    const $sql = 'delete from carousel where cid=?';
    const $params = [cid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async edit({ cid, tit, start_time, end_time, img, type }) {
    const $sql = 'update carousel set tit=?, start_time=?, end_time=?,img=?,type=? where cid=?';
    const $params = [tit, start_time, end_time, img, type, cid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async list({ type, pagesize, pageCount }) {
    pagesize = pagesize || 0;
    pageCount = pageCount || 10;
    if (type === undefined) {
      const $sql = `select * from carousel limit ${pagesize},${pageCount}`;
      return await this.ctx.app.mysql.query($sql)
    } else if (type === "all") {
      const $sql = `select * from carousel`;
      return await this.ctx.app.mysql.query($sql)
    }
    const $sql = `select * from carousel where type=${type} limit ${pagesize},${pageCount}`;
    return await this.ctx.app.mysql.query($sql)
  }
}

module.exports = CarouselService;
