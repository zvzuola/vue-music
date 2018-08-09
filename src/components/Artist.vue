<template>
  <div>
    <div>{{$route.params.artist}}</div>
    <div :class="$style['container']">
        <router-link :to="`/albums/${albums.album}`" :class="$style['albums']" v-for="albums in artistData[$route.params.artist]" :key="albums.album">
          <img :src="albums.artwork | artworkUrl" />
          <div :class="$style['album']">{{albums.album}}</div>
          <div :class="$style['artist']">{{albums.artist}}</div>
        </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["artistData"])
  },
  methods: {
    ...mapActions(["fetchArtist"])
  },
  created() {
    const artist = this.$route.params.artist;
    if (!this.artistData[artist] || !this.artistData[artist].length)
      this.fetchArtist(artist);
  },
  filters: {
    artworkUrl(artwork) {
      return `http://tannerv.ddns.net:12345/SpotiReact/${artwork}`;
    }
  }
};
</script>
<style lang="scss" module>
.container {
  display: flex;
  flex-wrap: wrap;
}
.albums {
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
  text-decoration: none;
  img {
    width: 100%;
    display: block;
    border-radius: 4px;
  }
}
.album {
  font-size: 14px;
  color: #333;
}
.artist {
  font-size: 12px;
  color: #999;
}
</style>
