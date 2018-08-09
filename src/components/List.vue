<template>
    <div>
        <div v-for="item in lists" :key="item.id" >
            <router-link :to="`/${item.id}`">{{item.text}}</router-link>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "list",
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.lists = [
        { text: 1 * Math.random().toFixed(2), id: 1 },
        { text: 2, id: 2 }
      ];
    }, 100);
  },
  methods: {
    ...mapActions(["addInclude", "removeInclude"])
  },
  created() {
    this.addInclude("list");
  },
  beforeRouteLeave(to, from, next) {
    if (to.name != "item") {
      // if (this.$vnode && this.$vnode.data.keepAlive){
      //     if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache){
      //         if (this.$vnode.componentOptions){
      //             var key = this.$vnode.key == null
      //                         ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '')
      //                         : this.$vnode.key;
      //             var cache = this.$vnode.parent.componentInstance.cache;
      //             var keys  = this.$vnode.parent.componentInstance.keys;
      //             if (cache[key])
      //             {
      //                 if (keys.length) {
      //                     var index = keys.indexOf(key);
      //                     if (index > -1) {
      //                         keys.splice(index, 1);
      //                     }
      //                 }
      //                 delete cache[key];
      //             }
      //         }
      //     }
      // }
      // this.$destroy()
      this.removeInclude("list");
    }
    next();
  }
};
</script>
