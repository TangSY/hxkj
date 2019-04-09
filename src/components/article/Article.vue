/**
* @Description:    文章列表页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 19:38
*/
<template>
    <div>
        <top-banner :img="bannerImg" text="文集"></top-banner>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner.vue";

    export default {
        components: {TopBanner},
        name: "Article",
        data() {
            return {
                bannerImg: require('../../assets/article-banner.jpg'),//banner图
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

</style>