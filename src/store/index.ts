import { createStore } from 'vuex'

export default createStore({
  state(){
    return {
      //视图模式
      mode:'view' as string,
      //
      list:[] as Array<Object>,
    }
  },
  mutations: {
    changStateMode(state:{mode:string},value:string){
      state.mode=value
    }
  },
  actions: {
  },
  modules: {
  }
})
