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
                <audio src="//hxkj.vip/dream-it-possible.mp3" loop="loop" controls="controls"></audio>
                <p>Dream it possible-Delacey</p>
            </div>
            <div class="desc">
                <p class="title">个人经历</p>
                <div class="content">
                    <ul>
                        <li>
                            <label>1994</label>
                            <p>
                                <span>来到了这片土地。</span>
                            </p>
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
                                <span>也就是这三年，让我决定了走上程序员这条道路。</span>
                                <span>这是我第一次接触可以连接网络的手机，我记得是金立的一款滑盖手机，具体机型忘记了，红色机身。这款手机安装手机QQ，
                                    手机游戏之类的还得通过按一串暗号（*#220807#）打开手机另一个世界的大门。好像是叫做冒泡社区。</span>
                                <span>这也是我第一次接触可以连接互联网的电脑，因为每个礼拜周六下午学校的微机房都会对校内学生开放，收费1元一个小时，不会管你用电脑干啥，只是网速就有得吐槽了。</span>
                                <span>在有了手机以及电脑的情况下，我毫无意外的没有抵制住诱惑，沉迷于电脑网游（穿越火线）和手游（QQ家园游戏）。</span>
                                <span>我在玩游戏的时候，经常会发现某些人会发一些小广告，以远远低于官方渠道的价格充值游戏币。我当时就觉得很纳闷，他们是怎么做到的，经过一番探索，
                                    发现原来他们大部分都是从淘宝低价购买来的。而淘宝的商家都是通过囤积大量的手机卡，从而通过QQ家园元宝充值漏洞来刷取，以现在的说法，就是薅羊毛。</span>
                                <span>真的，当时淘宝还没有现在那么普及，知道淘宝的人少之又少，而且就算知道了也是持怀疑态度。</span>
                                <span>发现这个“秘密”之后，我也就有样学样呗。在游戏里做起了倒卖游戏币以及游戏道具的生意。</span>
                                <span>玩穿越火线的时候也是通过同样的方式帮别人代练等级，刷刷军衔。</span>
                                <span>通过这几个方法虽然赚不到什么大钱，但是每个月的生活费还是不成问题的。因此也不用每个月问父母拿生活费了
                                    （每个月最难以开口的就是问父母拿生活费了，毕竟当时的学习成绩真的是差得一塌糊涂），并且买了人生中的第一部智能手机，小日子过得挺滋润的。</span>
                                <span>在这过程中，我发现某些人可以做一些软件，用于挂机刷游戏币，而且也擅于发现游戏漏洞。他们开发出来的软件一般都是几百块钱给个授权。我心想，
                                    这个爽啊，开发一个软件出来就可以一直收授权费，比我这样倒卖东西爽太多了！</span>
                                <span>也就是这个想法促使我填报志愿的时候，没有跟任何人商量，因为我知道，就算商量也无法改变我的决定，直接选的《软件技术》。现在想来，这真是一个明智的决定！</span>
                                <span>高中这三年，是让我最怀念的三年，可以说是我人生中的重大转折点。里面充满了幸运并夹带着一丝丝遗憾！幸运的是接触了互联网并选择了计算机专业，遗憾的是
                                    我为什么没有在高中的时候就开始接触编程、自学编程。</span>
                            </p>
                        </li>
                        <li>
                            <label>2013~2016</label>
                            <p>
                                <span>大学时光。教室-宿舍-食堂，三点一线。</span>
                                <span>嗯，你没有看错，就是三年，所以我是大专毕业的。这也间接地说明世间的一切都是公平的。要是我高中这状态还能考出好成绩，那真是见了鬼了！</span>
                                <span>这三年也没啥特别的事可以记录，总的来说，就是为编程打基础。顺便延续一下高中时代的小生意。</span>
                            </p>
                        </li>
                        <li>
                            <label>2016~至今</label>
                            <p>
                                <span>步入社会，参加工作。</span>
                                <span>简单的说一下我17年加入的一个创业公司的经历吧。</span>
                                <span>一开始他们找我过去的时候，是让我开发安卓的，因为我毕业后第一份工作就是安卓开发。</span>
                                <span>但是做了一个多月，发现项目并不合适。然后几个人一合计，又想到了一个新创意，而且意识到APP不易于传播。于是做微信公众号网页开发，
                                    但是这属于前端范畴，与我目前的技术栈不符。这时候其他人就怂恿我：要不你去学一学，刚好这段时间也可以用来好好规划一下项目。我想了想要不就答应了吧，拼一把，现学现用。
                                    然后我就开始学习前端的相关技术，其他人讨论项目细节，规划项目。大概2个礼拜左右，开始开发了，没错，学了两个礼拜就开始开发项目，现在想想，当时真的是胆大啊！</span>
                                <span>这项目真的就是相当于用来给我练手的，磕磕碰碰，边做边学，边做边百度，花了三个月左右的时间，上线了。看着用户数从0到1K，从1K到1W，从1W到40W。平均日活6万左右。
                                    附一篇当时猎云网的报道：http://kuaibao.qq.com/s/20180306A1GZMC00。项目名称【全民种水果】，感兴趣的可以百度试试，当然由于资金链断裂的原因，现在搜索到的用户投诉会比较多，哈哈哈！</span>
                                <span>期间经历了高并发带来的服务器宕机，用户基数大带来的用户机型适配问题。所以，缓存架构，消息队列，适配方案都摸了个遍，勉强撑住了这日益增长的用户数。</span>
                                <span>然而，好景不长，互联网寒冬带来的资金链断裂导致我们团队宣布解散，大家都说休息休息，缓缓神。毕竟这一年太拼了，一直都是在高强度工作中度过，996是常态，
                                    有段时间更是达到了9117。当然，给我带来的提升也是巨大的。</span>
                                <span>目前的我，就职于一家互联网公司，坐标深圳。带带新人（其实就是误人子弟），在完成工作任务之外，研究研究新技术，写写博客之类的。</span>
                            </p>
                        </li>
                    </ul>
                </div>
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