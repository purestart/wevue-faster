<template lang="html">
  <nav>
    <ul class="has-subcribe">
      <li>
        <router-link :to="{ name: 'home'  }" class="nav" active-class="active">
          <i class="iconfont icon-home"></i>
          <!-- <i class="iconfont icon-home "></i> -->
          <p>首页</p>
        </router-link>
      </li>
      <li >
        <router-link :to="{ name: 'schedule'  }" class="nav" active-class="active">

          <i class="iconfont icon-viewgallery"></i>
          <!-- <i class="iconfont icon-icon_dates_selected"></i> -->
          <p>代办事项</p>
        </router-link>
      </li>
      <li @click="click">
        <router-link :to="{ name: 'profile'  }" class="nav" active-class="active">
          <i class="iconfont icon-gerenzhongxin"></i>
          <!-- <i class="iconfont icon-icon_my_selected"></i> -->
          <p>个人中心</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  /* eslint-disable */
//import Icon from '../components/Icon';
//import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'bottom-nav',
  data() {
    return {
      blah: '/course',
    };
  },
  components: {
    
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    // ...mapActions([
    //   'updateQrCodeIsShow',
    //   'saveUserLog',
    // ]),
    showFocus(){
        //console.log("关注");
        this.updateQrCodeIsShow(true);
    },
    click(){
        console.log("到个人页");
      let params={
        pageUrl:"/profile",
        operatetype:"3",
        node:""
      }
      //this.saveUserLog(params);
    }
  },
};
  /* eslint-disable */
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  color: $pink;
  text-align: center;
  z-index: 998;
  box-shadow: 0 0px 4px rgba(0 ,0,0,.2);
}

ul {
  overflow: hidden;
  list-style: none;
  li {
    float: left;
    width: 50%;
  }

}

ul.has-subcribe {
  overflow: hidden;
  color: $nav-grey;
li {
  float: left;
  width: 33.333%;
  p {
    font-size: 10px;
  }
}

}

a.nav {
  display: flex;
  height: 13.066vw;
  flex-direction: column;
  justify-content: center;
  transition: color .3s ease;
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #bebebe;
    text-decoration: none;
    font-size: 3.7333333vw;

  }
  .iconfont.icon-icon_my_selected{
    font-size: 0;
    margin-bottom: 0px;
  }
  .iconfont.icon-icon_find_selected{
    font-size: 0;
    margin-bottom: 0;
  }
  .iconfont.icon-icon_dates_selected{
    font-size: 0;
    margin-bottom: 0;
  }
  .iconfont.icon-icon_school_selected{
    font-size: 0;
    margin-bottom: 0;
  }

  &.active {
    color: #777;
    .iconfont{
      color: #ff696b;
    }
/*    .iconfont.icon-geren-select{
      font-size: 5.8677vw;
      margin-bottom: 6px;
    }
    .iconfont.icon-planet-empty-select{
      font-size: 5.8677vw;
      margin-bottom: 6px;
    }
    .iconfont.icon-book-select{
      font-size: 5.8677vw;
      margin-bottom: 6px;
    }
    .iconfont.icon-huodong-select{
      font-size: 5.8677vw;
      margin-bottom: 6px;
    }
    .iconfont {
      font-size: 0vw;
      margin-bottom: 0px;
    }*/
  }
  .iconfont {
    font-size: 5.8677vw;
    margin-bottom: 0px;
  }
}

</style>
