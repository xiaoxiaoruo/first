<template>
  <div>
    <aplayer :music="musicList[0]" :list="musicList" :showLrc="true" :autoplay="true" v-if="isShow"></aplayer>
  </div>
</template>

<script>
import Axios from "axios";
import Aplayer from "vue-aplayer";
export default {
  data() {
    return {
      musicList: [],
      // 页面aplayer先加载，所以加一个v-if去控制，先接收再显示
      isShow:false
    };
  },
  created() {
    Axios.get("/musicdata.json")
      .then(result => {
        // console.log(result);
        // this.musicList = [...result.data.musicData];

        let List = result.data.musicData;
        console.log(List);
        List.forEach(element => {
          let obj = {
            title: element.title,
            pic: element.musicImgSrc,
            src: element.src,
            artist: element.author,
            lrc: "http://localhost:8080/" + element.lrc
          };
          this.musicList.push(obj);
          this.isShow = true
        });
        console.log(this.musicList);
      })
      .catch();
  },
  components: {
    Aplayer
  }
};
</script>

<style scoped>
</style>