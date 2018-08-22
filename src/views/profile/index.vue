<template>
    <div class="profile-container">
       <div class="header">
          个人中心
      </div>

      <div class="item-list">
        <div class="image-item">
          <div class="label">头像</div>
          <div class="right-item">
            <img src="../../assets/images/head.jpg" alt="">
            <i class="iconfont icon-right"></i>
          </div>
        </div>

        <div class="tip-item">
            <div class="label">性别</div>
            <div class="right-item">
              <span>请选择性别</span>
              <i class="iconfont icon-right"></i>
            </div>
        </div>

        <div class="tip-item">
            <div class="label">联系方式</div>
            <div class="right-item">
              <span>请完善联系电话</span>
              <i class="iconfont icon-right"></i>
            </div>
        </div>

      </div>

      <div class="btn-wrapper">
          <div class="btn">退出登录</div>
      </div>

    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {

    },
    methods:{

    }
  }
</script>

<style lang='scss' scoped>
  .profile-container{
    .header{
    background:linear-gradient(90deg, rgb(231, 86, 142), #ff696b);
    padding: 4vw;
    color: #fff;
    text-align: center;
  }

  .item-list{
    width: 100%;
    color: #777;
    font-size: 4vw;
    .image-item{
      padding: 1vw 4vw;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e4e4e4;
            box-sizing: border-box;
      .label{
        display: flex;
        align-items: center;
      }
      .right-item{
        display: flex;
        align-items: center;
        img{
          width: 8.5vw;
          height: 8.5vw;
          border: 5px solid #e4e4e4;
          border-radius: 8vw;
        }
        .icon-right{
          font-size: 5.5vw;
        }
      }
    }

    .tip-item{
      width: 100%;
      padding: 2vw 4vw;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      border-bottom: 1px solid #e4e4e4;
      .label{
        display: flex;
        align-items: center;
      }
      .right-item{
        display: flex;
        align-items: center;
        img{
          width: 8vw;
          height: 8vw;
          border: 5px solid #e4e4e4;
          border-radius: 8vw;
        }
        .icon-right{
          font-size: 5.5vw;
        }
      }

    }
  }

  }


.btn-wrapper{
  text-align: center;
  width: 100vw;
  margin-top: 10vw;
  display: flex;
  justify-content: center;
  .btn{
    display: inline-block;
    width: 40vw;
    height: 10vw;
    background-color: #e4e4e4;
    border-radius: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    font-size: 4vw;
  }
}

</style>