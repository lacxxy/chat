<template>
  <div id="upload">
    <chathead></chathead>
     <div id="up_content">
      <el-upload class="up" drag action="http://111.230.63.143:3005/rvfile" name="file">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  </el-upload>
     </div>
  </div>
</template>

<script>
  import chathead from "../common/chat_head";
  export default {
    components: {
      chathead
    },
    name: "upload"
  };

</script>

<style lang="less" scoped>
  #upload {
    width: 68%;
    height: 100%;
    flex: 1;
    #up_content{
      width: 100%;
      padding-top: 70px;
      text-align: center;
    }
  }
</style>
