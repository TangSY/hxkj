/**
* @Description:    底部信息
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/4 0:10
*/
<template>
  <div class="container">
    <div class="box">
      <div class="rights">
        <img src="../../assets/domain.png" alt="" />
        <p>© 2017-{{ year }} hxkj. All rights reserved.</p>
        <p>本站内容未经许可，不允许转载</p>
        <p class="check" @click="checkBeian">粤ICP备18063378号</p>
      </div>
      <div class="wechat">
        <img src="../../assets/qr-code.jpg" alt="" />
        <p>扫一扫添加微信</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  mounted() {},
  computed: {},
  methods: {
    checkBeian() {
      this.$ba.trackEvent("hxkj-footer", "click", "查询备案信息");
      window.open("http://beian.miit.gov.cn");
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../style/common.styl';

.container {
  background: black;
  color: #a9a9a9;
  padding: 30px 0;
  font-size: 12px;

  .box {
    flexBetween();
    max-width: 800px;
    margin: 0 auto;
  }

  .rights {
    img {
      width: 120px;
    }

    p {
      margin: 5px 0;
    }

    .check {
      cursor: pointer;
    }
  }

  .wechat {
    flexContent();
    flex-direction: column;
    margin-left: 80px;

    img {
      width: 80px;
    }

    p {
      margin-top: 10px;
    }
  }
}
</style>
