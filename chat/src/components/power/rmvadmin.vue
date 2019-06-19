<template>
  <div id="rmvadmin">
    <chathead></chathead>
    <h1 id="title">删除权限</h1>
    <div class="input_area">
      <h4>姓名:</h4>
      <el-input v-model="name" placeholder="请输入姓名" class="input"></el-input>
    </div>
    <div class="input_area">
      <h4>选择权限</h4>
      <el-checkbox-button v-model="adduser">添加人员</el-checkbox-button>
      <el-checkbox-button v-model="deluser">删除人员</el-checkbox-button>
      <el-checkbox-button v-model="addpower">增加权限</el-checkbox-button>
      <el-checkbox-button v-model="delpower">删除权限</el-checkbox-button>
    </div>
    <el-button type="danger" @click="delpow">确认删除</el-button>
  </div>
</template>
<script>
import chathead from '../common/chat_head';
export default {
  name: "rmvadmin",
  components:{
    chathead
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
    delpow() {
      if(this.$common.ifnull(this.name))return;
      this.$axios
        .post(`http://111.230.63.143:3005/addpower/deladmin`, {
          username:this.name,
          adduser: this.adduser,
          deluser: this.deluser,
          addadmin: this.addpower,
          deladmin: this.delpower
        })
        .then(res => {
          if (res.data == 1) alert("删除成功");
          else alert("删除失败");
        });
    }
  }
};
</script>

<style lang="less" scoped>
#rmvadmin {
  height: 100%;
  flex: 1;
  text-align: center;
}
.input_area {
  margin: 20px;
}
h4 {
  margin: 5px;
}
.input {
  width: 40%;
}
</style>

