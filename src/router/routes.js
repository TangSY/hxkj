/**
 * @Description:    路由列表
 * @Author:         TSY
 * @Email:          t@tsy6.com
 * @CreateDate:     2019/3/31 11:56
 */

//首页
const home = r => require.ensure([], () => r(require('../components/home')), 'home');

//文集
const article = r => require.ensure([], () => r(require('../components/article')), 'article');
const articleDetail = r => require.ensure([], () => r(require('../components/article/articleDetail')), 'article');

//娱乐
const collect = r => require.ensure([], () => r(require('../components/collect')), 'collect');

//娱乐
const amusement = r => require.ensure([], () => r(require('../components/amusement')), 'amusement');

//关于
const about = r => require.ensure([], () => r(require('../components/about')), 'about');


export const routes = [
    {path: '/', name: 'home', component: home, meta: {title: '哈希空间_HashTang的个人空间-唐士瀛(TSY)'}},
    {path: '/article', name: 'article', component: article, meta: {title: '哈希空间_HashTang的个人空间-唐士瀛(TSY)'}},
    {path: '/article/detail', name: 'articleDetail', component: articleDetail, meta: {title: '哈希空间_HashTang的个人空间-唐士瀛(TSY)'}},
    {path: '/amusement', name: 'amusement', component: amusement, meta: {title: 'HashTang的娱乐空间'}},
    {path: '/collect', name: 'collect', component: collect, meta: {title: 'HashTang的收藏室'}},
    {path: '/about', name: 'about', component: about, meta: {title: '关于我'}},
]
