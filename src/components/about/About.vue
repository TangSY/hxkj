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

</style>