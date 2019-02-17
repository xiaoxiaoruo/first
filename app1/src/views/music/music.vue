<template>
  <div>
      <img :src="obj.bg" v-for="(obj,index) in musicList" :key="index" @click.prevent="goList()">
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
      goList(){
          this.$router.push('/musiclist');
      }
  },
  created() {
    Axios.get("/musiclist.json")
      .then(result => {
          console.log(result);
        this.musicList = [...result.data.albums];
      })
      .catch();
  }
};
</script>

<style scoped>
img {
  width: 50%;
}
</style>