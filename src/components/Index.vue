<template>
    <div>
        <!-- shouye
        <button @click="showConfirm">确认框</button>
        <confirm ref="confirm" text="提示" @ok="ok" @cancel="cancel" /> -->
        <!-- <button @click="this.changeView('artists')">artists</button> -->
        <router-link to='artists'>artists</router-link>
        <recently-played></recently-played>
    </div>
</template>
<script>
import confirm from './Confirm'
import RecentlyPlayed from './RecentlyPlayed'
export default {
    components:{
        confirm,
        RecentlyPlayed
    },
    methods: {
        showConfirm() {
            this.$refs.confirm.show()
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

