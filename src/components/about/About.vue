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
            <div class="me">
                <div class="info">
                    <p>唐士瀛</p>
                    <p class="eng">HashTang</p>
                </div>
                <div class="photo">
                    <img src="../../assets/personal.jpg" alt="">
                </div>
            </div>
            <div class="music">
                <audio src="//hxkj.vip/dream-it-possible.mp3"
                       autoplay="autoplay" loop="loop" controls="controls"></audio>
                <p>Dream It Possible-Delacey</p>
            </div>
            <div class="desc">
                <p class="title">个人经历</p>
                <div class="content">
                    <ul>
                        <li>
                            <label>1994</label>
                            <span>来到了这片土地。</span>
                        </li>
                        <li>
                            <label>2001~2007</label>
                            <p>
                                <span>小学时光，最潇洒，最无忧无虑的一段时光。</span>
                                <span>像玻璃珠、小石子、小纸包、小铁环以及一些叫不上名字的小物品，都是我们的挚爱。每天在放学的路上都和邻居家的孩子玩得不亦乐乎。</span>
                                <span>偶尔在路上看到别人家种的水果成熟了，也会忍不住摘一个尝尝，哈哈哈！</span>
                            </p>
                        </li>
                        <li>
                            <label>2007~2010</label>
                            <p>
                                <span>初中时光，平平淡淡，传传小纸条，这是一段青涩的时光。</span>
                            </p>
                        </li>
                        <li>
                            <label>2010~2013</label>
                            <p>
                                <span>到了高中，就是这三年让我决定了程序员这条路。</span>
                                <span>在上高中之前我只知道努力读书，埋头做题，听到别人谈论【梦话西游】的游戏剧情，也就是左耳进右耳出，因为对于当时的我一个礼拜2块钱零花钱的人来说是难以理解的，花1块钱去网吧玩一个小时游戏，为什么不多买几片辣条？这也就导致我的成绩一直都是名列前茅的，简直就是传说中别人家的孩子。</span>
                                <span>所以，这也让我考进了我们县城最好的高中--【万安中学】。</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <p>写文章的同时，可以加深自己对知识点的理解</p>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner.vue";
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
        width 800px
        margin 50px auto
        .me {
            flexBetween()
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
            p {
                margin-top 5px
                color vice-font-color
                font-size 14px
            }
        }
    }
</style>