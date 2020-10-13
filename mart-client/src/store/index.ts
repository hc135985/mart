// @ts-nocheck

import Vue from 'vue';
import Vuex from 'vuex';
const context = require['context']('./model', false, /\.(js|ts)$/);
const getModel = context.keys().map((key) => context(key));
const Store = {};

Vue.use(Vuex);

getModel.forEach((model) => {
  Store[model.default.namespace] = model.default;
});
export default new Vuex.Store({
  modules: Store,
});
