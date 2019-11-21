/**
* @Description:    关于我
* @Author:         TSY
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 21:45
*/
<template>
    <div>
        <top-header></top-header>
        <top-banner :img="bannerImg" text="About me"></top-banner>
        <div class="container">
            <div class="music">
                <audio src="//hxkj.vip/dream-it-possible.mp3" loop="loop" controls="controls"></audio>
                <p>Dream it possible-Delacey</p>
            </div>
            <div class="desc">
                <p class="title">关于本站</p>
                <div class="content">
                    <ul>
                        <li>
                            <p>
                                <span>本站的域名【hxkj.vip】。来源于我之前倒卖域名的时候抢注的四声域名，去年（2018年）打算做网站的时候，从中挑了一个。</span>
                                <span>本站的名称【哈希空间】。哈希，英文单词hash，做程序员的都懂哈。空间，意为个人空间，用于记录自己的点点滴滴。同时通过逛我的空间，能让其他人有所收获，那就再好不过了。</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner";
    import TopHeader from "../common/TopHeader";

    export default {
        components: {TopHeader, TopBanner},
        name: "About",
        data() {
            return {
                bannerImg: require('../../assets/about-banner.jpg'),//banner图
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
        max-width 800px
        margin 50px auto
        .me {
            flexBetween()
            flex-wrap wrap
            font-size 60px
            .info {
                align-self flex-start
                margin-top 50px
                .eng {
                    font-size 24px
                }
            }
            .photo {
                img {
                    width 350px
                    display inherit
                }
                p {
                    color vice-font-color
                    font-size 12px
                    margin-top 5px
                }
            }
        }
        .music {
            width 100%
            text-align center
            margin 80px auto
            padding 50px 0
            border 1px dashed bg-color
            border-radius 5px
            &:hover {
                border-width 2px
                border-color main-color
                position relative
                &:before {
                    content "不妨听首小曲？"
                    position absolute
                    top 10px
                    left 10px
                    font-size 12px
                    color main-color
                    font-weight bold
                }
            }
            p {
                margin-top 5px
                color vice-font-color
                font-size 14px
            }
        }
        .desc {
            .title {
                border-left 5px solid main-color
                font-size 18px
                padding-left 10px
                font-weight bold
            }
            .content {
                margin-left 10px
                margin-top 15px
                ul {
                    li {
                        margin 20px 0
                        label {
                            color orange-color
                            font-size 18px
                        }
                        p {
                            margin-left 15px
                            font-size 14px
                            display flex
                            flex-direction column
                            span {
                                margin-top 10px
                            }
                        }
                    }
                }
            }
        }
    }
</style>