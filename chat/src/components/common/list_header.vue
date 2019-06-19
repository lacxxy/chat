<template>
  <div id="listhead">
      <slot name="title"></slot>
  </div>
</template>
<script>
export default {
  name:'listhead',
}
</script>

<style lang="less" scoped>
#listhead {
  height: 100px;
  border-bottom: 1px rgb(194, 194, 194) solid;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 30px;
    color: white;
    font-weight: bold;
  }
}
</style>
