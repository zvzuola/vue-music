<template>
    <div>
      <div v-for="item in lists" :key="item.id" >
        <router-link :to="`/list/${item.id}`">{{item.text}}</router-link>
      </div>
      <p>注意从item页面返回到list页面时，第一个随机数据是没有变的，说明list组件是缓存成功的，从首页跳转过来我们不希望缓存，所以第一个随机数总是会变</p>
      <div><router-link to='/'>返回首页</router-link></div>
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
