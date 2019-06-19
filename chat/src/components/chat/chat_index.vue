<template>
  <div id="chat_index">
    <img src="../../assets/menu.png" @click="showmenu">
    <chatlist v-show="menu"></chatlist>
    <chat></chat>
  </div>
</template>

<script>
import chat from './chat';
import chatlist from './chatlist';
export default {
  name:"chat_index",
  components: {
    chat,
    chatlist,
  },
  data(){
    return{
      menu:true,
    }
  },
  methods:{
    showmenu(){
      this.menu=!this.menu;
    }
  }
}
</script>

<style lang="less" scoped>
#chat_index{
  flex:1;
  width: 100%;
  display: flex;
  overflow: hidden;
}
img{
  width: 30px;
  height:30px;
  display: none;
}
#chatlist{
  width: 32%;
  display: inline-block;
}
#chat{
  flex: 1;
  display: flex;
}
@media screen and (max-width: 520px){
  #chatlist {
    position: absolute;
    top:0;
    width: 100%;
    height: 40%;
  }
  img{
    position: absolute;
    display: block;
    z-index: 1000;
    top:0;
  }
}
</style>
