<template>
  <div id="group_chat">
    <chathead :username="$store.state.nowgroup"></chathead>
    <div id="chatcontent">
        <ul v-for="item in $store.state.groupmes">
          <div class="left_item" v-if="item.from!=myname">
            <div id="head">
               <img :src="'http://111.230.63.143:3005/headpic/'+item.from+'/'+item.from+'.jpg'" onerror="this.src='http://111.230.63.143:3005/headpic/common/common.jpg'">
            </div>
            <div class="mes">
              <div class="title">
              <p>{{item.from}}</p>
              <p class="time">{{item.time}}</p>
            </div>
            <p class="mesfont">{{item.mes}}</p>
            </div>
          </div>
          <div class="right_item" v-if="item.from==myname">
            <div id="head">
               <img :src="$store.state.mypic">
            </div>

            <div class="mes">
              <div class="title">
              <p>{{item.from}}</p>
              <p class="time">{{item.time}}</p>
            </div>
            <p class="mesfont">{{item.mes}}</p>
            </div>
          </div>
        </ul>
    </div>
    <chatinput :type="type"></chatinput>
  </div>
</template>

<script>
import grouplist from "./grouplist";
import chathead from "../common/chat_head";
import chatinput from "../common/chat_input";
export default {
  components: {
    grouplist,
    chathead,
    chatinput
  },
  name: "group_chat",
  data() {
    return {
      type:'user',
      myname: localStorage.username,
      myid: "",
    };
  },
  mounted(){
    this.$store.commit('getpic');
  },
  sockets: {
    groupmes: function(data) {
       new Notification("你有一条新信息", {
        body: "查看",
      });
      if (
        data.to == this.$store.state.nowgroup &&
        data.from != localStorage.username
      ) {
        this.$store.commit("pushgroupchat", {
          from: data.from,
          to: data.to,
          mes: data.mes,
          time: data.time
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
#group_chat {
  height: 100%;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}
#grouplist {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 40%;
}
#menu {
  z-index: 1000;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1%;
  left: 1%;
}
#chatcontent {
  width: 90%;
  margin-left: 5%;
  height: 75%;
  overflow-y: scroll;
  .left_item {
    margin-top: 20px;
    display: flex;
  }
  .right_item {
    display: flex;
    margin-top: 20px;
    flex-direction: row-reverse;
  }
  .mesfont {
    font-size: 20px;
  }
  .title {
    p {
      display: inline-block;
      font-weight: bolder;
      margin-bottom: 5px;
    }
    .time {
      color: rgb(175, 175, 175);
      font-weight: lighter;
      font-size: 10px;
    }
  }
}
#head{
  border-radius:100%;
  overflow:hidden;
  width: 45px;
  height: 45px;
  margin-right: 5px;
  img{
    width:45px;
    height:45px;
    //position: absolute;
  }
}
</style>
