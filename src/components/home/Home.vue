/**
* @Description:    首页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/3/31 11:55
*/
<template>
    <div class="container">
        <top-header></top-header>
        <top-banner height="650px">
            <div class="title">
                <span class="special">编程</span>
                <span>の趣</span>
            </div>
            <div class="subtitle">Play Codes</div>
        </top-banner>
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
                    <p>我叫唐士瀛（TSY），沉迷于程序世界的时候叫HashTang。江西吉安人，现居深圳，就职于深圳某互联网公司，任前端工程师。</p>
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
                <article-list :articleList="articleList"></article-list>
            </div>
        </div>
        <div class="video">
            <div class="box">
                <p class="title">项目咨询</p>
                <div class="process">
                    <div class="process-item">
                        <i class="iconfont icon-xuqiu"></i>
                        <span>需求</span>
                    </div>
                    <span>
                        <i class="iconfont icon-arrow-right"></i>
                    </span>
                    <div class="process-item">
                        <i class="iconfont icon-yanfagongju"></i>
                        <span>研发</span>
                    </div>
                    <span>
                        <i class="iconfont icon-arrow-right"></i>
                    </span>
                    <div class="process-item">
                        <i class="iconfont icon-yanfabu"></i>
                        <span>部署</span>
                    </div>
                </div>
                <p class="title">需求咨询</p>
                <span class="gap">或</span>
                <p class="title">开发咨询</p>
                <span>
                    <i class="gap iconfont icon-arrow-down-copy"></i>
                </span>
                <div class="consultation" @click="consultation">向我咨询</div>
            </div>
            <video preload muted autoplay loop name="media" src="//hxkj.vip/banner_video.mp4"></video>
        </div>
        <div class="content">
            <div id="imgContainer" @mouseover="imageClickHandler"></div>
            <span class="says">-- Linus</span>
        </div>
    </div>
</template>

<script>
    import {checkPlatform, Fragment} from "../../utils/util";
    import TopHeader from "../common/TopHeader.vue";
    import TopBanner from "../common/TopBanner.vue";
    import ArticleList from "../article/ArticleList.vue";

    export default {
        name: "Home",
        components: {
            ArticleList,
            TopHeader,
            TopBanner
        },
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
                    }
                ],//文章列表
                TWO_PI: Math.PI * 2,
                urls: [require('../../assets/talk.png')],
                image: null,
                imageWidth: 728,
                imageHeight: 113,
                vertices: [],
                indices: [],
                fragments: [],
                container: '',
                clickPosition: [],
                isCanHover: true,//是否可以触发hover动画
            }
        },
        mounted() {
            this.clickPosition = [
                this.imageWidth * 0.5,
                this.imageHeight * 0.5
            ]
            this.container = document.getElementById('imgContainer');
            this.onLoad();
        },
        computed: {},
        methods: {
            consultation() {//咨询
                if (checkPlatform() == 3) {
                    this.$ba.trackEvent('hxkj-首页','向我咨询','PC端');
                    window.open('http://wpa.qq.com/msgrd?v=3&uin=337828932&site=在线客服&menu=yes');
                } else {
                    this.$ba.trackEvent('hxkj-首页','向我咨询','手机端');
                    window.open('mqqwpa://im/chat?chat_type=wpa&uin=337828932&version=1&src_type=web&web_src=http:://wpa.b.qq.com');
                }
            },
            onLoad() {
                /* eslint-disable no-undef */
                TweenMax.set(this.container, {perspective: 500});
                this.image = new Image();
                this.image.onload = () => {
                    this.placeImage(false);
                };
                this.image.src = this.urls[0];
            },
            placeImage(transitionIn) {
                this.isCanHover = true;
                this.container.appendChild(this.image);
                if (transitionIn !== false) {
                    /* eslint-disable no-undef */
                    TweenMax.fromTo(this.image, 0.75, {x: -800, y: 0}, {
                        y: 0,
                        x: 0,
                        /* eslint-disable no-undef */
                        ease: Elastic.easeOut
                    });
                }
            },
            imageClickHandler(event) {
                if (!this.isCanHover) return;
                this.$ba.trackEvent('hxkj-首页','hover','talk is cheap,show me the code');
                var box = this.image.getBoundingClientRect(), top = box.top, left = box.left;
                this.clickPosition[0] = event.clientX - left;
                this.clickPosition[1] = event.clientY - top;
                this.triangulate();
                this.shatter();
            },
            triangulate() {
                var rings = [
                    {
                        r: 50,
                        c: 12
                    },
                    {
                        r: 150,
                        c: 12
                    },
                    {
                        r: 300,
                        c: 12
                    },
                    {
                        r: 1200,
                        c: 12
                    }
                ], x, y, centerX = this.clickPosition[0], centerY = this.clickPosition[1];
                this.vertices.push([
                    centerX,
                    centerY
                ]);
                rings.forEach((ring) => {
                    var radius = ring.r, count = ring.c, variance = radius * 0.25;
                    for (var i = 0; i < count; i++) {
                        if (window.CP.shouldStopExecution(2)) {
                            break;
                        }
                        x = Math.cos(i / count * this.TWO_PI) * radius + centerX + this.randomRange(-variance, variance);
                        y = Math.sin(i / count * this.TWO_PI) * radius + centerY + this.randomRange(-variance, variance);
                        this.vertices.push([
                            x,
                            y
                        ]);
                    }
                    window.CP.exitedLoop(2);
                });
                this.vertices.forEach((v) => {
                    v[0] = this.clamp(v[0], 0, this.imageWidth);
                    v[1] = this.clamp(v[1], 0, this.imageHeight);
                });
                /* eslint-disable no-undef */
                this.indices = Delaunay.triangulate(this.vertices);
            },
            shatter() {
                var p0, p1, p2, fragment;
                /* eslint-disable no-undef */
                var tl0 = new TimelineMax({onComplete: this.shatterCompleteHandler});
                for (var i = 0; i < this.indices.length; i += 3) {
                    if (window.CP.shouldStopExecution(3)) {
                        break;
                    }
                    p0 = this.vertices[this.indices[i + 0]];
                    p1 = this.vertices[this.indices[i + 1]];
                    p2 = this.vertices[this.indices[i + 2]];
                    fragment = new Fragment(p0, p1, p2, this.image);
                    var dx = fragment.centroid[0] - this.clickPosition[0],
                        dy = fragment.centroid[1] - this.clickPosition[1],
                        d = Math.sqrt(dx * dx + dy * dy), rx = 300 * this.sign(dy), ry = 900 * -this.sign(dx),
                        delay = d * 0.003 * this.randomRange(0.1, 0.25);
                    fragment.canvas.style.zIndex = Math.floor(d).toString();
                    /* eslint-disable no-undef */
                    var tl1 = new TimelineMax();
                    tl1.to(fragment.canvas, this.randomRange(0.25, 1), {
                        z: this.randomRange(-1500, 1500),
                        rotationX: rx,
                        rotationY: ry,
                        x: this.randomRange(-2000, 2000),
                        y: this.randomRange(-2000, 2000),
                        /* eslint-disable no-undef */
                        ease: Expo.easeIn
                    });
                    tl1.to(fragment.canvas, 0.4, {alpha: 0}, 0.6);
                    tl0.insert(tl1, delay);
                    this.fragments.push(fragment);
                    this.container.appendChild(fragment.canvas);
                }
                window.CP.exitedLoop(3);
                this.container.removeChild(this.image);
                this.isCanHover = false;
            },
            shatterCompleteHandler() {
                this.fragments.forEach((f) => {
                    this.container.removeChild(f.canvas);
                });
                this.fragments.length = 0;
                this.vertices.length = 0;
                this.indices.length = 0;
                this.placeImage();
            },
            randomRange(min, max) {
                return min + (max - min) * Math.random();
            },
            clamp(x, min, max) {
                return x < min ? min : x > max ? max : x;
            },
            sign(x) {
                return x < 0 ? -1 : 1;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .container {
        overflow hidden
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
                &:hover {
                    border-color main-color
                    .en {
                        font-size 24px
                    }
                    .name {
                        font-size 16px
                    }
                }
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
                        &:hover {
                            .skill-bar {
                                box-shadow 2px 2px 20px #fff
                            }
                        }
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
                background-image url("../../assets/blur-cover.png")
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
        background rgba(1, 32, 81, .1)
        .article {
            max-width 900px
            margin 0 auto
            align-items flex-start
            .title {
                font-size 18px
                text-align left
                font-weight 300
            }
        }
    }

    .video {
        position relative
        width 100%
        height 680px
        overflow hidden
        .box {
            flexAlign()
            flex-direction column
            position absolute
            width 100%
            height 100%
            top 0
            left 0
            z-index 2
            background-color rgba(0, 0, 0, .7)
            background-image url("../../assets/blur-cover.png")
            color white
            padding-top 80px
            .title {
                font-size 26px
            }
            .process {
                flexAlign()
                flex-wrap wrap
                padding-top 50px
                margin-bottom 50px
                .process-item {
                    padding 0 50px
                    margin 0 30px
                    padding-bottom 20px
                    flexAlign()
                    flex-direction column
                    &:nth-child(3) {
                        border-bottom 1px solid white
                    }
                    i {
                        font-size 72px
                        margin-bottom 20px
                    }
                }
            }
            span {
                i {
                    font-size 28px
                }
            }
            .gap {
                display inline-block
                margin 20px 0
            }
            .consultation {
                font-size 18px
                border 1px solid white
                border-radius 5px
                padding 10px 30px
                cursor pointer
                &:hover {
                    background rgba(255, 255, 255, .3)
                }
            }
        }
        video {
            width 100%
            height 100%
            object-fit cover
        }
    }

    .content {
        position relative
        #imgContainer {
            width 728px
            height 113px
            top -100px
        }
        .says {
            margin-top 50px
        }
    }

</style>