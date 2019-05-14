/**
 * @Description:
 * @Author:         TSY
 * @Email:          t@tsy6.com
 * @CreateDate:     2019/3/31 11:56
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from './http'
import Qs from 'qs'
//通过配置router参数，设置页面标题
import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle)

//引入百度统计插件
import ba from 'vue-ba'

Vue.use(ba, 'b0668f30d62e1597bdb36d05edea8960')


import {imageIsExist} from "./utils/util";

//关闭生产模式下给出的提示
Vue.config.productionTip = false

//普通axios请求
Vue.prototype.$axios = (method, url, params) => {
    return new Promise((resolve, reject) => {
            axios({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: method || 'post',
                url: url,
                data: Qs.stringify(params),
                withCredentials: true
            }).then(function (data) {
                resolve(data.data)
            }).catch(function (err) {
                reject(err);
                console.log(err);
                console.log({position: 'bottom', message: '网络错误，请稍后再试！'});
            })
        }
    )
};
//axios上传文件
Vue.prototype.$axiosUpload = (url, params, callback) => {
    let param = new FormData(); // 创建form对象
    if (params.filename) {
        param.append('filename', params.filename);
    } else {
        param.append('file', params.file); // 通过append向form对象添加数据
        param.append('fileName', params.fileName); // 通过append向form对象添加数据
    }
    param.append('webHost', params.webHost); // 通过append向form对象添加数据
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    }// 添加请求头
    axios.post(url, param, config)
        .then(response => {
            callback(response.data)
        }).catch(err => {
        console.log(err);
    })
};

//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('default-img', async function (el, binding) {
    let imgURL = binding.value;//获取图片地址
    if (imgURL) {
        let exist = await imageIsExist(imgURL);
        if (exist) {
            el.setAttribute('src', imgURL);
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
