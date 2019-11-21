/**
* @Description:    
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/23 23:26
*/
<template>
    <div class="article-list">
        <div class="article-item" v-for="(item, index) in articleList" :key="index">
            <div class="article-left">
                <p class="article-name" @click="articleDetail(item.link)">{{ item.name }}</p>
                <div class="article-time">{{ item.time }}</div>
                <p class="article-content">{{ item.content }}</p>
            </div>
            <div class="article-right">
                <q-rcode :value="item.link" :options="{ size: 100 }"></q-rcode>
                <div class="article-btn" @click="articleDetail(item.link)">阅读全文</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QRcode from '@xkeshi/vue-qrcode'

    export default {
        components: {QRcode},
        name: "ArticleList",
        props: ['articleList'],
        data() {
            return {}
        },
        mounted() {

        },
        computed: {

        },
        methods: {
            articleDetail(link) {//查看文章详情
                this.$ba.trackEvent('hxkj-首页','查看文章详情',link);
                window.open(link);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .article-list {
        margin-top 30px
        font-size 14px
        .article-item {
            border-radius 5px
            margin-bottom 30px
            background white
            flexAlign()
            &:hover {
                box-shadow 2px 2px 20px #000
            }
            .article-left {
                padding 20px
                border-right 1px dashed vice-font-color
                padding-bottom 40px
                .article-name {
                    font-size 20px
                    cursor pointer
                    &:hover {
                        color rgba(1, 32, 81, .8)
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
                    font-weight 400
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
                        background rgba(1, 32, 81, .1)
                    }
                }
            }
        }
    }
</style>