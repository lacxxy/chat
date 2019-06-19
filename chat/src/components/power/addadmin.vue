<template>
  <div id="addadmin">
    <chathead></chathead>
    <h1 id="title">添加权限</h1>
    <div class="input_area">
      <h4>姓名:</h4>
      <el-input placeholder="请输入姓名" v-model="name" class="input"></el-input>
    </div>
    <div class="input_area">
      <h4>选择权限</h4>
      <el-checkbox-button v-model="adduser">添加人员</el-checkbox-button>
      <el-checkbox-button v-model="deluser">删除人员</el-checkbox-button>
      <el-checkbox-button v-model="addpower">增加权限</el-checkbox-button>
      <el-checkbox-button v-model="delpower">删除权限</el-checkbox-button>
    </div>
    <el-button type="warning" @click="addpow">确认添加</el-button>
  </div>
</template>
<script>
import chathead from '../common/chat_head';
export default {
  name: "addadmin",
  components:{
    chathead,
  },
  data() {
    return {
      name: "",
      adduser: false,
      deluser: false,
      addpower: false,
      delpower: false
    };
  },
  methods: {
    addpow() {
      let $this = this;
      this.$axios
        .post(`http://111.230.63.143:3005/addpower/addadmin`, {
          username:$this.name,
          adduser: $this.adduser,
          deluser: $this.deluser,
          addadmin: $this.addpower,
          deladmin: $this.delpower
        })
        .then(res => {
          if (res.data == 1) alert("添加成功");
          else alert("添加失败");
        });
    }
  }
};
</script>

<style lang="less" scoped>
#addadmin {
  height: 100%;
  flex: 1;
  text-align: center;
}
.input {
  width: 40%;
}
.input_area {
  margin: 20px;
}
h4 {
  margin: 5px;
}
</style>

