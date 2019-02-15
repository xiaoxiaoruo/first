<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view/>
    </div>
    <Footer :menu="menu"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          path: "/movie",
          name: "电影",
          bgColor: "#ff0036"
        },
        {
          path: "/music",
          name: "音乐",
          bgColor: "gray"
        },
        {
          path: "/book",
          name: "书籍",
          bgColor: "blue"
        },
        {
          path: "/photo",
          name: "图片",
          bgColor: "green"
        }
      ]
    };
  },
  components: {
    Header,
    Footer
  },
  methods: mapMutations(["change"]),
  created() {
    let result = this.menu.filter((obj, index)=> {
      return obj.path == this.$route.path;
    });
    if(result.length){
      this.change(result[0]);
    }
  }
};
</script>

<style>
.content {
  margin: 1rem 0;
}
</style>
