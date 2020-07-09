/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from '@/store/getter';

Vue.use(Vuex);

// 创建自己的执行上下文
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((module, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    module[moduleName] = value.default;
    return module;
}, {});

export default new Vuex.Store({
    modules,
    getters,
});
