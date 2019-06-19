<template>
  <div id="power_index">
    <powerlist></powerlist>
    <router-view></router-view>
  </div>
</template>

<script>
import powerlist from './powerlist';
export default {
  name:'power_index',
  components:{
    powerlist,
  }
}
</script>

<style lang="less" scoped>
#power_index{
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
}
#powerlist{
  width: 32%;
  display: inline-block;
}
</style>
