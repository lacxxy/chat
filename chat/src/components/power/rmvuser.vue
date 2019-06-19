<template>
  <div id="adduser">
    <chathead></chathead>
    <h1 id="title">删除现有人员</h1>
    <div class="input_area">
      <h4>姓名:</h4>
      <el-input v-model="name" placeholder="姓名" class="input"></el-input>
    </div>
    <div class="input_area">
      <h4>再次输入姓名:</h4>
      <el-input v-model="name1" placeholder="姓名" class="input"></el-input>
    </div>
     <el-button type="danger" @click="rmvuser">确认删除</el-button>
  </div>
</template>
<script>
import chathead from '../common/chat_head';
export default {
  name:'adduser',
  components:{
    chathead
  },
  data(){
    return{
      name:'',
      name1:'',
      list:[],
    }
  },
  methods:{
    rmvuser(){
      if(this.$common.ifnull(this.name,this.name1))return;
      if(this.name!=this.name1){
        alert("两次输入不同!");
        return;
      }
      this.$axios.post(`http://111.230.63.143:3005/addpower/deluser`,{
        name:this.name,
        executor:localStorage.username,
      }).then((res)=>{
        if(res.data==1){
          alert("删除成功!")
        }else{
          alert("删除失败!")
        }
        this.name="";
        this.name1="";
      })
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

