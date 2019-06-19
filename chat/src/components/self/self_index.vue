<template>
  <div id="self_index">
    <selflist></selflist>
    <router-view></router-view>
  </div>
</template>

<script>
import self_list from './self_list'
export default {
  name:'self_index',
  components:{
    selflist:self_list
  }
}
</script>

<style lang="less" scoped>
#self_index{
  flex:1;
  display: flex;
}
#self_list{
  width: 32%;
}
</style>
