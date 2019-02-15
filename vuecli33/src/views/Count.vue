<template>
  <div>
    Count页面
    <!-- <p>{{$store.state.count}}</p> -->
    <p>{{count}}</p>
    <p>{{a}}</p>
    <p>sum 的结果是：{{sum}}</p>
    <button @click="$store.commit('add',2)">add</button>
    <button @click="add(2)">add</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  // computed:{
  //     count(){
  //         return this.$store.state.count;
  //     }
  // }
  computed: {
    ...mapState(["count", "a"]),
    ...mapGetters(["sum"])
  },
  methods: mapMutations(["add"])
};
</script>

<style scoped>
</style>