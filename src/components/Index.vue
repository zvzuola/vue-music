<template>
    <div>
        <!-- shouye
        <button @click="showConfirm">确认框</button>
        <confirm ref="confirm" text="提示" @ok="ok" @cancel="cancel" /> -->
        <!-- <button @click="this.changeView('artists')">artists</button> -->
        <router-link :class="$style['nav']" to='artists'>artists</router-link>
        <div><router-link :class="$style['nav']" to='list'>list</router-link></div>
        <recently-played></recently-played>
    </div>
</template>
<script>
import confirm from "./Confirm";
import RecentlyPlayed from "./RecentlyPlayed";
export default {
  components: {
    confirm,
    RecentlyPlayed
  },
  methods: {
    showConfirm() {
      this.$refs.confirm.show();
    },
    ok() {
      // console.log('ok')
    },
    cancel() {
      // console.log('cancel')
    }
  }
};
</script>

<style lang="scss" module>
.nav {
  color: red;
  text-decoration: none;
}
</style>
