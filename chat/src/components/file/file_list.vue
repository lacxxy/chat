<template>
  <div id="file_list">
    <listhead>
      <p slot="title">文件</p>
    </listhead>
    <el-menu style="padding-top:20px" background-color="#4D4D4D">
       <el-menu-item class="item" @click="$router.push(`/file_index/upload`)">
        文件上传
       </el-menu-item>
       <el-menu-item class="item" @click="$router.push(`/file_index/files`)">
          我的云盘
       </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import listhead from "../common/list_header";
export default {
  name: "file_list",
  components: {
    listhead
  }
};
</script>

<style lang="less" scoped>
#file_list {
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
