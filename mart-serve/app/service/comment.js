/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-15 11:58:25
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class CommentService extends Service {
  async add({ uid, pid, uphoto, uname, comment, score }) {
    const cid = idCreator(pid);
    const $sql = 'insert into comment (cid,pid,uid, uphoto, uname, comment, score) values (?,?,?,?,?,?,?)';
    const $params = [cid, pid, uid, uphoto, uname, comment, score];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async list({ pid }) {
    const $sql = 'select uphoto,uname,comment,score,cid from comment where pid=?';
    return await this.ctx.app.mysql.query($sql, [pid])
  }
  async delete({ cid }) {
    const $sql = 'delete from comment where cid=?';
    return await this.ctx.app.mysql.query($sql, [cid])
  }
}

module.exports = CommentService;
