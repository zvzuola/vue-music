<template>
  <div :class="$style['m-player']" v-if="track">
    <div :class="$style['control']">
      <audio v-show="false" ref="audio" :src="`http://tannerv.ddns.net:12345/SpotiFree/${track.url}`" @ended="nextSong"></audio>
      <button :class="$style['prev-song']" @click="handlePrevSong" :disabled="currentIndex === 0"></button>
      <button :class="$style['pause']" v-if="isPlaying" @click="handlePause"></button>
      <button :class="$style['resume']" v-else @click="handlePlay"></button>
      <button :class="$style['next-song']" @click="handleNextSong" :disabled="currentIndex + 1 >= playlist.length"></button>
      <div :class="$style['time']">
        <div>{{time.current}}</div>
        <div>{{time.max}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      time: {
        current: 0,
        max: 0
      }
    };
  },
  computed: {
    ...mapState(["playlist", "currentIndex", "isPlaying"]),
    track: function() {
      return this.playlist.length ? this.playlist[this.currentIndex] : null;
    }
  },
  updated() {
    if (this.isPlaying && this.$refs.audio) {
      this.handlePlay();
    } else if (!this.isPlaying && this.$refs.audio && this.$refs.audio.src) {
      this.handlePause();
    }
  },
  methods: {
    ...mapActions(["pause", "resume", "nextSong", "prevSong"]),
    handlePlay: function() {
      if (this.$refs.audio.paused) {
        const playPromise = this.$refs.audio.play();
        clearInterval(this.playInterval);
        playPromise.then(() => {
          this.createTimeInterval();
        });
        this.resume();
      }
    },
    handlePause() {
      if (!this.$refs.audio.paused) {
        this.$refs.audio.pause();
        clearInterval(this.playInterval);
        this.pause();
      }
    },
    handleNextSong() {
      if (this.currentIndex + 1 < this.playlist.length) this.nextSong();
    },
    handlePrevSong() {
      if (this.currentIndex > 0) this.prevSong();
    },
    createTimeInterval() {
      this.playInterval = setInterval(() => {
        if (this.$refs.audio) {
          this.time = {
            current: this.formatTime(this.$refs.audio.currentTime),
            max: this.formatTime(this.$refs.audio.duration)
          };
        }
      }, 1000);
    },
    formatTime(seconds = 0, guide = seconds) {
      let s = Math.floor(seconds % 60);
      let m = Math.floor((seconds / 60) % 60);
      let h = Math.floor(seconds / 3600);
      const gm = Math.floor((guide / 60) % 60);
      const gh = Math.floor(guide / 3600);
      if (isNaN(seconds) || seconds === Infinity) {
        h = m = s = "-";
      }
      h = h > 0 || gh > 0 ? `${h}:` : "";
      m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;
      s = s < 10 ? `0${s}` : s;
      return h + m + s;
    }
  }
};
</script>
<style lang="scss" module>
.m-player {
  position: fixed;
  bottom: 0;
  height: 64px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.btn {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
}
.control {
  display: flex;
  flex: 1;

  .resume {
    @extend .btn;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid;
    margin-left: 30px;
  }
  .pause {
    @extend .btn;
    width: 15px;
    height: 20px;
    border-right: 5px solid;
    border-left: 5px solid;
    margin-left: 30px;
  }
  .prev-song {
    @extend .next-song;
    transform: rotateZ(180deg);
  }
  .next-song {
    @extend .resume;
    position: relative;
    border-left: 11px solid;
    &:after {
      content: "";
      position: absolute;
      border-left: 4px solid;
      left: 100%;
      height: 20px;
      top: -10px;
    }
  }
  .time {
    display: flex;
    flex: 1;
    justify-content: space-around;
    font-size: 14px;
    align-items: center;
  }
}
</style>
