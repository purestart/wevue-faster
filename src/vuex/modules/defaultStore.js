/**
 * Created by tanyichao on 2017/3/17.
 */
import userApi from '../../api/demo'

const state = {
  user:{
      id:0,
      nickName:"李四"
  },
  msg: "vuex data",
  header: '',
  Theme: {
    header: true,
    yellowheader: true,
    blueheader: false,
  },
}
const mutations = {
  updateMsg(state, payload) {
    state.msg = payload;
  },
  loadHeader(state, payload) {
    if (payload) {
      state.header = payload;
      window.sessionStorage.setItem('header', payload)
    } else {
      state.header = '菜单管理'
      if (window.sessionStorage.getItem('header')) {
        state.header = window.sessionStorage.getItem('header')
      }
    }
  },
  theme(state, payload) {
    state.Theme.yellowheader = !state.Theme.yellowheader
    state.Theme.blueheader = !state.Theme.blueheader
    window.localStorage.setItem('Theme', JSON.stringify(state.Theme))
  },
  detheme(state, payload) {
    let tmpTheme = JSON.parse(window.localStorage.getItem('Theme'));
    if (tmpTheme) {
      state.Theme = JSON.parse(window.localStorage.getItem('Theme'))
    }
  },
  EditSelect(state, payload) {
    console.log(payload)
    state.editData = payload
  }
}
const actions = {
    fetchCourse({commit, dispatch}, payload = {noShare: false}) {
        //api 请求
        console.log(userApi)
        userApi.getUserList((res) => {
            console.log("success");
            console.log(res);
    
          //commit('updateMsg', "res.data");
    
        }, err => {}, {})
    
        console.log("fetch course");
    
        //提交数据到mutation
    
        // dispatch action
        // dispatch('playAudio', initSecIndex);
    
      },
  ThemeChange({commit, dispatch}, payload = {noShare: false}){
    commit("theme")
  },
  deftheme({commit, dispatch}, payload){
    commit("detheme",payload)
  },
  LoadHeader({commit, dispatch}, payload){
    commit("loadHeader",payload)
  },
  DataEdit({commit, dispatch}, payload){
    commit("EditSelect",payload)
  },
}

export default {
  state,
  actions,
  mutations
}
