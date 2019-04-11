<template>
    <div id="app">
        <top-header @jump="intoModel"></top-header>
        <router-view v-wechat-title="$route.meta.title" img-set="javascript:;"></router-view>
        <bottom></bottom>
    </div>
</template>

<script>
    import TopHeader from "./components/common/TopHeader.vue";
    import Bottom from "./components/common/BottomFooter.vue";

    export default {
        name: 'app',
        components: {
            TopHeader,
            Bottom
        },
        methods: {
            intoModel(model) {
                this.$router.push({name: model});
            }
        }
    }
</script>

<style>
    @import "./style/reset.styl";
    @import "./style/boomAnimate.styl";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
