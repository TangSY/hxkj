/**
* @Description:    收藏页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/11/21 23:44
*/
<template>
    <div>
        <top-header></top-header>
        <top-banner :img="bannerImg" text="收藏"></top-banner>
        <div class="container">

        </div>
    </div>
</template>

<script>
    import TopHeader from "../common/TopHeader";
    import TopBanner from "../common/TopBanner";

    export default {
        components: {TopBanner, TopHeader},
        name: "collect",
        data() {
            return {
                bannerImg: require('../../assets/collect-banner.jpg'),//banner图
                siteList: [
                    {
                        icon: '',
                    }
                ]
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
        height 480px
        flexContent()
        font-size 24px
    }
</style>