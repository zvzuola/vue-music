<template>
    <div>
      <div>Artists</div>
      <router-link :class="$style['artist']" :to="`/artists/${a.artist}`" v-for="a in artists" :key="a.artist">{{a.artist}}</router-link>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["artists"])
  },
  methods: {
    ...mapActions(["fetchArtists"])
  },
  created() {
    if (!this.artists.length) this.fetchArtists();
  }
};
</script>
<style lang="scss" module>
.artist {
  display: block;
  font-size: 20px;
  padding: 5px 0;
  color: #333;
  text-decoration: none;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    border-right: 1px solid #333;
    border-top: 1px solid #333;
    transform: rotateZ(45deg);
    width: 10px;
    height: 10px;
    right: 10px;
    top: 50%;
    margin-top: -5px;
  }
  + .artist {
    border-top: 1px solid #ddd;
  }
}
</style>
