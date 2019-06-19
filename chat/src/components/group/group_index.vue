<template>
  <div id="group_index">
    <img src="../../assets/menu.png" id="menu" @click="showmenu">
    <grouplist v-show="menu"></grouplist>
    <router-view></router-view>
  </div>
</template>

<script>
import grouplist from './grouplist';
import initGroup from './init_group';
export default {
  name:'group_index',
  components:{
    grouplist,
    initGroup,
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
#group_index{
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
}
img{
  width: 30px;
  height: 30px;
  display: none;
}
#grouplist{
  width: 32%;
  display: inline-block;
}
@media screen and(max-width:500px){
  img{
    display: block;
    position: absolute;
    z-index: 1000;
  }
  #group_index{
    flex-direction: column;
    #grouplist{
      width: 100%;
      height: 50%;
      position: absolute;
    }
  }
}
</style>
