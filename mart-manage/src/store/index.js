/*
 * @Author: heinan 
 * @Date: 2020-09-09 15:04:41 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-09 15:08:32
 */
const context = require['context']('./model', false, /\.js$/);
const getModel = context.keys().map((key) => context(key));

export function createStore(app) {
  getModel.forEach((model) => {
    app.model(model.default);
  });
}