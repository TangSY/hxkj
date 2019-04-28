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
                            <p>来到了这片土地。</p>
                        </li>
                        <li>
                            <label>2001~2007</label>
                            <p>
                                <span>小学时光，最潇洒，最无忧无虑的一段时光。</span>
                                <span>像玻璃珠、小石子、小纸包、小铁环以及一些叫不上名字的小物品，都是我们的挚爱。我每天都在放学的路上和邻居家的孩子玩这些玩具，玩得不亦乐乎。</span>
                                <span>偶尔在路上看到别人家种的水果成熟了，也会忍不住摘一个尝尝，哈哈哈！</span>
                            </p>
                        </li>
                        <li>
                            <label>2007~2010</label>
                            <p>
                                <span>初中时光。平平淡淡，努力读书，埋头做题，偶尔传传小纸条。</span>
                                <span>基本上每天都听着老师唠叨：你们只有现在用功读书才能去到县城最好的高中上学，才对得起你们父母给你们的生活费。</span>
                                <span>这是一段青春中略带点苦涩，而又值得回味的时光。</span>
                            </p>
                        </li>
                        <li>
                            <label>2010~2013</label>
                            <p>
                                <span>到了高中，虽然如愿以偿的来到了这所我以前每天向往的学校（万安中学），然而并没有阻止我“堕落”。</span>
                                <span>然而也就是这三年，让我决定了走上程序员这条道路。</span>
                                <span>这是我第一次接触可以连接网络的手机，我记得是金立的一款滑盖手机，具体机型忘记了，红色机身。这款手机安装手机QQ，手机游戏之类的还得通过按一串暗号（*#220807#）打开手机另一个世界的大门。好像是叫做冒泡社区。</span>
                                <span>这也是我第一次接触可以连接互联网的电脑，因为每个礼拜周六下午学校的微机房都会对校内学生开放，收费1元一个小时，不会管你用电脑干啥，只是网速就有得吐槽了。</span>
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
                        margin 10px 0
                        label {
                            color orange-color
                            font-size 18px
                        }
                        p {
                            font-size 14px
                            display flex
                            flex-direction column
                            span {
                                margin-top 5px
                            }
                        }
                    }
                }
            }
        }
    }
</style>