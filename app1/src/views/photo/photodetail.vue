<template>
  <div>
    <!-- {{$route.params.index}} -->
    <!-- {{photos[$route.params.index]}} -->
    <router-link to="/photo">
      <v-touch
        class="bg"
        v-on:swipeleft.prevent="onSwipeLeft()"
        v-on:swiperight.prevent="onSwipeRight()"
        :style="{backgroundImage:'url(' + photos[iNow].src + ')' }"
        v-if="isShow"
      ></v-touch>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });
// 因为用到了Vue下的use()方法 所以需要引入Vue
export default {
  created() {
    if (this.photos.length == 0) {
      this.$router.push("/photo");
    } else {
      this.isShow = "true";
    }
  },
  data() {
    return {
      iNow: this.$route.params.index,
      isShow: false
    };
  },
  methods: {
    onSwipeLeft() {
      if (this.iNow < this.$store.state.photos.length) {
        this.iNow++;
      }
    },
    onSwipeRight() {
      if (this.iNow > 0) {
        this.iNow--;
      }
    }
  },
  computed: {
    ...mapState(["photos"])
  }
};
</script>

<style scoped>
.bg {
  position: absolute;
  top: 1rem;
  left: 0;
  bottom: 1rem;
  right: 0;
  background: #000 no-repeat center center;
  background-size: contain;
}
</style>