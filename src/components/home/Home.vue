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
                <img class="blur" src="../../assets/blur-cover.png" alt="">
                <img class="author-bg" src="../../assets/author-bg.jpg" alt="">
            </div>
        </div>
        <div class="video">
            <video preload muted autoplay loop name="media" src="//hxkj.vip/banner_video.mp4"></video>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
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
        .content-box{
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
                        background rgba(0,0,0,.5)
                        border 1px solid rgba(0,0,0,.5)
                        border-radius 30px
                        height 10px
                        .skill-bar {
                            position absolute
                            width 100%
                            height 100%
                            top 0
                            left 0
                            z-index 2
                            background rgba(255,255,255,.8)
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
                    a{
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
                background-color rgba(0,0,0,.7)
                background-img url("../../assets/blur-cover.png")
            }
            .author-bg {
                display inherit
                width 100%
                height 600px
            }
        }
    }

</style>