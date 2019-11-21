/**
* @Description:    文章详情
* @Author:         TSY 
* @Email:          t@tsy6.com
* @CreateDate:     2019/4/24 23:29
*/
<template>
    <div class="article-detail">
        <top-header :is-detail="true"></top-header>
        <div class="title">{{ article.title }}</div>
        <div class="content" v-html="compileMarkDown(article.markDownContent)"></div>
    </div>
</template>

<script>
    import hljs from 'highlight.js/lib/highlight';
    import 'highlight.js/styles/atom-one-dark.css';
    import TopHeader from "../common/TopHeader";

    let showdown  = require('showdown');
    let converter = new showdown.Converter();

    export default {
        name: "ArticleDetail",
        components: {TopHeader},
        data() {
            return {
                article: {
                    title: 'Github配合Jenkins，实现vue等前端项目的自动构建与发布',
                    markDownContent: '>本篇文章前端项目以vue为例（其实前端工程化项目的操作方法都相同），部署在Linux系统上（centos）。<br>' +
                    '之前做前端项目的部署，一直都是手动运行打包命令，打包完。再使用`FTP`、`Xshell`等这类的工具上传到服务器。这种方式不仅效率不高，而且容易出错，一不小心就放错地方了。或者公司有运维，只需要打包前端项目代码后发给运维就不管了，但是一般的小公司是没有运维的。所以呢，就在找有没有什么工具可以自动帮我完成这些操作，于是就找到了下面这货，名字叫做`Jenkins`。随着用的越来越多，越来越顺心，这小老头也是越看越顺眼了！！！\n' +
                    '\n' +
                    '![Jenkins.jpg](https://upload-images.jianshu.io/upload_images/7412714-1adcfb88a2efd965.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '#####这篇文章的主要目的，就是实现往`github` `push`代码或者合并代码到项目的`master`或者其他分支，`jenkins`就自动部署代码到对应服务器。\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-89b4e2539a347c38.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '###一、Jenkins的安装与配置\n' +
                    '>`Jenkins`是一个开源软件项目，是基于`Java`开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。（摘自百度百科）\n\n' +
                    '####1. java环境的搭建\n' +
                    '因为它是依赖于`Java`环境的，所以必须先安装`java`环境，否则启动`Jenkins`服务的时候会报错哦。\n' +
                    '执行以下命令安装JDK，一步到位。建议安装版本1.8以上的\n' +
                    '```\n' +
                    'yum install java-1.8.0-openjdk\n' +
                    '```\n' +
                    '####2. 安装Jenkins\n' +
                    '我一般习惯使用`yum`安装软件。由于`yum`的`repo`中默认没有`Jenkins`，所以需要先将`Jenkins`库添加到`yum repos`中，依次执行下面的命令：\n' +
                    '```\n' +
                    'cd /etc/yum.repos.d/\n' +
                    'wget http://pkg.jenkins.io/redhat/jenkins.repo\n' +
                    'rpm --import http://pkg.jenkins.io/redhat/jenkins.io.key\n' +
                    'yum install -y jenkins\n' +
                    '```\n' +
                    '赋予`Jenkins`在网站根目录的读写权限，我这边网站的根目录为`/usr/share/nginx/hxkj`\n' +
                    '```\n' +
                    'chown -R jenkins.jenkins /usr/share/nginx/hxkj\n' +
                    '```\n' +
                    '启动`Jenkins`\n' +
                    '```\n' +
                    'service jenkins start\n' +
                    '```\n' +
                    '因为`jenkins`默认使用`8080`端口，如果使用的是云服务器，还需要在安全组中开放`8080`端口（如果不想使用`8080`端口，或者端口被占用了，可以在`Jenkins`的配置文件里修改默认端口）\n' +
                    '####3. Jenkins的初始化使用\n' +
                    '######3.1、在浏览器输入`http://服务器IP:8080` 打开`jenkins`，首次打开需要获取管理员的密码，如图：\n' +
                    '![unlock.jpg](https://upload-images.jianshu.io/upload_images/7412714-178f78a056a8a125.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '\n' +
                    '可以根据页面提示在服务器中找到该密码，输入如下命令：（`cat`命令后面的路径为页面上显示的标红文字，每个人的可能不一样）\n' +
                    '```\n' +
                    'cat /var/lib/jenkins/secrets/initalAdminPassword\n' +
                    '```\n' +
                    '######3.2、安装默认插件：输入密码，提交完成之后会跳转到插件安装页面，选择第一个然后进行安装，如图：\n' +
                    '![plugin.jpg](https://upload-images.jianshu.io/upload_images/7412714-d4002a4b48aa8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '这一步，啥都不用做，慢慢等吧。。。\n' +
                    '![installing.jpg](https://upload-images.jianshu.io/upload_images/7412714-2465af784dd865cf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '接下来默认插件安装完成之后，创建一个管理员账户，完成配置后，就可以登录 `Jenkins` 了\n' +
                    '![create.png](https://upload-images.jianshu.io/upload_images/7412714-2b6a1c8f2ee3e6dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '######3.3、安装 NodeJs插件，用于vue项目打包构建。\n' +
                    '打开`系统管理` => `管理插件`  搜索 `NodeJs`然后勾选安装\n' +
                    '打开`系统管理` => `全局工具配置`   拉到底部 配置  node 版本，如图：\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-7447618158f61afa.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '![node.jpg](https://upload-images.jianshu.io/upload_images/7412714-0dc4d936dfcc8ff6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '####4. 配置自动部署任务\n' +
                    '######4.1、新建任务：点击`新建任务` => `输入任务名称`，选择`构建一个自由风格的软件项目`然后确定\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-054de2b4fe3d58d3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '![create_task.jpg](https://upload-images.jianshu.io/upload_images/7412714-4fbb966ee5c49b11.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '######4.2、配置git，进入`任务配置`，选择`源码管理` ，因为我的项目是开源的，所以无需填写账号密码\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-5459571f859cd712.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-7e66d53e4637fc3e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '![git.jpg](https://upload-images.jianshu.io/upload_images/7412714-2eb12478b6ba73d3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '######4.3、设置构建环境，选择 `Provide Node & npm bin/ folder to PATH`  然后选择之前安装插件时候配置的node版本\n' +
                    '![build_env.jpg](https://upload-images.jianshu.io/upload_images/7412714-8e5210ed7b5546e2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '######4.4、配置项目自动化打包，选择 `增加构建步骤` => `Excute shell`  这个是运行相关的sh命令（这一步建议耗时操作分离步骤）\n' +
                    '所有命令\n' +
                    '```\n' +
                    'cd /var/lib/jenkins/workspace/hxkj #进入Jenkins工作空间下hxkj项目目录\n' +
                    'node -v #检测node版本（此条命令非必要）\n' +
                    'npm -v #检测npm版本（此条命令非必要）\n' +
                    'npm config set registry https://registry.npm.taobao.org #把npm源设置为淘宝源（这个你懂的）\n' +
                    'npm config get registry #检测npm是否切换成功（此条命令非必要）\n' +
                    'npm install #安装项目中的依赖\n' +
                    'npm run build #打包\n' +
                    'cd dist\n' +
                    'rm -rf hxkj.tar.gz #删除上次打包生成的压缩文件（一般建议备份，不要直接删除，这边测试就无所谓啦）\n' +
                    'tar -zcvf hxkj.tar.gz * #把生成的项目打包成压缩包，方便移动到项目部署目录\n' +
                    'cd /usr/share/nginx/hxkj #进入web项目根目录\n' +
                    'mv /var/lib/jenkins/workspace/hxkj/dist/hxkj.tar.gz ./  #移动刚刚打包好的项目到web项目根目录\n' +
                    'tar -zxvf hxkj.tar.gz -C dist/  #解压项目到dist目录\n' +
                    'rm -rf hxkj.tar.gz    #删除压缩包\n' +
                    '```\n' +
                    '步骤分离之后，如下图\n' +
                    '![shell_command.jpg](https://upload-images.jianshu.io/upload_images/7412714-80a168edd8cdaa2c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '\n' +
                    '######4.5、保存后点击`立即构建`查看任务是否能够成功构建，`控制台输出` 菜单可以查看构建日志。\n' +
                    '![log.jpg](https://upload-images.jianshu.io/upload_images/7412714-617fbb5bc35f2de5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '####到现在为止，Jenkins构建已经配置完毕，接下来就是配合github来完成骚操作了！\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-2f8ffb8ce2c37110.gif?imageMogr2/auto-orient/strip)\n' +
                    '\n' +
                    '###二、GitHub+Jenkins联动配置\n' +
                    '####1. 创建 github AccessToken\n' +
                    '进入 `github` 设置页，选择`Developer settings`\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-ad85d53dae1dfaf7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '![dev_setting.jpg](https://upload-images.jianshu.io/upload_images/7412714-9654c8f146f1ac51.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '选择 `Personal access tokens` => `Generate new Generate `\n' +
                    '![token.jpg](https://upload-images.jianshu.io/upload_images/7412714-102a158493b7abbf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '勾选如下配置，然后点击`Generate Generate `，一定要保存好这个`token`哦，它只显示一次。\n' +
                    '![check.jpg](https://upload-images.jianshu.io/upload_images/7412714-2f7c52cc9b49745e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '####2. Jenkins添加github插件\n' +
                    '打开`系统管理` => `管理插件`  搜索 `Github Plugin`然后勾选安装\n' +
                    '![filter.jpg](https://upload-images.jianshu.io/upload_images/7412714-e7d9634f6d7b54df.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '![git_plugin.jpg](https://upload-images.jianshu.io/upload_images/7412714-b73acd527661a4fa.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '然后进入 `系统管理` => `系统设置` => `Github Server` 添加信息\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-dec17c13fe3e17b3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '`凭据` 那里再点击 `添加` 添加如下信息\n' +
                    '![add_secret.jpg](https://upload-images.jianshu.io/upload_images/7412714-650a0b4d2969167e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '添加完毕之后记得选择我们刚刚添加的凭据信息\n' +
                    '\n' +
                    '最后点击 `连接测试`   如果如下显示，说明配置是正确的\n' +
                    '![con_test.jpg](https://upload-images.jianshu.io/upload_images/7412714-5ea031aa8a90953f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '###三、Git push测试\n' +
                    '>Git的push操作，这边就不演示了\n' +
                    '\n' +
                    '当完成`push`操作之后，回到`Jenkins`管理页面，就会看到在构建队列中，新增了一条记录。\n' +
                    '![success.jpg](https://upload-images.jianshu.io/upload_images/7412714-455a6e4709589cf7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '而且，查看构建日志，也提示成功！！！\n' +
                    '![build_success.png](https://upload-images.jianshu.io/upload_images/7412714-b8d0f50a5b1ceb91.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '\n' +
                    '![](https://upload-images.jianshu.io/upload_images/7412714-6910c55634569ccf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
                    '\n' +
                    '\n'
                }
            }
        },
        mounted() {
            this.highlightCode();

            this.getDetail();
        },
        computed: {},
        methods: {
            compileMarkDown(content) {
                return converter.makeHtml(content)
            },
            highlightCode() {//高亮代码
                const preEl = document.querySelectorAll('pre');

                preEl.forEach((el) => {
                    hljs.highlightBlock(el)
                })
            },
            getDetail() { //获取文章详情数据

            }
        }
    }
</script>

<style lang="stylus">
    @import "../../style/common.styl"

    .article-detail {
        width 700px
        padding 80px 0px
        margin 0 auto
        font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        font-size 16px
        .title {
            word-break: break-word!important;
            word-break: break-all;
            margin: 20px 0 0;
            font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
            font-size: 34px;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom 30px
        }
        .content {
            h1,h2,h3,h4,h5,h6 {
                font-weight bold
                margin 20px 0
                code {
                    padding: 2px 4px;
                    background-color: #f6f6f6;
                    border: none;
                    font-size: 16px;
                    white-space: pre-wrap;
                    vertical-align: middle;
                    color: #c7254e;
                }
            }
            h1, .h1 {
                font-size 26px
            }
            h2, .h2 {
                font-size 24px
            }
            h3, .h3 {
                font-size 22px
            }
            h4, .h4 {
                font-size 20px
            }
            h5, .h5 {
                font-size 18px
            }
            h6, .h6 {
                font-size 18px
            }
            blockquote {
                padding: 20px;
                margin-bottom: 25px;
                background-color: #f7f7f7;
                border-left: 6px solid #b4b4b4;
                word-break: break-word!important;
                word-break: break-all;
                font-size: 16px;
                font-weight: 400;
                line-height: 30px;
            }
            p {
                margin 20px 0px
                width 100%
                word-break: break-all;
                code {
                    padding: 2px 4px;
                    background-color: #f6f6f6;
                    border: none;
                    font-size: 13px;
                    white-space: pre-wrap;
                    vertical-align: middle;
                    color: #c7254e;
                }
                img {
                    margin 20px auto
                    display block
                    max-width 100%
                }
            }
        }
    }
</style>