<template>
  <div id="app">
    <!-- dfcgvhbjn -->
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <button @click="goHome()">首页</button>
      <button @click="goBack()">上一页</button>
      <button @click="goNext()">下一页</button>
      <br>
      <router-link to="/index">首页</router-link>
      <router-link to="/Test">测试</router-link>
      <router-link to="/list">list</router-link>
      <router-link to="/adasda">404</router-link>
      <transition name="fade">
        <!-- router-view 用于显示当前组件 -->
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{

    }
  },
  methods: {
    goHome(){
      this.$router.push("/index");// 跳转到指定的
    },
    goBack(){
      this.$router.go(-1);// 找不到的相当于没执行 比如go(-100)
    },
    goNext(){
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  /* 执行的动画 */
  transition: opacity 2s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  /* 执行的动画 */
  transition: opacity 2s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
