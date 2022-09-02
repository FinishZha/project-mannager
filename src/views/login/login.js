import {message} from "ant-design-vue";
import { TEST_USER } from '@/config/setting.js'

const loginCheck = function (form){
    if (typeof form == 'undefined') {
        message.error('账号密码为空')
    }else {
        return form.username === TEST_USER.username && form.password === TEST_USER.password
    }
}

//登录次数检测
const loginTimeObserve = function (){
    let time = 0
}

//登录前缀事件
export const beforeLogin = function (way,form) {
    console.log(way, form)
    //检测登录的方式
    if (way === 0) {
        // message.info('使用账号登录中')
        // console.log(form)
        console.log('loginCheck(form)',loginCheck(form))
        return loginCheck(form)
    }else if(way === 1){
        message.info('扫码登录')
    }
}




