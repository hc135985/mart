/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-16 14:44:00
 */
'use strict';

const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;
const { idCreator, passwordCreator } = require('../utils');

class UserService extends Service {
  async login({ username, password }) {
    const pwd = passwordCreator(password).substring(0, 20);
    const $params = [username, pwd];
    const $sql = 'select * from login where username=? and password=?';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async registry({ username, password }) {
    const uid = idCreator(username);
    const pwd = passwordCreator(password)
    const $params = [uid, username, pwd];
    const $sql = 'insert into login (uid,username,password) values (?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async find({ username }) {
    const $sql = 'select username from login where username=?';
    const $params = [username];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async getUserInfo({ uid }) {
    const $sql = 'SELECT * FROM login,user WHERE login.uid=user.uid AND login.uid=?';
    const $params = [uid]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async upload(filePath, filename) {
    const uploadData = fs.readFileSync(filePath);
    const uploadDir = path.join(process.cwd(), '/app/public/upload', filename);
    const uploadError = fs.writeFileSync(uploadDir, uploadData);
    return uploadError;
  }
  async updateAvatar({ imgUrl, uid }) {
    const $sql = 'update user set avatar=? where uid=?';
    const $params = [imgUrl, uid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async insertAvatar({ imgUrl, uid }) {
    const $sql = 'insert into avatar (aid,uid,imgUrl) values (?,?,?)';
    const aid = idCreator(imgUrl);
    const $params = [aid, uid, imgUrl];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async avatarList({ uid, pagesize, pageCount }) {
    pagesize = pagesize || 0;
    pageCount = pageCount || 10;
    const $sql = `select * from avatar where uid="${uid}" limit ${pagesize},${pageCount} `;
    return await this.ctx.app.mysql.query($sql)
  }
  async addIdentity({ identity_text, identity_type }) {
    const identity_id = idCreator(identity_text);
    const $params = [identity_id, identity_text, identity_type];
    const $sql = 'insert into identity (identity_id,identity_text,identity_type) values (?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async identityList() {
    const $sql = 'select * from `identity`';
    return await this.ctx.app.mysql.query($sql)
  }

  async identity({ uid }) {
    const $sql = 'SELECT * FROM login,identity WHERE login.identity_id=identity.identity_id and login.uid=?';
    return await this.ctx.app.mysql.query($sql, [uid])
  }

}

module.exports = UserService;
