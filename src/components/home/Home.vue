/**
* @Description:    首页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/3/31 11:55
*/
<template>
    <div class="container">
        <div class="top">
            <div class="box">
                <div class="title">
                    <span class="special">编程</span>
                    <span>の趣</span>
                </div>
                <div class="subtitle">Play Codes</div>
            </div>
            <img src="../../assets/coding.jpg" alt="">
        </div>
        <div class="content">
            <p class="title">Anything is possible</p>
            <span class="subtitle">我正在关注的开发领域与技能</span>
            <div class="skill">
                <div class="skill-item" v-for="(item, index) in skills" :key="index">
                    <i class="iconfont" :class="item.img"></i>
                    <span class="en">{{ item.en }}</span>
                    <span class="name">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="content content-author">
            <div class="content-box">
                <div class="content-item">
                    <p>技术栈主要是前端开发相关，熟悉诸如vue等流行的框架，webpack等构建工具。同时，Java、Android开发也还可以。</p>
                    <div class="skill" v-for="(item, index) in skillsProgress" :key="index">
                        <div class="skill-bg">
                            <div class="skill-bar" :style="{'width': item.progress}"></div>
                        </div>
                        <div class="skill-name">{{ item.name }}</div>
                    </div>
                </div>
                <div class="content-item right">
                    <div class="who">
                        <div class="title">Who am I ?</div>
                        <img src="../../assets/head.png" alt="">
                    </div>
                    <p>我叫唐士瀛，江西吉安人，现居深圳，就职于深圳某互联网公司，任前端工程师。</p>
                    <p>业余时间化身为一名羽毛球爱好者。</p>
                    <div class="other">
                        <i class="iconfont icon-mi-icon-github"></i>
                        <a href="https://github.com/TangSY" target="_blank">https://github.com/TangSY</a>
                    </div>
                    <div class="other">
                        <i class="iconfont icon-sina"></i>
                        <span>t@tsy6.com</span>
                    </div>
                </div>
            </div>
            <div class="content-bg">
                <div class="blur"></div>
                <img class="author-bg" src="../../assets/author-bg.jpg" alt="">
            </div>
        </div>
        <div class="content article-box">
            <div class="article">
                <p class="title">LAST POSTS</p>
                <p class="subtitle">最新发布的文章</p>
                <div class="article-list">
                    <div class="article-item" v-for="(item, index) in articleList" :key="index">
                        <div class="article-left">
                            <p class="article-name" @click="articleDetail(item.link)">{{ item.name }}</p>
                            <div class="article-time">{{ item.time }}</div>
                            <p class="article-content">{{ item.content }}</p>
                        </div>
                        <div class="article-right">
                            <qrcode :value="item.link" :options="{ size: 100 }"></qrcode>
                            <div class="article-btn" @click="articleDetail(item.link)">阅读全文</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video">
            <video preload muted autoplay loop name="media" src="//hxkj.vip/banner_video.mp4"></video>
        </div>
    </div>
</template>

<script>
    import QRcode from '@xkeshi/vue-qrcode'
    export default {
        name: "Home",
        components: {qrcode : QRcode},
        data() {
            return {
                skills: [
                    {img: 'icon-Golang', en: 'Golang', name: 'GO语言'},
                    {img: 'icon-ai', en: 'AI', name: '人工智能'},
                    {img: 'icon-JS', en: 'JS', name: '大前端'},
                    {img: 'icon-DevOpsliushuixian', en: 'DevOps', name: 'DevOps'},
                ],//技能
                skillsProgress: [
                    {progress: '90%', name: 'JavaScript'},
                    {progress: '85%', name: 'MySQL'},
                    {progress: '70%', name: 'Linux'},
                    {progress: '80%', name: 'Java'}
                ],
                articleList: [
                    {
                        name: 'Github配合Jenkins，实现vue等前端项目的自动构建与发布',
                        time: '2019.03.23 23:55',
                        content: '本篇文章前端项目以vue为例（其实前端工程化项目的操作方法都相同），部署在Linux系统上（centos）。之前做前端项目的部署，一直都是手动运行打包命令...',
                        link: 'https://www.jianshu.com/p/4c4f92209dd1'
                    },
                    {
                        name: 'vue自定义指令，比onerror更优雅的方式实现当图片加载失败时使用默认图，提供三种方法',
                        time: '2019.03.17 21:13',
                        content: '首先，来看下效果图（演示一下图片正常加载与加载失败时的效果） 一、常规方法解决 我们都知道，img标签支持onerror事件，在装载文档或图像的...',
                        link: 'https://www.jianshu.com/p/394c487d81d7'
                    },
                    {
                        name: 'echarts地图边界数据的实时获取与应用，省市区县多级联动【附最新geoJson文件下载】',
                        time: '2019.02.24 22:28',
                        content: '首先，来看下效果图 在线体验地址：https://hxkj.vip/demo/echartsMap/，并提供实时geoJson数据文件下载 前段...',
                        link: 'https://www.jianshu.com/p/c293c94d9ab7',
                    },
                    {
                        name: 'vue多级复杂列表展开/折叠，全选/分组全选实现',
                        time: '2018.11.04 20:19',
                        content: '首先，来看下效果图 可以看出，这个列表有三种展现形式： 1.第一层级中包含直属子项和第二层级，其中第二层级里包含子项2.第一层级中只包含第二层级...',
                        link: 'https://www.jianshu.com/p/154ffc0abed4',
                    },
                    {
                        name: '小程序webview调用微信扫一扫的“曲折”思路',
                        time: '2018.09.29 09:09',
                        content: '自上一篇遇到webview中没有返回按钮之后，虽然跳出坑了。解决方案：《小程序webview跳转页面后没有返回按钮完美解决方案》 但是，小程序踩...',
                        link: 'https://www.jianshu.com/p/2129d498de19',
                    },
                    {
                        name: '小程序webview跳转页面后没有返回按钮完美解决方案',
                        time: '2018.09.22 00:17',
                        content: '随着小程序越来越火爆，使一个产品如果只有公众号H5页面和APP显得不怎么完美，总感觉不搭上小程序这趟流量车，就会少了点什么，心里别扭地很。在此驱...',
                        link: 'https://www.jianshu.com/p/a7bb1a826548',
                    },
                    {
                        name: '服务器配置https协议，三种免费的方法',
                        time: '2018.05.29 23:44',
                        content: '最近想搞一个网站玩玩，发布网站用https协议已经是大势所趋了。例如微信小程序，不使用https协议根本不让接入。所以，分享一下我尝试过的三种方...',
                        link: 'https://www.jianshu.com/p/eaad77ed1c1b',
                    },
                    {
                        name: 'Android通过外部浏览器调用微信H5支付，Android+PHP详解',
                        time: '2017.08.16 19:47',
                        content: '看了好多关于讲解微信H5支付开发的文章，大多数都是通过微信内部浏览器来调用支付接口（其实就是公众号支付），可能是因为H5支付接口刚开放不久吧。微...',
                        link: 'https://www.jianshu.com/p/e49c8003c0e8',
                    }
                ],//文章列表
            }
        },
        mounted() {

        },
        computed: {},
        methods: {
            articleDetail(link) {//查看文章详情
                window.location.href = link;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .top {
        position relative
        width 100%
        height 650px
        overflow hidden
        .box {
            position absolute
            width 100%
            height 100%
            top 0
            left 0
            flexContent()
            flex-direction column
            background rgba(0, 0, 0, .7)
            color white
            .title {
                font-size 50px
                .special {
                    color orange-color
                }
            }
            .subtitle {
                margin-top 10px
                font-size 34px
            }
        }
        img {
            width 100%
            height 100%
            object-fit cover
        }
    }

    .content {
        flexContent()
        flex-direction column
        width 100%
        padding 80px 0
        .title {
            font-size 28px
            font-weight bold
        }
        .subtitle {
            color vice-font-color
            font-size 14px
            margin-top 15px
        }
        .skill {
            flexContent()
            flex-wrap wrap
            margin-top 20px
            .skill-item {
                flexContent()
                flex-direction column
                width 200px
                height 200px
                border 1px solid bg-color
                border-radius 50%
                margin 0 20px
                i {
                    font-size 38px
                }
                .en {
                    font-size 22px
                    font-weight bold
                    margin-top 5px
                    margin-bottom 10px
                }
                .name {
                    color vice-font-color
                    font-size 14px
                }
            }
        }
    }

    .video {
        position relative
        width 100%
        height 700px
        overflow hidden
        margin-top 150px
        video {
            width 100%
            height 100%
            object-fit cover
        }
    }

    .content-author {
        position relative
        padding 0
        margin 100px 0
        .content-box {
            flexContent()
            position absolute
            width 100%
            height 100%
            top 0
            left 0
            color white
            z-index 2
            .content-item {
                width 30%
                padding 0 20px
                .skill {
                    flexBetween()
                    .skill-bg {
                        position relative
                        width 70%
                        background rgba(0, 0, 0, .5)
                        border 1px solid rgba(0, 0, 0, .5)
                        border-radius 30px
                        height 10px
                        .skill-bar {
                            position absolute
                            width 100%
                            height 100%
                            top 0
                            left 0
                            z-index 2
                            background rgba(255, 255, 255, .8)
                            border-radius 30px
                        }
                    }
                }
            }
            .right {
                margin-left 80px
                margin-top -120px
                p:nth-child(3) {
                    margin-bottom 10px
                }
                .who {
                    flexContent()
                    flex-direction column
                    .title {
                        font-size 22px
                        font-weight 300
                    }
                    img {
                        width 100px
                        height 100px
                        margin 30px 0
                        border-radius 50%
                        box-shadow 2px 2px 20px #fff
                    }
                }
                .other {
                    flexAlign()
                    i {
                        font-size 32px
                        margin-right 10px
                    }
                    a {
                        color white
                    }
                }
            }
        }
        .content-bg {
            width 120%
            position relative
            transform rotate(-6deg)
            .blur {
                width 100%
                height 100%
                top 0
                left 0
                position absolute
                background-color rgba(0, 0, 0, .7)
                background-img url("../../assets/blur-cover.png")
            }
            .author-bg {
                display inherit
                width 100%
                height 600px
            }
        }
    }

    .article-box {
        margin-top -250px
        padding-top 300px
        background rgba(1,32,81,.1)
        .article {
            max-width 900px
            margin 0 auto
            align-items flex-start
            .title {
                font-size 18px
                text-align left
                font-weight 300
            }
            .article-list {
                margin-top 30px
                font-size 14px
                .article-item {
                    margin-bottom 30px
                    background white
                    flexAlign()
                    .article-left {
                        padding 20px
                        border-right 1px dashed vice-font-color
                        padding-bottom 40px
                        .article-name {
                            font-size 20px
                            cursor pointer
                            &:hover {
                                color rgba(1,32,81,.8)
                            }
                        }
                        .article-time {
                            font-size 14px
                            color vice-font-color
                            margin-top 5px
                            margin-bottom 15px
                        }
                        .article-content {
                            line-height 25px
                        }
                    }
                    .article-right {
                        width 140px
                        padding 20px 15px
                        flexContent()
                        flex-direction column
                        .article-btn {
                            border 1px solid main-color
                            color main-color
                            width 80px
                            padding 2px 0
                            text-align center
                            border-radius 5px
                            cursor pointer
                            margin-top 10px
                            &:hover {
                                background rgba(1,32,81,.1)
                            }
                        }
                    }
                }
            }
        }
    }

</style>