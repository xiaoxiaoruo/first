<template>
  <div id="app">
    <Header :objYa="objYa"></Header>
    <div class="content">
      <router-view/>
    </div>
    <Footer :menu="menu" :color="objYa.bgColor" @changeBg="change"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  methods: {
    change(obj) {
      this.objYa = obj;
    }
  },
  data() {
    return {
      objYa: {
        path: "/movie",
        name: "电影",
        bgColor: "#ff0036"
      },
      color: "",
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
  created() {
    let result = this.menu.filter((obj, index) => {
      return obj.path == this.$route.path;
    });
    // 如果数组中匹配到了  才修改obj的的值，否则用obj的默认值
    if (result.length) {
      this.objYa = result[0];
    }
  }
};
</script>

<style>
.content {
  margin: 1rem 0;
}
</style>
