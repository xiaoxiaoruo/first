<template>
  <div>
    <div class="footer" :style="{background:color}">
      <ul>
        <li v-for="(obj,index) in menu" :key="index">
          <!-- 动态的用:to -->
          <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
          <!-- 在router-link中用@click.native绑定点击事件 -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";
export default {
  computed:mapState(['name','color']),
  methods: mapMutations(['change']),
  props: ["menu"],
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  background: #ff0036;
  width: 100%;
}
.footer ul {
  display: flex;
}
li {
  flex-grow: 1;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.footer a {
  color: #000;
  outline: none;
}
.footer a.router-link-active {
  color: #fff;
}
</style>