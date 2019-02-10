import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    count: 5,
    num:6
}

// 用于修改数据
const mutations = {
    add(state,sum) {
        state.count+=sum;
    }
}

// 计算属性
const getters = {
    count1(state){
        return state.count + state.num
    }
}

const actions = {
    addAction({commit},sum){
        commit('add',sum)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});