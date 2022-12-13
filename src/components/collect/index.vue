/**
* @Description:    收藏页
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/11/21 23:44
*/
<template>
  <div>
    <top-header></top-header>
    <top-banner :img="bannerImg" text="收藏"></top-banner>
    <div class="container">
      <ul>
        <li class="site-item" v-for="(site, index) in siteList" :key="index">
          <div class="site-item-title">
            <i class="iconfont" :class="site.icon"></i>
            <span>{{ site.title }}</span>
          </div>
          <div class="site-item-container">
            <a
              class="site-item-content"
              :href="item.url"
              target="_blank"
              v-for="(item, j) in site.list"
              :key="index + j"
            >
              <img
                :src="item.icon"
                :title="item.url"
                alt=""
                class="site-item-content-img"
              />
              <div class="site-item-content-txt">
                <p class="site-item-content-name" :title="item.name">
                  {{ item.name }}
                </p>
                <p class="site-item-content-desc" :title="item.desc">
                  {{ item.desc }}
                </p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopHeader from "../common/TopHeader";
import TopBanner from "../common/TopBanner";

export default {
  components: { TopBanner, TopHeader },
  name: "collect",
  data() {
    return {
      bannerImg: require("../../assets/collect-banner.jpg"), //banner图
      siteList: [
        {
          icon: "",
          title: "编程实战练习",
          list: [
            {
              icon: "/collect/14.png",
              url: "https://www.nowcoder.com/",
              name: "牛客网",
              desc: "笔试面试真题 OJ 面经",
            },
            {
              icon: "/collect/15.png",
              url: "http://www.acmcoder.com/index",
              name: "赛码网",
              desc: "笔面题 小公司正式笔试会在这上面",
            },
            {
              icon: "/collect/16.png",
              url: "https://leetcode.com/problemset/algorithms/?cong=true",
              name: "Leet Code",
              desc: "英文OJ 涵盖大多数公司笔试题",
            },
            {
              icon: "/collect/17.png",
              url: "https://leetcode-cn.com/problemset/all/",
              name: "Leet Code（中国区）",
              desc: "中文LeetCodeOJ 注意是两个账号系统哦数据不同步",
            },
            {
              icon: "/collect/18.png",
              url: "http://poj.org/problemlist?volume=1",
              name: "POJ",
              desc: "英文OJ 北京大学出品",
            },
          ],
        },
        {
          icon: "",
          title: "编程教程",
          list: [
            {
              icon: "/collect/19.png",
              url: "http://www.maiziedu.com/",
              name: "麦子学院",
              desc: "软件/硬件/设计 综合视频教程",
            },
            {
              icon: "/collect/20.png",
              url: "https://www.shiyanlou.com/",
              name: "实验楼",
              desc: "后端 安全 云计算 边做边学",
            },
            {
              icon: "/collect/21.png",
              url: "https://chuanke.baidu.com/",
              name: "百度传课",
              desc: "除了编程，还有各行业全面课程",
            },
            {
              icon: "/collect/22.png",
              url: "https://ke.qq.com/",
              name: "腾讯课堂",
              desc: "腾讯开发的综合教程网站",
            },
            {
              icon: "/collect/23.png",
              url: "http://www.imooc.com/",
              name: "慕课网",
              desc: "全是编程相关的视频，部分收费",
            },
            {
              icon: "/collect/24.png",
              url: "https://visualgo.net",
              name: "VisuAlgo",
              desc: "可视化多种链表、树、图的插入、删除等操作",
            },
            {
              icon: "/collect/25.png",
              url: "http://www.bjsxt.com/rengongzhinengshipin.html",
              name: "北京尚学堂",
              desc: "所有学习资源可百度云盘下载 人工智能/Javaweb/大数据",
            },
          ],
        },
        {
          icon: "",
          title: "数据下载源",
          list: [
            {
              icon: "/collect/26.png",
              url: "http://data.stats.gov.cn/easyquery.htm?cn=E0104",
              name: "国家数据",
              desc: "提供GDP、CPI等各年份省市数据",
            },
            {
              icon: "/collect/27.png",
              url: "https://msdn.itellyou.cn/",
              name: "MSDN I tell you",
              desc: "免费下载正版操作系统/开发IDE/办公软件等各种软件",
            },
            {
              icon: "/collect/28.png",
              url: "http://www.pudn.com/",
              name: "PUDN联合开发网",
              desc: "各种程序源代码",
            },
            {
              icon: "/collect/29.png",
              url: "https://opsx.alibaba.com/",
              name: "OPSX 阿里巴巴开源镜像站",
              desc: "Docker等访问慢的软件都能很快下载",
            },
            {
              icon: "/collect/30.png",
              url: "https://mirrors.tuna.tsinghua.edu.cn/",
              name: "TUNA 清华大学开源软件镜像站",
              desc: "各种操作系统，debian官方指定中国区下载站",
            },
            {
              icon: "/collect/31.png",
              url: "http://releases.ubuntu.com/",
              name: "Ubuntu镜像下载官网",
              desc: "官方Ubuntu各种版本镜像下载",
            },
            {
              icon: "/collect/32.png",
              url: "http://mirrors.163.com/",
              name: "163 网易开源镜像站",
              desc: "操作系统、maven等镜像",
            },
            {
              icon: "/collect/33.png",
              url: "https://www.iplaysoft.com/",
              name: "PlayNext 异次元",
              desc: "实用小软件",
            },
          ],
        },
        {
          icon: "",
          title: "设计素材（通用）",
          list: [
            {
              icon: "/collect/gaoding.png",
              url: "https://ps.gaoding.com/",
              name: "稿定设计",
              desc: "在线ps,ps网页版,ps在线图片处理",
            },
            {
              icon: "/collect/34.png",
              url: "http://www.zcool.com.cn/",
              name: "站酷",
              desc: "可下载大量免费PS、AI素材",
            },
            {
              icon: "/collect/35.png",
              url: "http://www.newcger.com/",
              name: "New CGer",
              desc: "AE特效模板 AE插件 音频素材",
            },
            {
              icon: "/collect/36.png",
              url: "http://www.uisdc.com/",
              name: "优设",
              desc: "web/app/logo/海报 素材教程",
            },
            {
              icon: "/collect/37.png",
              url: "http://www.uimaker.com/",
              name: "UImaker",
              desc: "UI设计教程/素材 PSD下载",
            },
            {
              icon: "/collect/38.png",
              url: "http://pngimg.com/",
              name: "pngimg",
              desc: "英文网站 PNG图片免费下载",
            },
            {
              icon: "/collect/39.png",
              url: "https://www.pixelsquid.com/",
              name: "Pixel Squid",
              desc: "3D图片素材，任意旋转角度",
            },
            {
              icon: "/collect/40.png",
              url: "https://gratisography.com/",
              name: "Gratisography",
              desc: "高清大图免费下载",
            },
            {
              icon: "/collect/41.png",
              url: "http://www.easyicon.net/",
              name: "Easyicon",
              desc: "免费小图标下载",
            },
            {
              icon: "/collect/42.png",
              url: "http://matthew.wagerfield.com/flat-surface-shader/",
              name: "Flat Surface Shader",
              desc: "自动生成低像素化几何背景",
            },
            {
              icon: "/collect/43.png",
              url: "https://www.flaticon.com/",
              name: "Flat Icon",
              desc: "免费的向量图标svg",
            },
            {
              icon: "/collect/44.png",
              url: "http://qrohlf.com/trianglify-generator/",
              name: "Trianglify Generator",
              desc: "晶格化、低维多面体背景生成",
            },
            {
              icon: "/collect/45.png",
              url: "http://publicdomainarchive.com/",
              name: "Public Domain Archive",
              desc: "免费高清大图下载",
            },
            {
              icon: "/collect/46.png",
              url: "http://www.lifeofpix.com/",
              name: "Life of Pix",
              desc: "高清大图免费下载",
            },
            {
              icon: "/collect/47.png",
              url: "https://unsplash.com/",
              name: "unsplash",
              desc: "免费高清大图，可搜索",
            },
            {
              icon: "/collect/48.png",
              url: "https://pixabay.com/",
              name: "Pixbay",
              desc: "老牌免费高清大图下载站",
            },
            {
              icon: "/collect/49.png",
              url: "https://www.ssyer.com/home",
              name: "沙沙野",
              desc: "免费背景图片素材",
            },
            {
              icon: "/collect/50.png",
              url: "http://www.polayoutu.com",
              name: "泼辣有图",
              desc: "免费商用大图",
            },
            {
              icon: "/collect/51.png",
              url: "https://codepen.io/anon/pen/KEqzpE",
              name: "Gradient Wave Generator",
              desc: "渐变波浪图形在线生成 支持HTML/CSS/JS代码",
            },
            {
              icon: "/collect/52.png",
              url: "http://www.uugai.com/",
              name: "U钙网",
              desc: "免费LOGO制作 无需注册帐号",
            },
            {
              icon: "/collect/logosc.png",
              url: "https://www.logosc.cn",
              name: "智能LOGO生成",
              desc: "人工智能为您在线制作LOGO，设计名片，打造完整品牌VI",
            },
            {
              icon: "/collect/53.png",
              url: "https://dribbble.com/",
              name: "Dribbble",
              desc: "设计灵感来源",
            },
          ],
        },
        {
          icon: "",
          title: "设计素材（配色）",
          list: [
            {
              icon: "/collect/54.png",
              url: "http://color.uisdc.com/",
              name: "中国传统色彩",
              desc: "优设子站 中国传统色彩",
            },
            {
              icon: "/collect/55.png",
              url: "https://uigradients.com",
              name: "UI Gradients",
              desc: "渐变色模板自动生成CSS",
            },
            {
              icon: "/collect/56.png",
              url: "https://www.materialui.co/",
              name: "Material UI",
              desc: "分类配色：材料、扁平、社交",
            },
            {
              icon: "/collect/57.png",
              url: "https://colordrop.io/",
              name: "Color Drop",
              desc: "配色网站",
            },
            {
              icon: "/collect/58.png",
              url: "http://colorhunt.co/",
              name: "Color Hunt",
              desc: "漂亮的配色方案",
            },
            {
              icon: "/collect/59.png",
              url: "http://nipponcolors.com",
              name: "日本传统色词典",
              desc: "日本的传统色彩RGB",
            },
            {
              icon: "/collect/60.png",
              url: "https://www.webdesignrankings.com/resources/lolcolors/",
              name: "LOL Colors",
              desc: "四色搭配方案",
            },
            {
              icon: "/collect/61.png",
              url: "https://webgradients.com/",
              name: "WebgGradients",
              desc: "超级好看的渐变色配色",
            },
          ],
        },
        {
          icon: "",
          title: "在线工具网站",
          list: [
            {
              icon: "/collect/62.png",
              url: "http://app.xunjiepdf.com/word2pdf",
              name: "迅捷PDF转换器",
              desc: "在线word转pdf唯一图像不失真的",
            },
            {
              icon: "/collect/63.png",
              url: "http://tool.lu/",
              name: "综合在线工具",
              desc: "运行代码/JS美化/盘搜/端口扫描",
            },
            {
              icon: "/collect/64.png",
              url: "http://www.qiuziti.com/",
              name: "求字体网",
              desc: "上传图片就能够知道图片中的字体",
            },
            {
              icon: "/collect/65.png",
              url: "http://www.chongbuluo.com/",
              name: "虫部落",
              desc: "搜索神器：提供搜索的工具、经验、资源",
            },
            {
              icon: "/collect/66.png",
              url: "https://pixelmap.amcharts.com/",
              name: "Pixel Map Generator",
              desc: "世界任意国家地图着色、标记，最小到省，最大到全球",
            },
            {
              icon: "/collect/67.png",
              url: "http://naotu.baidu.com/",
              name: "百度脑图",
              desc: "思维导图 文件组织图",
            },
            {
              icon: "/collect/68.png",
              url: "http://weavesilk.com/",
              name: "Weaves Silk",
              desc: "用鼠标创造对称唯美图形",
            },
            {
              icon: "/collect/69.png",
              url: "http://lackar.com/aa/",
              name: "Anywhere Anything",
              desc: "集成搜索网站 一个问题多方搜索",
            },
            {
              icon: "/collect/70.png",
              url: "http://www.flvcd.com/gb.php",
              name: "硕鼠",
              desc: "视频下载神器",
            },
            {
              icon: "/collect/71.png",
              url: "http://compressjpeg.com/zh/",
              name: "Compressjpeg",
              desc: "JPG在线压缩效果很好",
            },
            {
              icon: "/collect/72.png",
              url: "https://tinypng.com/",
              name: "TinyPNG",
              desc: "PNG/JEPG在线压缩，非常好用",
            },
            {
              icon: "/collect/73.png",
              url: "https://www.ilovepdf.com/zh_cn",
              name: "I Love PDF",
              desc: "PDF任意转换，访问速度慢但效果好",
            },
            {
              icon: "/collect/74.png",
              url: "https://fakeimg.pl/",
              name: "Fake Image Please",
              desc: "代码生成图片尺寸代图，设计网页时十分方便",
            },
            {
              icon: "/collect/75.png",
              url: "http://pic.xiaojianjian.net/",
              name: "小贱贱图床",
              desc: "免费的图床，利用的新浪图床做的",
            },
            {
              icon: "/collect/76.png",
              url: "http://sc.webaudiosaver.com/",
              name: "WebAudioSaver",
              desc: "把网页中的音频下载下来，几乎全能",
            },
            {
              icon: "/collect/77.png",
              url: "https://pasteboard.co/",
              name: "Pasteboard",
              desc: "粘贴剪贴板图片得到免费URL",
            },
            {
              icon: "/collect/78.png",
              url: "https://www.processon.com/",
              name: "Process On",
              desc: "免费在线做流程图 支持协作 海量模板 需要注册",
            },
            {
              icon: "/collect/79.png",
              url: "https://www.ascii-art-generator.org/",
              name: "Ascii Art Creator",
              desc: "上传图片/文字能自动生成字符组成的图案",
            },
            {
              icon: "/collect/81.png",
              url: "http://www.anycodes.cn/zh/",
              name: "AnyCode",
              desc: "在线编程网站 支持许多热门语言",
            },
            {
              icon: "/collect/82.png",
              url: "https://cli.im/",
              name: "草料二维码生成器",
              desc: "免费二维码生成器 支持API/美化",
            },
            {
              icon: "/collect/83.png",
              url: "https://www.soogif.com/compress",
              name: "SOOGIF",
              desc: "GIF制作/编辑/压缩/下载",
            },
            {
              icon: "/collect/84.png",
              url: "https://zhitu.isux.us/",
              name: "智图",
              desc: "腾讯图片压缩",
            },
            {
              icon: "/collect/85.png",
              url: "http://asciiflow.com/",
              name: "Ascii Flow",
              desc: "用ASCII画流程图",
            },
            {
              icon: "/collect/86.png",
              url: "https://cloudcraft.co",
              name: "Cloudcraft",
              desc: "绘制AWS架构图",
            },
            {
              icon: "/collect/87.png",
              url: "http://patorjk.com/software/taag",
              name: "Text to ASCII Art Generator (TAAG)",
              desc: "生成ASCII字符图案，常用于程序banner.txt",
            },
          ],
        },
        {
          icon: "",
          title: "好用插件",
          list: [
            {
              icon: "/collect/88.png",
              url: "http://fontawesome.dashgame.com/",
              name: "Font Awesome",
              desc: "一套可用html控制的icon",
            },
            {
              icon: "/collect/89.png",
              url: "http://www.layui.com/",
              name: "Layui",
              desc: "模块化前端框架",
            },
            {
              icon: "/collect/90.png",
              url: "http://www.wangeditor.com/",
              name: "WangEditor",
              desc: "简单的富文本编辑器",
            },
            {
              icon: "/collect/91.png",
              url: "http://ueditor.baidu.com/website/",
              name: "UEditor",
              desc: "百度开发富文本编辑器 功能齐全好用 界面丑陋",
            },
            {
              icon: "/collect/92.png",
              url: "http://www.croppic.net/",
              name: "Croppic",
              desc: "JS+CSS实现的裁图上传插件",
            },
            {
              icon: "/collect/93.png",
              url: "https://github.com/fex-team/webuploader",
              name: "Web Uploader",
              desc: "百度开发的文件分片上传神器",
            },
            {
              icon: "/collect/94.png",
              url: "http://www.jq22.com/",
              name: "Jquery插件库",
              desc: "大量CSS+Jquery特效，值得学习",
            },
            {
              icon: "/collect/95.png",
              url: "https://gitee.com/",
              name: "码云",
              desc: "免费Git/SVN代码私有/公开仓库",
            },
          ],
        },
        {
          icon: "",
          title: "服务器和网站",
          list: [
            {
              icon: "/collect/96.png",
              url: "http://www.umeng.com/",
              name: "友盟",
              desc: "站长统计",
            },
            {
              icon: "/collect/97.png",
              url: "https://www.qcloud.com/login",
              name: "腾讯云",
              desc: "腾讯云服务器",
            },
            {
              icon: "/collect/98.png",
              url: "https://ecs.console.aliyun.com",
              name: "阿里云",
              desc: "阿里云服务器",
            },
            {
              icon: "/collect/99.png",
              url: "https://www.linode.com/",
              name: "Linode",
              desc: "linux服务器",
            },
            {
              icon: "/collect/100.png",
              url: "https://cloud.tencent.com/act/campus",
              name: "腾讯云学生机",
              desc: "腾讯云一元优惠续费代金券领取页面",
            },
            {
              icon: "/collect/101.png",
              url: "https://www.qiniu.com/",
              name: "七牛云存储",
              desc: "提供CDN服务 内容分发",
            },
            {
              icon: "/collect/102.png",
              url: "http://ce.cloud.360.cn/",
              name: "奇云测",
              desc: "网站测速",
            },
            {
              icon: "/collect/103.png",
              url: "https://turnkeyinternet.net/speed-test/",
              name: "Turnkey Internet - Speedtest",
              desc: "国外服务器测速文件 1000M带宽",
            },
            {
              icon: "/collect/104.png",
              url: "https://cloud.baidu.com/index.html",
              name: "百度云",
              desc: "百度云服务器",
            },
            {
              icon: "/collect/105.png",
              url: "https://www.17ce.com/",
              name: "17ce",
              desc: "网站测速  支持多种访问方式",
            },
          ],
        },
        {
          icon: "",
          title: "音乐 / 电影 / 番剧 / 种子资源",
          list: [
            {
              icon: "/collect/111.png",
              url: "http://www.downfi.com/video/",
              name: "小视频下载",
              desc: "给链接下视频 支持爱奇艺、腾讯、优酷、快手、土豆、迅雷、公众号、QQ浏览器",
            },
            {
              icon: "/collect/112.png",
              url: "http://listen1.github.io/listen1/",
              name: "Listen 1",
              desc: "全网音乐 + 全平台客户端",
            },
          ],
        },
        {
          icon: "",
          title: "科学上网",
          list: [
            {
              icon: "/collect/113.png",
              url: "https://bwh1.net/",
              name: "Bandwagon（国内镜像）",
              desc: "搬瓦工服务器 支持CN2",
            },
            {
              icon: "/collect/114.png",
              url: "https://bandwagonhost.com/",
              name: "Bandwagon（官网）",
              desc: "搬瓦工服务器 性价比高 需要梯子",
            },
            {
              icon: "/collect/115.png",
              url: "https://arukas.io/en/",
              name: "Arukas Cloud",
              desc: "日本服务器 稳定 基于Docker",
            },
            {
              icon: "/collect/116.png",
              url: "https://portal.shadowsocks.to/cart.php",
              name: "Shadowsocks",
              desc: "基于Sock5 贵 限制多 稳定",
            },
          ],
        },
        {
          icon: "",
          title: "机器学习 / 深度学习 / 神经网络 / 人工智能 ",
          list: [
            {
              icon: "/collect/117.png",
              url: "http://image-net.org/index",
              name: "Image Net",
              desc: "大量论文用图片/特征 国内访问慢",
            },
            {
              icon: "/collect/118.png",
              url: "https://bitbucket.org/aquariusjay/deeplab-public-ver2",
              name: "DeepLab v2",
              desc: "基于深度学习的超好用语义图像分割源代码",
            },
            {
              icon: "/collect/119.png",
              url: "https://thispersondoesnotexist.com/",
              name: "This Person Does Not Exist",
              desc: "GAN生成的假人脸图像，非常逼真",
            },
            {
              icon: "/collect/120.png",
              url: "http://otoro.net/kanji-rnn/",
              name: "Kanji RNN",
              desc: "RNN生成随机伪汉字 只需要给一个初始笔画",
            },
          ],
        },
        {
          icon: "",
          title: "Java Web",
          list: [
            {
              icon: "/collect/121.png",
              url: "https://mvnrepository.com/",
              name: "MVN Repository",
              desc: "Maven的jar包查询、下载",
            },
            {
              icon: "/collect/122.png",
              url: "https://springcloud.cc/",
              name: "Spring Cloud 中文网",
              desc: "Spring Cloud 中文文档翻译",
            },
            {
              icon: "/collect/123.png",
              url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml",
              name: "IANA 著名端口号查询",
              desc: "查询已注册声明的著名端口号官网",
            },
          ],
        },
        {
          icon: "",
          title: "编程外包",
          list: [
            {
              icon: "/collect/124.png",
              url: "http://www.buluo007.com/",
              name: "大神部落",
              desc: "网页源码交易中心",
            },
            {
              icon: "/collect/125.png",
              url: "https://www.proginn.com/",
              name: "程序员客栈",
              desc: "云端开发，标准交付",
            },
            {
              icon: "/collect/126.png",
              url: "https://codemart.com/",
              name: "码市",
              desc: "Coding出品的代码交易平台，管理规范",
            },
            {
              icon: "/collect/127.png",
              url: "https://zb.oschina.net/",
              name: "开源众包",
              desc: "开源中国oschina出品的众包平台",
            },
          ],
        },
        {
          icon: "",
          title: "写论文必备",
          list: [
            {
              icon: "/collect/0.png",
              url: "http://sci-hub.tw/",
              name: "Sci Hub",
              desc: "各种不能下的论文都能免费下",
            },
            {
              icon: "/collect/1.png",
              url: "http://www.cnki.net/",
              name: "中国知网",
              desc: "提供一般学术论文下载 需在校",
            },
            {
              icon: "/collect/2.png",
              url: "http://muchong.com/bbs/",
              name: "小木虫论坛",
              desc: "大多是论文交流",
            },
            {
              icon: "/collect/3.png",
              url: "http://www.paperfree.cn/",
              name: "PaperFree",
              desc: "初步查重，可以免费1W字论文查重，支持机器修改重复",
            },
            {
              icon: "/collect/4.png",
              url: "http://www.paperpass.com/",
              name: "PaperPass",
              desc: "专业论文查重",
            },
            {
              icon: "/collect/5.png",
              url: "http://xueshu.baidu.com/",
              name: "百度学术",
              desc: "百度官方论文下载平台",
            },
            {
              icon: "/collect/6.png",
              url: "http://www.clcindex.com/",
              name: "中图分类号查询",
              desc: "中图分类号，如计算机一般为TP391",
            },
            {
              icon: "/collect/7.png",
              url: "http://www.udcsummary.info/php/index.php?lang=chi",
              name: "国际图书分类号查询",
              desc: "国图查询官网，例如U.D.C 681.3",
            },
            {
              icon: "/collect/8.png",
              url: "http://fanyi.baidu.com/",
              name: "百度翻译",
              desc: "快速理解外文文献 语言少 翻译一般",
            },
            {
              icon: "/collect/9.png",
              url: "https://translate.google.com",
              name: "谷歌翻译",
              desc: "需要梯子 神经网络翻译 支持更多语言",
            },
            {
              icon: "/collect/10.png",
              url: "https://translate.google.cn",
              name: "谷歌翻译（中国区）",
              desc: "在线翻译 可直连 不清楚和官网的差异",
            },
            {
              icon: "/collect/11.png",
              url: "http://ac.scmor.com/",
              name: "谷歌学术镜像",
              desc: "提供大量谷歌学术/网页搜索镜像网址，速度较慢，救急用",
            },
            {
              icon: "/collect/12.png",
              url: "http://www.6453.net/",
              name: "龙猫学术",
              desc: "百度文库 / 谷歌学术 / BBS / 专利 / 科研工具",
            },
            {
              icon: "/collect/13.png",
              url: "http://sande100.cn/baidu/",
              name: "百度文库文档提取",
              desc: "免费提取，效果一般，建议临时使用",
            },
          ],
        },
        {
          icon: "",
          title: "其他",
          list: [
            {
              icon: "/collect/mvyxws.png",
              url: "https://www.mvyxws.com/",
              name: "医学微视",
              desc: "一个以视频的方式分享各种医学知识的良心网站",
            },
            {
              icon: "/collect/wolframalpha.png",
              url: "https://www.wolframalpha.com",
              name: "wolframalpha",
              desc: "数学公式计算，支持方程、导数、高阶导数、微积分等各种复杂科学计算",
            },
            {
              icon: "/collect/xiangdang.png",
              url: "https://www.xiangdang.net/",
              name: "香当网",
              desc: "工作总结,个人工作总结,工作计划,述职报告,范文,论文",
            },
            {
              icon: "/collect/136.png",
              url: "http://www.77music.com/",
              name: "弹琴吧",
              desc: "钢琴谱大全",
            },
            {
              icon: "/collect/geojson.png",
              url: "http://geojson.io/",
              name: "geojson 数据生成",
              desc: "自定义地图，geojson 数据生成，可用于 echarts 等图表插件",
            },
            {
              icon: "/collect/137.png",
              url: "https://blockchain.info/",
              name: "Block Chain",
              desc: "知名比特币钱包平台",
            },
            {
              icon: "/collect/138.png",
              url: "http://www.ypppt.com/",
              name: "优品PPT",
              desc: "免费、免注册 PPT/字体下载",
            },
            {
              icon: "/collect/139.png",
              url: "https://www.sq688.com/",
              name: "超高无损音乐",
              desc: "免费无损音乐FLAC下载",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="stylus" scoped>
@import '../../style/common.styl';

.container {
  overflow: hidden;
  width: 100%;
  padding-bottom: 30px;
  font-size: 16px;
  background: rgba(1, 32, 81, 0.1);

  ul {
    max-width: 1000px;
    margin: 0 auto;
    align-items: flex-start;

    .site-item {
      width: 100%;
      margin-top: 30px;

      .site-item-title {
        margin-bottom: 15px;

        .iconfont {
          font-size: 24px;
        }

        span {
          font-size: 20px;
          margin-left: 5px;
        }
      }

      .site-item-container {
        flexContent(center, flex-start);
        flex-wrap: wrap;

        .site-item-content {
          width: 24%;
          padding: 20px 15px;
          background: #fff;
          margin-bottom: 10px;
          border-radius: 5px;
          cursor: pointer;
          flexAlign();
          margin-right: 0.9%;

          &:hover {
            box-shadow: 2px 2px 20px #000;

            .site-item-content-txt {
              .site-item-content-name {
                color: main-color;
              }

              .site-item-content-desc {
                color: gray-color;
              }
            }
          }

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: bg-color;
            margin-right: 15px;
          }

          .site-item-content-txt {
            flex: 1;
            overflow: hidden;

            .site-item-content-name {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 14px;
              margin-bottom: 5px;
              font-weight: bold;
              color: main-font-color;
            }

            .site-item-content-desc {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 12px;
              color: vice-font-color;
            }
          }
        }
      }
    }
  }
}
</style>