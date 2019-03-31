/**
 * @Description:    路由列表
 * @Author:         TSY
 * @Email:          t@tsy6.com
 * @CreateDate:     2019/3/31 11:56
 */

//首页
const Home = r => require.ensure([], () => r(require('../components/home/Home')), 'home');


export const routes = [
    {path: '/', name: 'home', component: Home, meta: {title: '哈希空间-TSY的个人空间'}}
]
