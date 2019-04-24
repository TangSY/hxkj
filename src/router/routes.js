/**
 * @Description:    路由列表
 * @Author:         TSY
 * @Email:          t@tsy6.com
 * @CreateDate:     2019/3/31 11:56
 */

//首页
const Home = r => require.ensure([], () => r(require('../components/home/Home')), 'home');

//文集
const Article = r => require.ensure([], () => r(require('../components/article/Article')), 'article');
const ArticleDetail = r => require.ensure([], () => r(require('../components/article/ArticleDetail')), 'article');

//娱乐
const Amusement = r => require.ensure([], () => r(require('../components/amusement/Amusement')), 'amusement');

//关于
const About = r => require.ensure([], () => r(require('../components/about/About')), 'about');


export const routes = [
    {path: '/', name: 'home', component: Home, meta: {title: '哈希空间-TSY的个人空间'}},
    {path: '/article', name: 'article', component: Article, meta: {title: '哈希空间-TSY的个人空间'}},
    {path: '/article/detail', name: 'articleDetail', component: ArticleDetail, meta: {title: '哈希空间-TSY的个人空间'}},
    {path: '/amusement', name: 'amusement', component: Amusement, meta: {title: 'TSY的娱乐时间'}},
    {path: '/about', name: 'about', component: About, meta: {title: '关于我'}},
]
