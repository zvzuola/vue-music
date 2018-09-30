<template>
  <div id="app" :class="$style['a']">
    <keep-alive :include="include">
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import { mapState } from "vuex";
import player from './components/Player'

export default {
  name: "app",
  components: {
    player
  },
  computed: {
    ...mapState(["include"])
  },
  methods: {},
  mounted() {}
};
</script>

<style module>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a {
  font-size: 36px;
}
</style>
