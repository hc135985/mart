/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:08:41
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class OrderService extends Service {
  async add({ list, aid, uid, summary, total, status }) {
    const oid = idCreator(uid).slice(0, 20);
    const $params = [oid, JSON.stringify(list), aid, uid, summary, total, status];
    const $sql = 'insert into `order` (oid,list, aid, uid, summary, total, status ) values (?,?,?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async del({ oid }) {
    const $sql = 'delete from `order` where oid=?';
    const $params = [oid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async edit({ list, aid, uid, summary, total, status, oid }) {
    const $sql = 'update `order` set list=?, uid=?, summary=?,total=?,status=?, aid=? where oid=?';
    const $params = [list, uid, summary, total, status, aid, oid];
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
    const $sql = 'SELECT * FROM `address`,`order` WHERE address.aid=`order`.aid and `order`.oid=?';
    return await this.ctx.app.mysql.query($sql, [oid])
  }
  async allList() {
    const $sql = 'select * from `order` '
    return await this.ctx.app.mysql.query($sql)
  }
}

module.exports = OrderService;
