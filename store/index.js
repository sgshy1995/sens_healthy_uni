import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import global from '@/store/modules/global.js'

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
	modules: {
		global
	}
})
export default store