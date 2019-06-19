<template>
  <div id="chat_head">
    <p>{{username}}</p>
  </div>
</template>

<script>
export default {
  name:'chathead',
  props:[
    'username',
  ]
}
</script>

<style lang="less" scoped>
#chat_head {
  height: 100px;
  border-bottom: 1px rgb(194, 194, 194) solid;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  p{
    margin: 30px;
    font-size: 25px;
  }
}
</style>
