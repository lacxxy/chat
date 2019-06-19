<template>
  <div id="side">
    <router-link :to="{ name: 'chat_index'}"><img src="../assets/mes.png"></router-link>
    <router-link :to="{ name: 'group_index'}"><img src="../assets/group.png"></router-link>
    <router-link :to="{ name: 'power_index'}"><img src="../assets/right.png"></router-link>
    <router-link :to="{ name: 'file_index'}"><img src="../assets/file.png"></router-link>
    <router-link :to="{ name: 'self_index'}"><img src="../assets/message.png"></router-link>
    <a @click="login_out"><img src="../assets/login_out.png"></a>
  </div>
</template>

<script>
export default {
  name:'side',
  methods:{
    login_out(){
      let flag=confirm("退出当前账号");
      if(flag==1){
        delete localStorage.username;
        this.$router.push("/");
      }
    }
  },
}
</script>

<style lang="less" scoped>
a{
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
}
img{
  height: 40px;
}
@media screen and(max-width: 500px){
  a{
    width: 33.3%;
  }
}
</style>
