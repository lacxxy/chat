<template>
  <div id="grouplist">
    <listhead>
      <p slot="title">群聊</p>
    </listhead>
    <div id="list">
      <div id="list_input">
        <input type="text">
        <router-link to="/group_index/init_group"><img src="../../assets/new.png"></router-link>
      </div>
      <el-menu background-color="#4D4D4D" text-color="#ffffff" active-text-color="#ffffff">
      <el-menu-item class="item" v-for="(item,index) in $store.state.grouplist" @click="choose_chat(index)" :key="index">
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
  name: "grouplist",
  components:{
    listhead,
  },
  data() {
    return {
      groupname: ""
    };
  },
  sockets: {
    newgroup:function(data){
      this.$store.commit('pushgrouplist',data);
      console.log(data);
    }
  },
  mounted(){
    let $this=this;
    this.$axios.get(`http://111.230.63.143:3005/getgrouplist?username=${localStorage.username}`).then((res)=>{
      $this.$store.commit('getgrouplist',res.data);
    })
  },
  methods: {
    choose_chat(index){
      this.$store.commit('setnowgroup',this.$store.state.grouplist[index]);
      this.$router.push('/group_index/chat');
      this.$store.commit("getgroupmes");
    }
  }
};
</script>

<style lang="less" scoped>
#grouplist {
  height: 100%;
  background-color: rgb(77, 77, 77);
  overflow-y: scroll;
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
#list_input{
  display: flex;
  justify-content: center;
  img{
    margin-left: 5px;
    width: 30px;
    height: 30px;
  }
}

</style>
