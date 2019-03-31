/**
* @Description:    首页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/3/31 11:55
*/
<template>
    <div class="container">
        <div class="video">
            <div class="box">
                <div class="title">
                    <span class="special">编程</span>
                    <span>の趣</span>
                </div>
                <div class="subtitle">Play Codes</div>
            </div>
            <video preload muted autoplay loop name="media" src="//hxkj.vip/banner_video.mp4"></video>
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

    .video {
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
        video {
            width 100%
            height 100%
            object-fit cover
        }
    }

    .content {
        flexContent()
        flex-direction column
        width 100%
        padding 80px
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

</style>