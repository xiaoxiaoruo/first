<template>
  <div>
    <h2>我的index</h2>
    <h3>{{$store.state.count}}</h3>
    <h3>{{count}} {{num}}</h3>
    <h1>getter {{count1}}</h1>
    <button @click="$store.commit('add',20)">++</button>
    <button @click="add(20)">++</button>
    <button @click="addAction(20)">Ac++</button>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
// 当前组件有效
export default {
  data() {
    return {};
  },
  methods: {},
  store,
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // }
  // ******************
  // computed:mapState({
  //   count:state=>state.count
  // })
  computed: { ...mapState(["count", "num"]), ...mapGetters(["count1"]) },
  methods: {...mapMutations(["add"]),...mapActions(['addAction'])}
};
</script>

<style scoped>
</style>