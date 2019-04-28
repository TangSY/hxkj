/**
* @Description:    娱乐
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 21:44
*/
<template>
    <div>
        <top-header></top-header>
        <top-banner :img="bannerImg" text="娱乐"></top-banner>
        <div class="container">敬请期待~</div>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner.vue";
    import TopHeader from "../common/TopHeader";

    export default {
        components: {TopHeader, TopBanner},
        name: "Amusement",
        data() {
            return {
                bannerImg: require('../../assets/amusement-banner.jpg'),//banner图
            }
        },
        mounted() {

        },
        computed: {},
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .container {
        width 100%
        height 800px
        flexContent()
        font-size 24px
    }
</style>