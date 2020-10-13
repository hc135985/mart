/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:09:23
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class CommentService extends Service {
  async add({ uid, pid, uphoto, uname, comment, score }) {
    const cid = idCreator(pid).slice(0, 20);
    const $sql = 'insert into comment (cid,pid,uid, uphoto, uname, comment, score) values (?,?,?,?,?,?,?)';
    const $params = [cid, pid, uid, uphoto, uname, comment, score];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async list({ pid, pagesize, pagecount }) {
    pagesize = pagesize || 10
    pagecount = pagecount || 1
    const $sql = 'select *  from comment where pid=? limit ?,?';
    return await this.ctx.app.mysql.query($sql, [pid,
      (pagecount - 1) * pagesize, pagesize * pagecount])
  }
  async allList({ pagesize = 10, pagecount = 1 }) {
    const $sql = 'select * from comment limit ?,?';
    return await this.ctx.app.mysql.query($sql, [(pagecount - 1) * pagesize, pagesize * pagecount])
  }
  async delete({ cid }) {
    const $sql = 'delete from comment where cid=?';
    return await this.ctx.app.mysql.query($sql, [cid])
  }
}

module.exports = CommentService;
