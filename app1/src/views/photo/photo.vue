<template>
  <div>
    <img v-for="(obj,index) in $store.state.photos" :key="index" :src="obj.src" @click="goDetail(index)">
  </div>
</template>

<script>
import Axios from "axios";
export default {
  methods: {
    goDetail(index) {
        this.$router.push('/photodetail/' + index);
    }
  },
  data() {
    return {
    //   photo: []
    };
  },
  created() {
    Axios.get("/photodata.json")
      .then(result => {
        console.log(result.data.photoData);
        // this.$store.state.photos = [...result.data.photoData];
        this.$store.commit("addPhoto",result.data.photoData);
      })
      .catch();
  }
};
</script>

<style scoped>
img{
    width: 50%;
}
</style>