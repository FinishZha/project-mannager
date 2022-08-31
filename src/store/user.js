import { defineStore } from 'pinia' 
export const useStore = defineStore('main', {
    // other options...
    state: () => ({ 
        count: 0, 
        name: 'Eduardo'
    }),
    getters:{
        doubleCount: (state) => state.count * 2,
    },
    actions:{
        
    },
    persist:{
        enabled: true,
        strategies:{
            key:'USER',
            storage:localStorage,
            paths:['count', 'name']
        }
    }
  })