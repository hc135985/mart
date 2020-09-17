/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-16 12:10:37
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class OrderService extends Service {
  async add({ list, aid, uid, summary, total, status }) {
    const oid = idCreator(uid);
    const $params = [oid, list, aid, uid, summary, total, status];
    const $sql = 'insert into `order` (oid,list, aid, uid, summary, total, status ) values (?,?,?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async del({ cid }) {
    const $sql = 'delete from `order` where cid=?';
    const $params = [cid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async edit({ cid, tit, start_time, end_time, img, type }) {
    const $sql = 'update `order` set tit=?, start_time=?, end_time=?,img=?,type=? where cid=?';
    const $params = [tit, start_time, end_time, img, cid, type];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async list({ uid, status }) {
    // 判断是否传递了订单状态
    // 没有传递显示全部订单
    const $sql = status === undefined ?
      'select * from `order` where uid=?' :
      'select * from `order` where uid=? and status=?';
    return await this.ctx.app.mysql.query($sql, [uid, status])
  }
  async detail({ oid }) {
    console.log(oid)
    const $sql = 'SELECT * FROM `address`,`order` WHERE address.aid=`order`.aid and `order`.oid=?';
    return await this.ctx.app.mysql.query($sql, [oid])
  }
  async update({ oid, status }) {
    const $sql = 'UPDATE `mart`.`order` SET `status`=? WHERE  `oid`=?';
    const $params = [status, oid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
}

module.exports = OrderService;
