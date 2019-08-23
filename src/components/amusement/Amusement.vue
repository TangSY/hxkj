/**
* @Description:    娱乐
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 21:44
*/
<template>
    <div class="box">
        <top-header></top-header>
        <top-banner :img="bannerImg" text="娱乐"></top-banner>
        <div class="container">敬请期待~</div>
        <canvas id="cat" width="500" height="500"></canvas>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner.vue";
    import TopHeader from "../common/TopHeader";

    export default {
        components: {TopHeader, TopBanner},
        name: "Amusement",
        data() {
            return {
                bannerImg: require('../../assets/amusement-banner.jpg'),//banner图
            }
        },
        mounted() {
            loadlive2d("cat",  {
                "version": "Sample 1.0.0",
                "model": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/moc/tororo.moc",
                "textures": ["https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/moc/tororo.2048/texture_00.png"],
                "pose": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.pose.json",
                "name": "tororo",
                "motions": {
                    "idle": [{"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/00_idle.mtn"}],
                    "": [
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/01.mtn"},
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/02.mtn"},
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/03.mtn"},
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/04.mtn"},
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/05.mtn"},
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/06.mtn"},
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/07.mtn"},
                        {"file": "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/mtn/08.mtn"}
                    ]
                }
            });
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/common.styl"

    .box {
        width 100%
        position relative
        .container {
            width 100%
            height 800px
            flexContent()
            font-size 24px
        }
        #cat {
            position absolute
            bottom 0
            right 0
        }
    }

</style>