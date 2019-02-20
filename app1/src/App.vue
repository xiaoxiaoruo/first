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
    // result是个数组
    let result = this.menu.filter((obj, index) => {
      return obj.path == this.$route.path;
    });
    if (result.length) {
      this.change(result[0]);
    } else {
      if (this.$route.path.includes("music")) {
        this.change({
          name: "音乐",
          bgColor: "gray"
        });
      } else if (this.$route.path.includes("movie")) {
        this.change({
          name: "电影",
          bgColor: "#ff0036"
        });
      } else if (this.$route.path.includes("book")) {
        this.change({
          name: "书籍",
          bgColor: "blue"
        });
      } else if (this.$route.path.includes("photo")) {
        this.change({
          name: "图片",
          bgColor: "green"
        });
      }
    }
  }
};
</script>

<style>
.content {
  margin: 1rem 0;
}
</style>
