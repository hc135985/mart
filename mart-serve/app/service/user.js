/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-09-20 09:39:47
 */
'use strict';

const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;
const { idCreator, passwordCreator } = require('../utils');

class UserService extends Service {
  async login({ username, password }) {
    const pwd = passwordCreator(password);
    const $params = [username, pwd];
    const $sql = 'select * from login where username=? and password=?';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async modileLogin({ mobile }) {
    const $params = [mobile];
    const $sql = 'select * from login where mobile=?';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async modifyPwdByMobile({ mobile, password }) {
    const pwd = passwordCreator(password);
    const $params = [pwd, mobile];
    const $sql = 'update login set password=?  where mobile=?';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async modifyPwdByEmail({ email, password }) {
    const pwd = passwordCreator(password);
    let res = await this.ctx.app.mysql.query('select * from user where email=?', [email])
    console.log(res);
    const $params = [pwd, res[0].uid];
    const $sql = 'update login set password=?  where uid=?';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async getUserPermissions(uid) {
    const $params = [uid];
    const $sql = 'select * from login where uid=?';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async getuserq(isd) {
    const $params = [isd];
    const $sql = 'select * from identity where identity_id=?';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async registry({ username, password, mobile }, uid) {
    const pwd = passwordCreator(password).slice(0, 20)
    const $params = [uid, username, pwd, mobile, 'f69d451429f41dbea7ed'];
    const $sql = 'insert into login (uid,username,password,mobile,identity_id) values (?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async updataUserInfo({ uid, nickname, graph, email, mobile }) {
    const $params = [nickname, graph, email, mobile, uid];
    const $sql = 'update user set nickname=? , graph=? ,email=? , mobile=? where uid=? ';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async setuserinfo({ mobile }, uid) {
    const $params = [mobile, uid];
    const $sql = 'insert into user (mobile,uid) values (?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async find({ username, mobile }) {
    const $sql = "SELECT * from login";
    let res = await this.ctx.app.mysql.query($sql)
    let isF = res.some(e => e.username == username || e.mobile == mobile)
    return isF;
  }
  async getUserInfo({ uid }) {
    const $sql = 'SELECT * FROM user WHERE uid=?';
    const $params = [uid]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async upload(filepath, filenam) {
    const uploadData = fs.readFileSync(filepath);
    const uploadDir = path.join(process.cwd(), 'app/public/upload', filenam);
    const uploadError = fs.writeFileSync(uploadDir, uploadData);
    return uploadError;
  }
  async cutAvatar(avatar, uid) {
    const $params = [avatar, uid];
    this.ctx.app.mysql.query('update comment set uphoto=? where uid=?', $params)
    const $sql = 'update user set avatar=? where uid=? ';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async addIdentiry({ identity_text, identity_type }) {
    const identity_id = idCreator(identity_text);
    const $params = [identity_id, identity_text, identity_type];
    const $sql = 'insert into identity (identity_id,identity_text,identity_type) values (?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async identiryList() {
    const $sql = 'select * from `identity`';
    return await this.ctx.app.mysql.query($sql)
  }
  async addAvatar(imgUrl, uid) {
    const aid = idCreator(imgUrl)
    const $params = [aid, uid, imgUrl];
    const $sql = 'insert into avatar (aid,uid,imgUrl) values (?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }

  async selectAvatar(imgUrl) {
    return await this.ctx.app.mysql.query('select * from avatar where imgUrl=?', [imgUrl])
  }

  async historyAvatar({ uid }) {
    const $sql = 'select * from avatar where uid=? limit 0,6'
    const $params = [uid]
    return await this.ctx.app.mysql.query($sql, $params)
  }
}

module.exports = UserService;
