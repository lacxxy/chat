<template>
  <div id="file_index">
    <filelist></filelist>
    <router-view></router-view>
  </div>
</template>

<script>
import file_list from './file_list';
import upload from './upload';
export default {
  name:'file_index',
  components:{
    filelist:file_list,
  }
}
</script>

<style lang="less" scoped>
#file_index{
  flex:1;
  display: flex;
}
#file_list{
  width: 32%;
}
</style>
