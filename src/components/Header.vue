<template>
    <div class="header-container">
        <div @click="goBack" class="back-bt">
            <i class="iconfont icon-back"></i>
            返回
        </div>
        <div class="title">
            {{title}}
        </div>
        <div class="right-bt">
            目录
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props:["title"],
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {

    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
  }
</script>

<style lang='scss' scoped>
    .header-container{
        display: flex;
        align-content: center;
        background:linear-gradient(90deg, rgb(231, 86, 142), #ff696b);
        padding: 4vw;
        align-items: center;
        .back-bt{
            flex: 1;
            color: #ffffff;
            font-size: 3.6vw;
            display: flex;
            align-items: center;
            .icon-back{
                font-size: 5.5vw;
            }
        }

        .title{
            flex: 4;
            color: #ffffff;
            text-align: center;
        }

        .right-bt{
            flex: 1;
            color: #ffffff;
            text-align: right;
        }
    }
</style>