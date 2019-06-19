<template>
  <div id="message">
    <chathead></chathead>
    <div id="content">
      <div id="head">
        <input type="file" name="file" @change="upload">
        <img :src="src" onerror="this.src='http://111.230.63.143:3005/headpic/common/common.jpg'">
      </div>
      <div class="item">
        <span>姓名</span>
        <span id="name">{{username}}</span>
      </div>
      <div class="item">
        <span>性别</span>
        <span id="name">男</span>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
import chathead from '../common/chat_head';
export default {
  name:'message',
  components:{
    chathead
  },
  data(){
    return{
      username:localStorage.username,
      src:'',
    }
  },
  mounted(){
    this.gethead();
  },
  methods:{
    gethead(){
      this.$axios.post('http://111.230.63.143:3005/rvfile/get_head',{
        username:localStorage.username
      }).then(res=>{
        this.src=res.data;
      })
    },
    upload(e){
      // 上传照片
      var self = this;
      let file = e.target.files[0];
      /* eslint-disable no-undef */
      let param = new FormData(); // 创建form对象
      param.append("file", file, file.name); // 通过append向form对象添加数据
      param.append("username", localStorage.username); // 添加form表单中其他数据
      console.log(param.file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      // 添加请求头
      this.$axios
        .post("http://111.230.63.143:3005/rvfile/post_head", param, config)
    }
  }
}
</script>

<style lang="less" scoped>
#message {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 68%;
}
#head{
  border-radius:100%;
  overflow:hidden;
  width: 150px;
  height: 150px;
  input{
    Opacity:0;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: 1000;
  }
  img{
    width:150px;
    height:150px;
    //position: absolute;
  }
}
#content{
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .item{
    flex-direction: row;
    justify-content: flex-start;
    #name{
      font-size:40px
    }
  }
}
</style>
