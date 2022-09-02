import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
    // other options...
    state: () => ({
        USER_STATE: 0,
        USER_LOGIN_TIME:0
    }),
    getters:{

    },
    actions:{
        USER_LOGIN_CHANGE(val){
            if(val){
                this.USER_STATE = 1
                this.USER_LOGIN_TIME = 0
            }else {
                this.USER_LOGIN_TIME += 1
            }
        },
        LOGIN_OUT(){
            this.USER_LOGIN_TIME = 0
            this.USER_STATE = 0
        }
  },
    persist:{
        enabled: false,
        strategies:{
            key:'USER',
            storage:localStorage,
            paths:['USER_STATE']
        }
    }
})
