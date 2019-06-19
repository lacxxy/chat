<template>
  <div id="chatlist">
    <listhead>
      <p slot="title">聊天</p>
    </listhead>
    <div id="list">
      <input type="text" @keyup.enter="find_user(username)" v-model="username">
      <el-menu background-color="#4D4D4D" text-color="#ffffff" active-text-color="#ffffff">
      <el-menu-item class="item" v-for="(item,index) in $store.state.chatlist" @click="choose_chat(index)" :key="index">
        <img src="../../assets/close.png">
        <span>{{item}}</span>
      </el-menu-item>
       </el-menu>
    </div>
  </div>
</template>

<script>
import listhead from "../common/list_header";
export default {
  name: "chatlist",
  components:{
    listhead,
  },
  data() {
    return {
      username: ""
    };
  },
  mounted() {
    Notification.requestPermission();
    let $this = this;
    this.$axios
      .get(
        `http://111.230.63.143:3005/getchatlist?name=${
          localStorage.username
        }`
      )
      .then(res => {
        $this.$store.commit("getchatlist", res.data);
      });
  },
  methods: {
    choose_chat: function(index) {
      let $this = this;
      this.$store.commit("setnowchat", this.$store.state.chatlist[index]);
      this.$store.commit("getchatmes");
    },
    find_user: function(data) {
      this.$axios.get(`http://111.230.63.143:3005/ifuser?name=${data}`).then(res => {
        res.data == 0
          ? alert("内部暂无此人!")
          : this.$store.commit("setnowchat", data);
        this.$store.commit("getchatmes");
        this.username = "";
      });
    },
    rmv_chat: function(name) {
      this.$store.commit('rmvchatlist',name);
      this.$axios.post(`http://111.230.63.143:3005/rmvchatlist`,{
        username:name
      }).then(
        ()=>{
          $store.commit('rmvchatlist',name);
        }
      )
    }
  }
};
</script>

<style lang="less" scoped>
#chatlist {
  background-color: rgb(77, 77, 77);
  overflow-y:scroll;
  z-index: 500;
}
img{
  width: 30px;
  margin-right: 10px;
}
#list {
  height: 88%;
  text-align: center;
  padding-top: 20px;
  input {
    width: 70%;
    height: 30px;
    border: 0px;
    outline: none;
    border-radius: 12px;
    font-size: 20px;
  }
  .item {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: flex-start;
    margin-top: 10px;
    margin-left: 15%;
  }
  .item:hover {
    background: rgb(170, 170, 170);
  }
  .item:active {
    background: rgb(255, 255, 255);
  }
}

</style>
