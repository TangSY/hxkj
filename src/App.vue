<template>
    <div id="app">
        <top-header></top-header>
        <router-view v-wechat-title="$route.meta.title" img-set="javascript:;"></router-view>
    </div>
</template>

<script>
    import TopHeader from "./components/common/TopHeader.vue";

    export default {
        name: 'app',
        components: {
            TopHeader
        }
    }
</script>

<style>
    @import "./style/reset.styl";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
