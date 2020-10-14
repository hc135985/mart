/*
 * @Author: heinan 
 * @Date: 2020-07-14 10:08:28 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:08:04
 */
'use strict';

const md5 = require('md5');
const path = require('path')
const fs = require('fs')
const sha256 = require('crypto-js/sha256');
const jsonwebtoken = require('jsonwebtoken');
const { PWD_KEYGEN } = require('../config');

module.exports.idCreator = function (name) {
  const id = JSON.stringify({
    name,
    tim: new Date().getTime(),
  })
  return md5(id).slice(0, 20)
}

module.exports.passwordCreator = function (password) {
  const keygen = sha256(password, PWD_KEYGEN);
  return keygen.toString().slice(0, 20);
}

module.exports.getUserByToken = function (token) {
  return jsonwebtoken.decode(token)
}
module.exports.tokenCreator = function (uid, secret) {
  const jwt = jsonwebtoken.sign({
    uid,
    signTime: new Date().getTime(),
  }, secret, { expiresIn: '24h' })
  return jwt;
}

module.exports.verifyToken = function (token, secret) {
  return new Promise((reslove, reject) => {
    jsonwebtoken.verify(token, secret, (err, info) => {
      if (!err) {
        reslove(info);
      } else {
        reject(err);
      }
    })
  })
}

module.exports.nameCreator = function (filename) {
  const extname = path.extname(filename);
  const basename = path.basename(filename, extname);
  const url = JSON.stringify({
    basename,
    tim: new Date().getTime()
  })
  const imgName = md5(url) + extname;
  return imgName
}

module.exports.route = function (url, method) {
  return { url, method }
}
module.exports.checkWhiteList = function (url, method, whiteList) {
  const result = whiteList.findIndex(item => {
    if (typeof item.url === 'string') {
      return item.url === url && (item.method === 'any' || item.method === method);
    }
    if (item.url instanceof RegExp) {
      return item.url.test(url) && (item.method === 'any' || item.method === method);
    }
  });
  return result !== -1;
}