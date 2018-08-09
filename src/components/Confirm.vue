<template>
    <transition name="fade">
        <div v-if="showFlag" :class="$style['m-confirm-bg']">
            <div :class="$style['container']">
                <div>{{text}}</div>
                <div>
                    <button @click="onOk">{{okText}}</button>
                    <button @click="onCancel">{{cancelText}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        text:{
            type: String,
            default: ''
        },
        okText:{
            type: String,
            default: '确定'
        },
        cancelText:{
            type: String,
            default: '取消'
        },
    },
    data() {
        return {
            showFlag: false
        }
    },
    methods: {
        show() {
            this.showFlag = true
        },
        hide() {
            this.showFlag = false
        },
        onOk() {
            this.hide()
            this.$emit('ok')
        },
        onCancel() {
            this.hide()
            this.$emit('cancel')
        }
    }
}
</script>
<style lang="css" module>
.m-confirm-bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container{
    width: 300px;
    height: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>
