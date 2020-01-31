/**
* @Description:    文章列表页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 19:38
*/
<template>
    <div class="container">
        <top-header></top-header>
        <top-banner :img="bannerImg" text="文集"></top-banner>
        <div class="article-box">
            <article-list></article-list>
        </div>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner";
    import ArticleList from "./articleList";
    import TopHeader from "../common/TopHeader";

    export default {
        components: {
            TopHeader,
            ArticleList,
            TopBanner},
        name: "Article",
        data() {
            return {
                bannerImg: require('../../assets/article-banner.jpg'),//banner图
            }
        },
        mounted() {
            
        },
        computed: {},
        methods: {
            
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .container {
        background rgba(1, 32, 81, .1)
        padding-bottom 1px
    }
    .article-box {
        max-width 900px
        margin 0 auto
        align-items flex-start
    }
</style>