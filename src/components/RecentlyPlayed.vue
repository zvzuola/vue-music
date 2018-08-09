<template>
    <div>
        <div v-for="r in recents" :key="r">
            <div>{{r}}</div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {},
  computed: {
    ...mapState(["recents"])
  }
};
</script>
