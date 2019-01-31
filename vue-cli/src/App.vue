<template>
  <div id="app">
    <!-- dfcgvhbjn -->
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <router-link to="/index">首页</router-link>
      <router-link to="/Test">测试</router-link>
      <!-- router-view 用于显示 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
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
</style>
