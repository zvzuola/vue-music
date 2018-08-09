<template>
    <div></div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["albums"])
  },
  methods: {
    ...mapActions(["fetchAlbums"])
  },
  created() {
      if(!this.albums.length) this.fetchAlbums(this.$route.params.album)
  }
};
</script>
