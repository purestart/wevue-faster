<template>

    <div class="home-container">
        <div class="header-wraper">
            <!-- <a icon :style="{color:'#ffffff'}" class="head-scanner" name="scanning"></a> -->
            
            <i class="iconfont icon-icon-test head-scanner"></i>
            <img resize="cover" :src="head" class="user-head" />
            <div class="header-name">
                <div >
                    <div class="user-name">{{user.nickName}}</div>
                </div>
                <div>
                    <div class="user-office">所属部门：技术管理部</div>
                </div>
                <div>
                    <div class="user-project">所属项目：中台物料项目</div>
                </div>
            </div>
        </div>
        <div class="tip-bar">
            <div class="msg-wrapper">
                <!-- <wxc-icon name="play"></wxc-icon> -->
                <i class="iconfont icon-speaker-5"></i>
                <div class="msg">【消息提醒】通知内</div>
            </div>
           <i class="iconfont icon-right"></i>
            <!-- <wxc-icon :style="{color:'#a0a0a0'}" name="more"></wxc-icon> -->
        </div>
        <div class="division"></div>
        <div class="tab-box">
            <div class="flex-list">
                <div @click="toDetail" class="flex-item">
                    <!-- <img resize="cover" :src="tabimg" class="tab-img" /> -->
                    <i class="iconfont icon-all"></i>
                    <div class="tab-title">入库</div>
                </div>
                <div class="flex-item">
                    <i class="iconfont icon-viewlist"></i>
                    <div class="tab-title">出库</div>
                </div>
                <div class="flex-item">
                    <i class="iconfont icon-delete"></i>
                    <div class="tab-title">减损/报废</div>
                </div>
                <div class="flex-item">
                    <i class="iconfont icon-map"></i>
                    <div class="tab-title">车辆管理</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script type='div/ecmascript-6'>
  import { mapActions, mapState } from "vuex";
  export default {
    data () {
      return {
          head:"http://onf2hckia.bkt.clouddn.com/forum_head.jpg",
          tabimg:"https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      }
    },
    components:{},
    computed:{
        ...mapState({
                user:state=>state.default.user,
            }),
    },
    created () {
    },
    mounted () {
        this.fetchCourse();
    },
    methods:{
        ...mapActions(["fetchCourse"]),
        toDetail(){
            this.$router.push({name:'news'})
        }
    }
  }
</script>

<style lang='scss' scoped>
    .icon-gray{
      color: #fff;
    }
    .iconfont.head-scanner{
        position: absolute;
        right: 5vw;
        top: 5vw;
        color: #ffffff;
        font-size: 8vw;
    }
    .tab-title{
        margin-top: 1vw;
        font-size: 3.8vw;
        color: #666666;
    }
    .tab-img{
        width: 10vw;
        height: 10vw;
    }
    .flex-list{
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
    }
    .flex-item{
        width: 33.333vw;
        height: 33.333vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        box-sizing: border-box;
        /* border-style:solid;
        border-right-width:1px;
        border-bottom-width:1px;
        border-color:#e4e4e4; */
        .iconfont{
            color: #666;
            font-size: 8vw;
        }
    }
    .tip-bar{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 3vw 4vw;
        box-sizing: border-box;
        .iconfont{
            font-size: 4.5vw;
        }
    }
    .msg-wrapper{
        flex-direction: row;
        align-items: center;
        display: flex;
        color: #777;
        font-size: 3.6vw;
    }
    .division{
        width: 100vw;
        height: 10px;
        background-color: #f0f0f0;
    }
    .bar-ic{
        font-size: 4vw;
    }
    .home-container{
        width: 100vw;
    }
    .header-wraper{
        flex-direction: row;
        align-items: center;
        background:linear-gradient(90deg, rgb(231, 86, 142), #ff696b);
        
        padding: 5vw;
        display: flex;
        /* position: relative; */
    }
    .header-name{
        margin-left: 4vw;
        
    }
    .user-head{
        width: 15vw;
        height: 15vw;
        border-radius: 15vw;
        border-style:solid;
        border-width:5px;
        border-color:#e4e4e4;
    }
    .user-name{
        font-size: 5vw;
        color: #ffffff;
    }
    .user-office{
        color: #ffffff;
        margin-top: 1vw;
        font-size: 3.4vw;
    }
    .user-project{
        color: #ffffff;
        margin-top: 1vw;
        font-size: 3.4vw;
    }
</style>