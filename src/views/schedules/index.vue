<template>
    <div class="schedule-container">
      <div class="header">
          代办事项
      </div>
      <div class="list-wrapper">
        
        <div :key="item" v-for="(item,index) in 6" class="list-item">
            <div :class="index!=0?'division':''"></div>
            <div class="item-header">
              <div class="date">
                2018-08-22
              </div>
              <div class="detail-btn">查看详情</div>
            </div>
            <div class="item-content">
              <div>入库单号：RKOHD84586</div>
              <div class="label-wraper">
                  <div class="label-left">
                    入库物料：晚霜
                  </div>
                  <div class="label-right">
                    数量：共30件
                  </div>
              </div>

              <div class="label-wraper">
                  <div class="label-left">
                    隶属部门：养生用品研发部
                  </div>
                  <div class="label-right">
                    入库库房：1号仓库
                  </div>
              </div>

            </div>
            <div class="item-footer">
                <div class="back-btn">
                  退回
                </div>
                <div class="pass-btn">通过</div>
            </div>
        </div>
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
  .header{
        background:linear-gradient(90deg, rgb(231, 86, 142), #ff696b);
    padding: 4vw;
    color: #fff;
    text-align: center;
  }
.list-wrapper{
  width: 100vw;
  font-size: 3.6vw;
  color: #777;

  .list-item{
    width: 100vw;
    box-sizing: border-box;
    .division{
      width: 100vw;
      height: 5px;
      background-color: #e4e4e4;
    }
    .item-header{
      display: flex;
      justify-content: space-between;
      border-bottom:1px solid #e4e4e4;
      padding: 3vw 4vw;
      .date{
        display: flex;
        align-items: center;
      }
      .detail-btn{
        display: inline-block;
        padding: 1.2vw 5vw;
        border: 1px solid #ff696b;
        border-radius: 10vw;
        color: #ff696b;
        font-size: 3.6vw;
      }

    }

  .item-content{
    padding: 4vw 4vw;
    border-bottom: 1px solid #e4e4e4;
    font-size: 3.6vw;
    .label-wraper{
      display: flex;
      margin-top: 2vw;
      .label-left{
        flex: 1;
      }
      .label-right{
        flex: 1;
      }

    }
  }

  .item-footer{
    display: flex;
    justify-content: flex-end;
    padding: 2vw 4vw;
          border-bottom: 1px solid #e4e4e4;
    .back-btn{
      display: inline-block;
      padding: 1vw 6vw;
      background-color: #e4e4e4;
      border-radius: 10vw;
      color: #777
    }
        .pass-btn{
      display: inline-block;
      padding: 1vw 6vw;
      background-color: #ff696b;
      border-radius: 10vw;
      color: #ffffff;
      margin-left: 3vw;


    }
  }

  }
}
  
</style>