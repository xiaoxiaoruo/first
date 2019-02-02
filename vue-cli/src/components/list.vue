<template>
  <div>
      List
    <router-link :to="{path:'/sublist1',params:{age:20}}">sublist1</router-link>
    <router-link to="/sublist2">sublist2</router-link>
    <!-- <router-link :to="{name:'sublist2'}">sublist2</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>