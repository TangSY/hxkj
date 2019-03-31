/**
* @Description:
 * @Author:         TSY
 * @Email:          t@tsy6.com
 * @CreateDate:     2019/3/31 11:56
*/

import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/' : '/tsy';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        //header配置token
        // if (store.state.token) {
        //     config.headers.Authorization = `token ${store.state.token}`
        // }
        return config
    },
    err => {
        return Promise.reject(err)
    },
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面

            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    },
)

export default axios;