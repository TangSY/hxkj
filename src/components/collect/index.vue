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
                <ul>
                    <li class="site-item" v-for="(site, index) in siteList" :key="index">
                        <div class="site-item-title">
                            <i class="iconfont" :class="site.icon"></i>
                            <span>{{ site.title }}</span>
                        </div>
                        <div class="site-item-container">
                            <a class="site-item-content" :href="item.url" target="_blank" v-for="(item, j) in site.list" :key="index + j">
                                <img :src="item.icon" :title="item.url" alt="" class="site-item-content-img">
                                <div class="site-item-content-txt">
                                    <p class="site-item-content-name" :title="item.name">{{ item.name }}</p>
                                    <p class="site-item-content-desc" :title="item.desc">{{ item.desc }}</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
    import * as api from "../../constant/api"
    import TopHeader from "../common/TopHeader";
    import TopBanner from "../common/TopBanner";

    export default {
        components: {TopBanner, TopHeader},
        name: "collect",
        data() {
            return {
                bannerImg: require('../../assets/collect-banner.jpg'),//banner图
                siteList: []
            }
        },
        mounted() {
            this.getSiteList();
        },
        computed: {},
        methods: {
            async getSiteList() {
                let data = await this.$axios('get', api.GET_COLLECT_LIST);
                                
                this.siteList = data || [];
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .container {
        overflow hidden
        width 100%
        padding-bottom 30px
        font-size 16px
        background rgba(1,32,81,0.1)

        ul {
            max-width 1000px
            margin 0 auto
            align-items flex-start

            .site-item {
                width 100%
                margin-top 30px

                .site-item-title {
                    margin-bottom 15px

                    .iconfont {
                        font-size 24px
                    }

                    span {
                        font-size 20px
                        margin-left 5px
                    }
                }

                .site-item-container {
                    flexContent(center, flex-start)
                    flex-wrap wrap

                    .site-item-content {
                        width 24%
                        padding 20px 15px
                        background #fff
                        margin-bottom 10px
                        border-radius 5px
                        cursor pointer
                        flexAlign()
                        margin-right 0.9%
                        &:hover {
                            box-shadow 2px 2px 20px #000

                            .site-item-content-txt {

                                .site-item-content-name {
                                    color main-color
                                }

                                .site-item-content-desc {
                                    color gray-color
                                }
                            }
                        }

                        img {
                            width 32px
                            height 32px
                            border-radius 50%
                            background bg-color
                            margin-right 15px
                        }

                        .site-item-content-txt {
                            flex 1
                            overflow hidden

                            .site-item-content-name {
                                width 100%
                                overflow hidden
                                text-overflow ellipsis
                                white-space nowrap
                                font-size 14px
                                margin-bottom 5px
                                font-weight bold
                                color main-font-color
                            }

                            .site-item-content-desc {
                                width 100%
                                overflow hidden
                                text-overflow ellipsis
                                white-space nowrap
                                font-size 12px
                                color vice-font-color
                            }
                        }
                    }
                }
            }
        }
    }
</style>