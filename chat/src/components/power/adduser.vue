<template>
  <div id="adduser">
    <chathead></chathead>
    <h1 id="title">添加新人员</h1>
    <div class="input_area">
      <h4>姓名:</h4>
      <el-input v-model="name" placeholder="请输入姓名" class="input"></el-input>
    </div>
    <div class="input_area">
      <h4>默认密码</h4>
      <el-input v-model="passwd" class="input"></el-input>
    </div>
     <el-button type="primary" @click="adduser">添加新成员</el-button>
  </div>
</template>
<script>
import chathead from '../common/chat_head';
export default {
  name:'adduser',
  components:{
    chathead,
  },
  data(){
    return{
      name:'',
      passwd:'123',
    }
  },
  methods:{
    adduser(){
      if(this.$common.ifnull(this.name,this.passwd))return;
      this.$axios.post(`http://111.230.63.143:3005/addpower/adduser`,{
        name:this.name,
        passwd:this.passwd,
      }).then((res)=>{
        if(res==0) alert("添加失败!");
        else alert("添加成功!");
      });
      this.name="";
    }
  }
}
</script>

<style lang="less" scoped>
#adduser {
  height: 100%;
  flex: 1;
  text-align: center;
}
.input_area{
  margin: 20px;
}
.input{
  width: 40%;
}

h4{
  margin: 5px;
}
</style>

