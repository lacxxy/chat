<template>
  <div id="login">
    <hr>
    <div id="bd">
      <p id="p1">fsdj fufh jhiuordfuiwefh tureit hg fuig eftn eyguhir ferwah tgghuifsea jnnhbaui fbnhjfnujiijaw b iunojhuorHJF H ANFKRHADU IAN jtghruweh  h3uifhewnbhuij o  hufuijhs h nuif kelwj f niuyhrfi oeynu rfkusioa uhki b dufihgui</p>
      <p id="p2">dasddsaerr rfedsdf  rfewtwr  rfasdfdsa dfasdrf dsaurqw das drery jigfb jindg</p>
      <div id="inner">
      </div>
    </div>
    <div id="main">
      <div id="block"></div>
      <div id="form">
        <div id="form_inner">
          <div class="input">
            <p style="font-size:30px;">登陆</p>
          </div>
          <div class="input">
            <p>用户名:</p>
            <input type="text" v-model="username">
          </div>
          <div class="input">
            <p>密码:</p>
            <input type="password" v-model="password">
          </div>
          <div class="input">
             <input type="submit" @click="login()" value="登陆" style="background-color:yellow;color:black">
          </div>
        </div>
      </div>
      <div id="block1_border">
        <div id="block1">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted(){
    if(localStorage.username){
      this.$router.push({ name: "index" });
    }
    Notification.requestPermission();
  },
  methods: {
    login: function() {
      let $this = this;
      this.$axios
        .post(`http://111.230.63.143:3005/login`, {
          username: this.username,
          password: this.password
        })
        .then(function(res) {
          if (res.data == 1) {
            localStorage.username=$this.username;
            $this.$store.commit("getname", $this.username);
            $this.$router.push({ name: "index" });
          } else {
            alert("密码错误!");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  color: white;
  border: 0;
}
#login {
  height: 100%;
  background-color: black;
}
hr {
  position: absolute;
  top: 20%;
  width: 95%;
  border: 0.5px yellow solid;
  margin-left: 2.5%;
  z-index: 10;
}
#bd {
  height: 70%;
  width: 20%;
  margin: 20px;
  float: left;
  position: relative;
  #p1 {
    color: white;
    position: absolute;
    top: 50%;
    z-index: 100;
    background: black;
  }
  #p2 {
    color: white;
    position: absolute;
    height: 50px;
    bottom: 0;
    z-index: 100;
    background: black;
  }
}
#inner {
  border-right: 1px yellow solid;
  height: 100%;
  width: 50%;
  z-index: 1;
}
#main {
  width: 50%;
  float: right;
  margin-right: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: rgb(0, 0, 0);
  position: relative;
  #block {
    background-color: rgb(77, 77, 77);
    height: 15%;
    width: 65%;
  }
  #block1 {
    background-color: rgb(77, 77, 77);
    height: 50%;
    width: 75%;
    margin-left: 12.5%;
    position: absolute;
    bottom: 0;
  }
  #block1_border {
    width: 90%;
    height: 40%;
    position: absolute;
    bottom: 0;
    border: 1px yellow solid;
    border-bottom: 0;
  }
  #form {
    width: 80%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px yellow solid;
    position: absolute;
    top: 10%;
    #form_inner {
      width: 70%;
      padding: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgb(77, 77, 77);
      position: relative;
      border-radius: 10px;
      z-index: 100;
      .input {
        width: 60%;
        margin-bottom: 15px;
        input {
          color: black;
          font-size: 20px;
          width: 100%;
          height: 40px;
          border-radius: 10px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 520px) {
  #main {
    width: 65%;
    margin: 0;
    #block {
      height: 25%;
    }
    #form {
      top: 15%;
      height: 55%;
      width: 100%;
      #form_inner {
        width: 90%;
        padding: 5px;
        position: absolute;
        .input {
          width: 90%;
          margin: 0;
          input {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  #block1_border {
    #block1 {
      height: 80%;
    }
  }
  #p1,
  #p2 {
    display: none;
  }
}
</style>
