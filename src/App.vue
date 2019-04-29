<template>
    <div id="app">
        <router-view v-wechat-title="$route.meta.title" img-set="javascript:;"></router-view>
        <bottom></bottom>
    </div>
</template>

<script>

    import Bottom from "./components/common/BottomFooter.vue";

    export default {
        name: 'app',
        components: {
            Bottom
        },
        methods: {

        }
    }
</script>

<style>
    @import "./style/reset.styl";
    @import "./style/boomAnimate.styl";
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
