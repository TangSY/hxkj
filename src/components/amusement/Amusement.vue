/**
* @Description:    娱乐
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/9 21:44
*/
<template>
    <div>
        <top-banner :img="bannerImg" text="娱乐"></top-banner>
    </div>
</template>

<script>
    import TopBanner from "../common/TopBanner.vue";

    export default {
        components: {TopBanner},
        name: "Amusement",
        data() {
            return {
                bannerImg: require('../../assets/amusement-banner.jpg'),//banner图
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