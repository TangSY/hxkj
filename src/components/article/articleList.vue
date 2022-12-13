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
        <p class="article-name" @click="articleDetail(item.link)">
          {{ item.name }}
        </p>
        <div class="article-time">{{ item.time }}</div>
        <p class="article-content">{{ item.content }}</p>
      </div>
      <div class="article-right">
        <vue-qr
          :text="item.link"
          :size="100"
          :margin="0"
          colorDark="black"
          colorLight="white"
        ></vue-qr>
        <div class="article-btn" @click="articleDetail(item.link)">
          阅读全文
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as api from "../../constant/api";
import vueQr from "vue-qr";

export default {
  components: { vueQr },
  name: "ArticleList",
  props: {
    // 组件的位置
    from: {
      type: String,
      default: "article",
    },
  },
  data() {
    return {
      articleList: [
        {
          name: "让咱们前端也能轻松搭建属于自己的博客网站！搞定域名 + HTTPS",
          time: "2022年12月13日 16:57",
          content:
            "首先讲讲写这篇文章的契机是啥。由于某些不可抗力因素（具体是啥，下面会细说），我个人搭建的博客网站无法继续待在原来的服务器上了。需要给它挪窝，这意味...",
          link: "https://juejin.cn/post/7176554637497991223",
        },
        {
          name: "颜色也有距离？咋计算？一键找出上万个文件中的相近颜色并替换",
          time: "2022年09月26日 09:24",
          content:
            "前段时间在公司项目中推进全局换肤之后，发现有个后遗症。项目中存在大量硬编码的颜色值，导致部分场景无法达到动态换肤的效果...",
          link: "https://juejin.cn/post/7147493271046979614",
        },
        {
          name: "vue3-hash-calendar，一款基于vue3.x开发的移动端日历组件终于来了，支持农历/节假日",
          time: "2022年02月28日 21:45",
          content:
            "基于vue3的移动端日期、时间选择插件(支持农历/节假日)，日期选择面板以日历形式展示。支持单选、多选、范围选择模式；上下滑动切换周/月模式。支持快速切换年份和月份...",
          link: "https://juejin.cn/post/7069756348971352078",
        },
        {
          name: "寻找带有年味的烟花&爆竹-经典【扫雷】游戏改版",
          time: "2022年01月19日 15:43",
          content:
            "这个游戏的规则也是沿用扫雷的那一套规则。烟花&爆竹全部找出之后，会自动点燃，并且送上新年祝福彩蛋...",
          link: "https://juejin.cn/post/7054819621521588255",
        },
        {
          name: "被欠薪三个月的开发仔，2021年怎么过来的 | 年终总结",
          time: "2021年12月06日 13:48",
          content:
            "被欠薪三个月的开发仔，2021年怎么过来的，这是一篇来自底层码农的 2021 年终总结，品味人生百态...",
          link: "https://juejin.cn/post/7038461010855854094",
        },
        {
          name: "大型复杂项目中使用 antd 最新特性实现运行时低成本动态换肤",
          time: "2021年12月03日 19:16",
          content:
            "目前项目基于 React + antd 开发，现有的换肤方案对于一个大型项目来说，改动成本实在是有点太大了...",
          link: "https://juejin.cn/post/7037432808595259406",
        },
      ], //文章列表
    };
  },
  mounted() {
    this.getArticleList();
  },
  computed: {},
  methods: {
    async getArticleList() {
      // let data = await this.$axios('get', api.GET_ARTICLE_LIST);
      // this.articleList = data || [];
      //   if (this.from === "index") {
      //     this.articleList = this.articleList.slice(5);
      //   }
    },
    articleDetail(link) {
      //查看文章详情
      this.$ba.trackEvent("hxkj-首页", "查看文章详情", link);
      window.open(link);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../style/common.styl';

.article-list {
  margin-top: 30px;
  font-size: 14px;

  .article-item {
    border-radius: 5px;
    margin-bottom: 30px;
    background: white;
    flexAlign();

    &:hover {
      box-shadow: 2px 2px 20px #000;
    }

    .article-left {
      padding: 20px;
      border-right: 1px dashed vice-font-color;
      padding-bottom: 40px;

      .article-name {
        font-size: 20px;
        cursor: pointer;

        &:hover {
          color: rgba(1, 32, 81, 0.8);
        }
      }

      .article-time {
        font-size: 14px;
        color: vice-font-color;
        margin-top: 5px;
        margin-bottom: 15px;
      }

      .article-content {
        line-height: 25px;
        font-weight: 400;
      }
    }

    .article-right {
      width: 140px;
      padding: 20px 15px;
      flexContent();
      flex-direction: column;

      .article-btn {
        border: 1px solid main-color;
        color: main-color;
        width: 80px;
        padding: 2px 0;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;

        &:hover {
          background: rgba(1, 32, 81, 0.1);
        }
      }
    }
  }
}
</style>