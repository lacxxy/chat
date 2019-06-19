<template>
  <div id="init_group">
    <div id="header"></div>
    <p id="title">创建一个新群组</p>
    <p class="margin">名称:</p>
    <input type="text" class="margin" v-model="group_name">
    <p class="margin">邀请用户:</p>
    <input type="text" class="margin" v-model="username" @keyup.enter="search()">
    <div id="iv_user" class="margin">
      <p v-for="user in ivuser">
        {{user}}
      </p>
    </div>

    <el-button type="info" @click="creat_group">创建</el-button>
  </div>
</template>
<script>
import { stringify } from 'querystring';
export default {
  name:'init-group',
  data(){
    return{
      group_name:'',
      username:'',
      ivuser:[],
    }
  },
  methods:{
    search:function(){
      let $this=this;
      this.$axios.get(`http://111.230.63.143:3005/ifuser?name=${this.username}`)
      .then(res=>{
        if(res.data==[]){
          alert("内部暂无此人!");
        }else{
          $this.ivuser.push($this.username);
        }
        $this.username='';
      })
    },
    creat_group:function(){
      if (this.$common.ifnull(this.group_name,this.ivuser.length)){
        alert("不能为空");
        return;
      }
      let $this=this;
      $this.ivuser.push(localStorage.username);
      this.$axios.post(`http://111.230.63.143:3005/creat_group`,
        {
          group_name:$this.group_name,
          group_member:$this.ivuser,
        }
      ).
      then((res)=>{
        $this.$store.commit('pushgrouplist',$this.group_name);
        $this.group_name="";
        $this.ivuser=[];
      });
    }
  }
}
</script>

<style lang="less" scoped>
#init_group {
  height: 100%;
  flex: 1;
  input {
    height: 40px;
    border: 2px rgb(150, 150, 150) solid;
  }
  #title {
    text-align: center;
    font-size: 35px;
    font-weight: bolder;
    margin-top: 35px;
  }
  button {
    margin: 5px;
    margin-left: 20%;
    font-size: 20px;
  }
}
#header {
  height: 12%;
  width: 100%;
  border-bottom: 1px rgb(194, 194, 194) solid;
}
.margin {
  margin: 8px;
  margin-left: 20%;
  width: 60%;
  font-size: 24px;
  font-weight: bolder;
}
#iv_user {
  width: 60%;
  height: 150px;
  border: 2px rgb(150, 150, 150) solid;
  overflow: scroll;
}
</style>

