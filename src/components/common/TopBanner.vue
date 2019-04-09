/**
* @Description:    页面顶部banner
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 21:52
*/
<template>
    <div class="top">
        <div class="box">
            <slot>
                <div class="title">
                    <span class="special">{{ text }}</span>
                </div>
            </slot>
        </div>
        <img :src="img" alt="">
    </div>
</template>

<script>
    export default {
        name: "TopBanner",
        props: {
            img: {//banner图
                type: String,
                default: require('../../assets/coding.jpg')
            },
            text: {//banner文字
                type: String,
                default: ''
            }
        },
        data() {
            return {}
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
</style>