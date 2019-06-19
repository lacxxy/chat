import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    username: '', //当前登录用户名
    chatlist: [], //私聊列表
    chatmes: [], //与当前选择聊天对象的聊天记录
    nowchat: '', //当前选择的聊天对象
    grouplist: [], //群列表
    nowgroup: '', //当前选择的群聊对象
    groupmes: [],
    mypic: '',
  },
  mutations: {
    getname(state, data) {
      state.username = data;
    },
    getpic(state) {
      if (state.mypic.length == 0) {
        axios.post('http://111.230.63.143:3005/rvfile/get_head', {
          username: localStorage.username
        }).then(res => {
          state.mypic = res.data;
          console.log(state.mypic)
        })
      }
    },
    getchatlist(state, data) {
      state.chatlist = data;
    },
    pushchatlist(state, data) {
      for (let i of state.chatlist) {
        if (i == data) {
          return;
        }
      }
      state.chatlist.push(data);
    },
    setnowchat(state, data) {
      state.nowchat = data;
    },
    setnowgroup(state, data) {
      state.nowgroup = data;
    },
    getchatmes(state) {
      axios
        .get(
          `http://111.230.63.143:3005/getmes?name1=${localStorage.username}&name2=${state.nowchat}`
        )
        .then(res => {
          state.chatmes = [];
          if (res.data[0]) state.chatmes = res.data;
        });
    },
    getgroupmes(state) {
      axios
        .get(
          `http://111.230.63.143:3005/getgroupmes?name1=${localStorage.username}&name2=${state.nowgroup}`
        )
        .then(res => {
          state.groupmes = [];
          if (res.data[0]) state.groupmes = res.data;
        });
    },
    pushchatmes(state, data) {
      state.chatmes.push(data);
    },
    getgrouplist(state, data) {
      state.grouplist = data;
    },
    pushgrouplist(state, data) {
      state.grouplist.push(data);
    },
    pushgroupchat(state, data) {
      state.groupmes.push(data);
    },
    rmvchatlist(state, data) {
      state.chatlist.splice(state.chatlist.findIndex(mydata => mydata == data), 1);
    }
  }
});
export default store;
