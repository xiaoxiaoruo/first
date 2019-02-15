<template>
  <div>
    <header :style="{background:objYa.bgColor}">
      <router-link to='/'>
        <span class="goHome">首页</span>
      </router-link>
      <span>{{objYa.name}}</span>
    </header>
  </div>
</template>

<script>
export default {
  props:["objYa"]
};
</script>

<style scoped>
header {
  height: 1rem;
  width: 100%;
  background: #ff0036;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1rem;
  color: #fff;
}
.goHome {
  position: absolute;
  left: 0.1rem;
}
header a{
  color:#000;
  outline: none;
}
header a.router-link-active{
  color:#fff
}
</style>