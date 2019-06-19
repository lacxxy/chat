<template>
  <div id="files">
    <chathead></chathead>
    <el-table :data="file" stripe style="width: 100%;padding:20px;overflow-y: scroll;">
      <el-table-column width="50">
        <img src="../../assets/file_logo.png">
      </el-table-column>
      <el-table-column prop="name">
      </el-table-column>
      <el-table-column width="100">
         <template slot-scope="scope">
         <el-button type="text"><a :href="'http://111.230.63.143:3005/rvfile/download_file?filename='+scope.row.name">下载</a></el-button>
         </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import chathead from '../common/chat_head';
  export default {
    name: 'files',
    components: {
      chathead,
    },
    mounted() {
      this.getfile();
    },
    data() {
      return {
        file: [],
      }
    },
    methods: {
      getfile() {
        this.$axios.get("http://111.230.63.143:3005/rvfile/get_file").then(res => {
          //this.file = res.data;
          for(let i of res.data){
            this.file.push({
              name:i,
            })
          }
        })
      },
    }
  }

</script>

<style lang="less" scoped>
#files {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 68%;
  #filelist {
    padding-top: 20px;
    width: 70%;
    margin-left: 15%;
    text-align: center;
    overflow: scroll;
    a {
      text-decoration: none;
      margin-top: 5px;
      display: block;
    }

  }
}
img{
      width: 20px;
    }
</style>
