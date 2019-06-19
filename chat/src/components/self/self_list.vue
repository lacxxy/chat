<template>
  <div id="self_list">
    <listhead>
      <p slot="title">信息</p>
    </listhead>
   <el-menu style="padding-top:20px" background-color="#4D4D4D">
       <el-menu-item class="item" @click="$router.push(`/self_index/message`)">
        我的信息
       </el-menu-item>
       <el-menu-item class="item" @click="$router.push(`/self_index/chg_pwd`)">
        更改密码
       </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import listhead from "../common/list_header";
export default {
  name: "self_list",
  components: {
    listhead
  }
};
</script>

<style lang="less" scoped>
#self_list {
  background-color: rgb(77, 77, 77);
  .item{
    display: flex;
    width: 70%;
    margin-left: 15%;
    margin-top: 10px;
     color: white;
      text-decoration: none;
      font-size: 18px;
  }
}

</style>
