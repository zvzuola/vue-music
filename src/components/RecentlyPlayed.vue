<template>
    <div>
        <div :class="$style['container']">
            <router-link :to="`/albums/${albums.album}`" :class="$style['albums']" v-for="albums in recents" :key="albums.album">
                <img :src="albums.artwork | artworkUrl" />
                <div :class="$style['album']">{{albums.album}}</div>
                <div :class="$style['artist']">{{albums.artist}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["recents"])
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