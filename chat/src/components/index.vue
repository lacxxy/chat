<template>
  <div id="index">
    <side></side>
    <router-view></router-view>
  </div>
</template>

<script>
import side from './side';
export default {
  name:"index",
  mounted(){
    Notification.requestPermission();
  },
  components: {
    side
  },
}
</script>

<style lang="less" scoped>
#index{
  height: 100%;
  display: flex;
  position: relative;
}
#side{
  display: flex;
  background-color: rgb(77, 77, 77);
  border: 1px rgb(194, 194, 194) solid;
  justify-content: center;
  width: 5%;
  flex-direction: column;
}
@media screen and(max-width: 500px){
  #index{
    flex-direction: column;
    flex-flow: column-reverse;
  }
  #side{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    position: relative;
  }
}
@media screen and(max-height:500px){
  #side{
    display: none;
  }
}
</style>
