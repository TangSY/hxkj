/**
* @Description:    顶部导航栏
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/3/31 11:56
*/
<template>
    <div>
        <div class="header" :class="{'scroll-down': isShowScroll || isDetail}">
            <img src="../../assets/logo-white.png" alt="" class="logo" @click="home">
            <div class="menu">
                <ul>
                    <li class="menu-item" v-for="(item, index) in menu" :key="index" @click="intoModel(item.model)">{{ item.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import { throttle } from "../../utils/util";

    export default {
        name: "TopHeader",
        props: {
            isDetail: {//是否为详情页
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                menu: [
                    {name: '首页', model: 'home'},
                    {name: '文集', model: 'article'},
                    {name: '收藏', model: 'collect'},
                    {name: '娱乐', model: 'amusement'},
                    {name: '关于', model: 'about'}
                ],//菜单
                isShowScroll: false,//是否绑定scroll class
            }
        },
        mounted() {
            window.addEventListener('scroll',throttle(this.handleScroll, 200), true);
        },
        computed: {},
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > 100) {
                    this.isShowScroll = true;
                } else {
                    this.isShowScroll = false;
                }
            },
            home() {
                this.$ba.trackEvent('hxkj-header', 'nav', 'home');
                this.$router.push({name: 'home'});
            },
            intoModel(model) {
                this.$ba.trackEvent('hxkj-header', 'nav', model);
                this.$router.push({name: model});
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .header {
        position fixed
        top 0
        left 0
        width 100%
        padding 20px 15px
        flexBetween()
        z-index 99
        font-size 14px
        img {
            width 100px
            cursor pointer
            margin-left 20px
        }
        .menu ul {
            flexAlign()
            color white
            .menu-item {
                margin 0 20px
                padding 5px
                cursor pointer
                border 1px solid transparent
                &:hover {
                    border 1px solid main-color
                    border-radius 5px
                    color main-color
                }
            }
        }
    }

    .scroll-down {
        background #000
        padding 5px 15px
        img {
            width 100px
            cursor pointer
            margin-left 0px
        }
        .menu ul {
            .menu-item {
                margin 0 15px
                &:hover {
                    border 1px solid transparent
                }
            }
        }
    }

</style>