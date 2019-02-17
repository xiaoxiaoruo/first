<template>
  <div>
    <ul class="container">
      <li v-for="(obj,index) in movieList" :key="(index)">
        <!-- img里边用:src -->
        <img :src="obj.images.small" alt>
        <div class="info">
          <h3>{{obj.title}}</h3>
          <p>
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}|</span>
          </p>
          <p>{{obj.collect_count}}已观看</p>
          <p>年份:{{obj.year}}</p>
          <p>
            <span v-for="(type,index) in obj.genres" :key="index">{{type}}/</span>
          </p>
        </div>
      </li>
    </ul>
    <img class="loading" src="@/assets/imgs/loading.gif" v-show="isShow">
    <div class="bottom" v-show="isBottom">到底了,哦~~~~</div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    // isShow:false;
    // isBottom:false;
    return {
      movieList: [],
      isShow: false,
      isBottom: false
    };
  },
  methods: {
    getMovie() {
      this.isShow = true;
      //   Axios.get("/movie.json")
      Axios.get("/movie10.json")
        .then(result => {
          console.log(result);
          // 取到data中的subjects 这里存储了电影的信息对象数组
          setTimeout(() => {
            this.movieList = [...result.data.subjects, ...this.movieList];
            this.isShow = false;
            if( this.movieList.length == result.data.total ){
              this.isBottom = true;
            }
          }, 2000);
        })
        .catch();
    }
  },
  created() {
    this.getMovie();
    // jsonbird  服务器代理 解决跨域 https://bird.ioliu.cn/v1?url=
    // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start=0&count=10")
    window.onscroll = () => {
      // 滚动条滚动的高度
      console.log(document.documentElement.scrollTop);
      // 可视区的高度
      console.log(document.documentElement.clientHeight);
      // 整个滚动区的高度
      console.log(document.documentElement.scrollHeight);
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight ==
        document.documentElement.scrollHeight
      && !this.isBottom) {
          this.getMovie();
      }
    };
  }
};
</script>

<style scoped>
.container {
  padding: 0.2rem;
}
li {
  display: flex;
  border-bottom: 1px solid #000;
}
li img {
  width: 90px;
  height: 123px;
  margin: auto 0;
}
.info {
  flex-grow: 1;
  margin-left: 0.2rem;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bottom{
  text-align: center;
}
</style>