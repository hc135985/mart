/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:09:36
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class CarouselService extends Service {
  async add({ tit, start_time, end_time, type }, img) {
    const cid = idCreator(tit).slice(0, 20);
    type = type || 0;
    console.log(cid, tit, start_time, end_time, img, type)
    const $params = [cid, tit, start_time, end_time, img, type];
    const $sql = 'insert into carousel (cid,tit,start_time,end_time,img,type) values (?,?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async del({ cid }) {
    const $sql = 'delete from carousel where cid=?';
    const $params = [cid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async edit({ cid, tit, start_time, end_time, imageUrl, type }) {
    const $sql = 'update carousel set tit=?, start_time=?, end_time=?,img=?,type=? where cid=?';
    const $params = [tit, start_time, end_time, imageUrl, type, cid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async list({ type, pagesize, pagecount }) {
    pagesize = pagesize || 10
    pagecount = pagecount || 1
    const $sql = `select * from carousel where type=${type === undefined ? 1 : type} limit ?,?`;
    const $params = [(pagecount - 1) * pagesize, pagesize * 1]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async all({ pagesize, pagecount }) {
    pagesize = pagesize || 10
    pagecount = pagecount || 1
    const $sql = `select * from carousel limit ?,?`;
    const $params = [(pagecount - 1) * pagesize, pagesize * 1]
    return await this.ctx.app.mysql.query($sql, $params)
  }
}

module.exports = CarouselService;
