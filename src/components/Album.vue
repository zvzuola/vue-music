<template>
  <div>
    <div>{{artist}}</div>
    <div :class="$style['header']">
      <img :src="url" />
      <div>
        <div>{{$route.params.album}}</div>
        <div>{{artist}}</div>
      </div>
    </div>
    <div :class="$style['item']" v-for="item in tracks" :key="item.name">
      {{item.name}}
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["albumData"]),
    tracks: function() {
      return this.albumData[this.$route.params.album];
    },
    artist: function() {
      return this.tracks ? this.tracks[0] && this.tracks[0].artist : "Loading";
    },
    url: function() {
      const artwork = this.tracks
        ? this.tracks[0] && this.tracks[0].artwork
        : null;
      return artwork
        ? `http://tannerv.ddns.net:12345/SpotiFree/${artwork}`
        : `https://lastfm-img2.akamaized.net/i/u/300x300/c6f59c1e5e7240a4c0d427abd71f3dbb`;
    }
  },
  methods: {
    ...mapActions(["fetchAlbum"])
  },
  created() {
    const album = this.$route.params.album;
    if (!this.albumData[album] || !this.albumData[album].length)
      this.fetchAlbum(album);
  }
};
</script>
<style lang="scss" module>
.header {
  display: flex;
  img {
    height: 20vh;
    margin-right: 20px;
    border-radius: 4px;
  }
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.item {
  display: block;
  font-size: 16px;
  padding: 10px 0;
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
  + .item {
    border-top: 1px solid #ddd;
  }
}
</style>
