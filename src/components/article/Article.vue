/**
* @Description:    文章列表页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 19:38
*/
<template>
    <div class="container">
        <top-banner :img="bannerImg" text="文集"></top-banner>
        <div class="article-box">
            <article-list :articleList="articleList"></article-list>
        </div>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner.vue";
    import ArticleList from "../common/ArticleList.vue";

    export default {
        components: {
            ArticleList,
            TopBanner},
        name: "Article",
        data() {
            return {
                bannerImg: require('../../assets/article-banner.jpg'),//banner图
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
        methods: {}
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