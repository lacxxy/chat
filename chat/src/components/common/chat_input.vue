<template>
  <div id="chatinput">
    <div id="emoji" v-if="faceShow">
      <li v-for="(item,index) in face" @click="choose_face(item)">
        {{item}}
      </li>
    </div>
    <div id="input">
      <img src="../../assets/emoji.png" @click="faceContent()">
      <input type="textarea" v-model="mymes">
      <img src="../../assets/send.png" @click="post()">
    </div>
  </div>
</template>

<script>
const appData = require("../../assets/emojis.json");
export default {
  name: "chatinput",
  data() {
    return {
      face: [],
      faceShow: false,
      mymes: ""
    };
  },
  props: {
    type: {
      type: String
    }
  },
  created() {
    if (this.type == "user") {
      this.post = function() {
        if (this.$common.ifnull(this.mymes)) return;
        let data = {
          type: "group",
          from: localStorage.username,
          to: this.$store.state.nowgroup,
          mes: this.mymes,
          time: new Date()
        };
        this.$socket.emit("mes", data);
        this.$store.commit("pushgroupchat", {
          from: data.from,
          to: data.to,
          mes: data.mes,
          time: new Date()
        });
        this.mymes = "";
      };
    } else if (this.type == "group") {
      this.post = function() {
        if (this.$common.ifnull(this.mymes)) return;
        let data = {
          type: "user",
          from: localStorage.username,
          to: this.$store.state.nowchat,
          mes: this.mymes,
          time: new Date()
        };
        this.$socket.emit("mes", data);
        this.$store.commit("pushchatmes", {
          from: data.from,
          to: data.to,
          mes: data.mes,
          time: new Date()
        });
        this.mymes = "";
        this.$store.commit("pushchatlist", data.to);
      };
    }
  },
  methods: {
    showmenu() {
      this.menu = !this.menu;
    },
    faceContent() {
      this.faceShow = !this.faceShow;
      if (this.faceShow == true) {
        for (let i in appData) {
          this.face.push(appData[i].char);
        }
      } else {
        this.face = [];
      }
    },
    choose_face(data) {
      this.mymes += data;
    },
    post: function() {}
  }
};
</script>

<style lang="less" scoped>
#chatinput {
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 80%;
  #emoji {
    width: 90%;
    height: 80px;
    display: flex;
    overflow-y: scroll;
    flex-wrap: wrap;
    background: rgb(173, 173, 173);
    list-style: none;
  }
  #input {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  input {
    height: 40px;
    border: 1px rgb(185, 185, 185) solid;
    font-size: 20px;
    display: block;
    flex: 1;
  }
  img {
    height: 40px;
    width: 40px;
    border: 1px rgb(185, 185, 185) solid;
  }
}
</style>
