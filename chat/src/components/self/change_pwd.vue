<template>
  <div id="chg_pwd">
    <chathead></chathead>
    <div id="content">
      <div style="margin-top: 55px;"></div>
      <el-input v-model="oldpwd" placeholder="请输入密码"></el-input>
      <div style="margin-top: 25px;"></div>
      <el-input v-model="newpwd" placeholder="请输入修改后的密码"></el-input>
      <div style="margin-top: 25px;"></div>
      <el-input v-model="newpwd1" placeholder="请确认密码"></el-input>
      <div style="margin-top: 25px;"></div>
      <el-button type="primary" @click="submit">修改</el-button>
    </div>
  </div>
</template>

<script>
import chathead from '../common/chat_head';
export default {
  name:'chg_pwd',
  components:{
    chathead
  },
  data(){
    return{
      oldpwd:'',
      newpwd:'',
      newpwd1:'',
    }
  },
  methods:{
    submit(){
      if (this.$common.ifnull(this.oldpwd,this.newpwd,this.newpwd1)) return;
      if (this.newpwd!=this.newpwd1){
        alert("两次输入不同!");
        return;
      }
      this.$axios.post('http://111.230.63.143:3005/chgpwd',{
        username:localStorage.username,
        oldpwd:this.oldpwd,
        newpwd:this.newpwd,
      }).then(res=>{
        if(res.data==0)alert("密码错误");
        if(res.data==1)alert("修改成功");
      })
    }
  }
}
</script>

<style lang="less" scoped>
#chg_pwd {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 68%;
  align-items: center;
  #content{

    width: 50%;
    padding: 25px;
  }
}
</style>
