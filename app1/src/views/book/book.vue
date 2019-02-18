<template>
  <div>
    <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe>
  </div>
</template>

<script>
// require('vue-swipe/dist/vue-swipe.css');
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  components: {
    Swipe,
    SwipeItem
  }
};
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  background: url("http://localhost:8080/img/01.jpg");
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  background: url("http://localhost:8080/img/02.jpg");
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  background: url("http://localhost:8080/img/03.jpg");
  color: #fff;
}
</style>