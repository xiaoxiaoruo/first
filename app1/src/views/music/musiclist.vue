<template>
  <div>
    <aplayer
      :music="{
    title: '广东爱情故事',
    artist: '广东雨神',
    src: 'http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3',
    pic: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3283023278,2758205127&fm=58&bpow=1824&bpoh=1824',
    lrc:'http://localhost:8080/lrc/广东爱情故事.lrc'
    }"
      :list="musicList"
      :showLrc="true"
      :autoplay="true"
    ></aplayer>
  </div>
</template>

<script>
import Axios from "axios";
import Aplayer from "vue-aplayer";
export default {
  data() {
    return {
      musicList: []
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
.aplayer{
  overflow: hidden;
}
</style>