<template>
  <div class="slide-wraper">
    <ul class="slide">
      <transition-group name="fade">
        <li v-for="(value,index) in imgs" :key="index" v-show="iNow == index">
          <img :src="value">
        </li>
      </transition-group>
    </ul>
    <div class="btns">
      <ul>
        <li v-for="(value,index) in imgs.length" :key="index" :class="{active:index == iNow}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iNow: 0,
      imgs: [
        "http://localhost:8080/img/01.jpg",
        "http://localhost:8080/img/02.jpg",
        "http://localhost:8080/img/03.jpg"
      ]
    };
  },
  created() {
    setInterval(() => {
      this.iNow++;
      if (this.iNow == this.imgs.length) {
        this.iNow = 0;
      }
    }, 2000);
  }
};
</script>

<style scoped>
.slide-wraper .slide li {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.slide-wraper {
  position: relative;
  height: 3rem;
  overflow: hidden;
}
.slide-wraper img {
  width: 100%;
  height: 3rem;
}
.btns {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.2rem;
}
.btns li {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background: red;
  float: left;
  margin-right: 0.2rem;
}
.btns li.active {
  background: green;
}
.fade-enter {
  transform: translateX(100%);
}
.fade-enter-active {
  transition: transform 2s ease;
}
.fade-enter-to {
  transform: translateX(0);
}
.fade-leave {
  transform: translateX();
}
.fade-leave-active {
  transition: transform 2s ease;
}
.fade-leave-to {
  transform: translateX(-100%);
}
</style>