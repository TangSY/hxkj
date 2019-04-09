<template>
    <div id="app">
        <top-header @jump="intoModel"></top-header>
        <router-view v-wechat-title="$route.meta.title" img-set="javascript:;"></router-view>
    </div>
</template>

<script>
    import TopHeader from "./components/common/TopHeader.vue";

    export default {
        name: 'app',
        components: {
            TopHeader
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
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
