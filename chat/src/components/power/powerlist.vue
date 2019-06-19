<template>
  <div id="powerlist">
    <listhead>
      <p slot="title">权限</p>
    </listhead>
    <div id="list">
      <p v-if="list.length==0" style="color:white">您暂无任何权限</p>
      <el-menu background-color="#4D4D4D" text-color="#ffffff" active-text-color="#ffffff">
      <el-menu-item class="item" v-for="(item,index) in list"@click="$router.push(`/power_index/${item.rt}`)" :key="index">
        <span>{{item.name}}</span>
      </el-menu-item>
       </el-menu>
    </div>
  </div>
</template>

<script>
import listhead from "../common/list_header";
export default {
  name: "powerlist",
  components:{
    listhead,
  },
  data() {
    return {
      list:[],
      username: ""
    };
  },
  mounted() {
    let $this = this;
    this.$axios.get(`http://111.230.63.143:3005/getpower?username=${localStorage.username}`).then((res)=>{
      if(res.data.adduser)$this.list.push({name:"添加人员",rt:'adduser'});
      if(res.data.deluser)$this.list.push({name:"删除人员",rt:'rmvuser'});
      if(res.data.addadmin)$this.list.push({name:"添加管理员",rt:'addadmin'});
      if(res.data.deladmin)$this.list.push({name:"删除管理员",rt:'rmvadmin'});
    });
  },
  methods: {
    choose_chat: function(index) {
      let $this = this;
      this.$store.commit("setnowchat", this.$store.state.chatlist[index]);
      this.$store.commit("getchatmes");
    },
    find_user: function(data) {
      this.$axios.get(`http://111.230.63.143:3005/ifuser?name=${data}`).then(res => {
        res.data == 0
          ? alert("内部暂无此人!")
          : this.$store.commit("setnowchat", data);
        this.$store.commit("getchatmes");
        this.username = "";
      });
    },
    rmv_chat: function() {
      alert(1);
    }
  }
};
</script>

<style lang="less" scoped>
#powerlist {
  height: 100%;
  background-color: rgb(77, 77, 77);
}
#list {
  height: 88%;
  text-align: center;
  padding-top: 20px;
  input {
    width: 70%;
    height: 30px;
    border: 0px;
    outline: none;
    border-radius: 12px;
    font-size: 20px;
  }
  .item {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: flex-start;
    margin-top: 10px;
    margin-left: 15%;
  }
  .item:hover {
    background: rgb(170, 170, 170);
  }
  .item:active {
    background: rgb(255, 255, 255);
  }
}
</style>
