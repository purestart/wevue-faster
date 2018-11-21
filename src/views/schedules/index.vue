<template>
    <div class="schedule-container">
      <div class="header">
          代办事项
      </div>
      <div class="search-box">

        <SearchBar :onChange="onChange" :onSearch="onSearch">
          <div class="hot-wrapper">
            <div class="tip">热门搜索</div>
            <div class="label-wraper">
              <div class="label">SearchBar</div>
              <div class="label">前端Vue学习</div>
              <div class="label">redis缓存</div>
              <div class="label">组件开发</div>
              <div class="label">react组件</div>
            </div>
            <div class="search-list">
                <div v-for="item in reslist" class="list-item">
                    <div class="left-item">
                      <i class="iconfont icon-search1187938easyiconnet"></i>
                      <span>{{item}}</span>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
          </div>
        </SearchBar>

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
import SearchBar from '../../components/SearchBar'
export default {
  components:{
    SearchBar
  },
  data() {
    return {
      imgUrl:"http://data618.oss-cn-qingdao.aliyuncs.com/ys/3524/img/b.jpg",
      reslist:["如何创建一个Vue组件","Vue的生命周期",'Vue路由'],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSearch(key){
      console.log("onSearch");
      //alert("跳转搜索");
      console.log(key);
    },
    onChange(value){
      console.log(value);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/styles/variables.scss";
.header {
  background: linear-gradient(90deg, rgb(231, 86, 142), #ff696b);
  padding: 4vw;
  color: #fff;
  text-align: center;
  font-size: vw(16);
}

.search-box{

  .hot-wrapper{
    text-align: left;
    .tip{
      padding: 4vw;
      text-align: left;
      font-size: 3.0vw;
      color: #999999;
    }
    .label-wraper{
      display: flex;
      flex-wrap: wrap;
      padding:0 4vw;
      border-bottom:1px solid #e4e4e4;

      .label{
        padding: 0.8vw 2vw;
        border-radius: 1vw;
        background-color: #efefef;
        font-size: 3.4vw;
        margin-bottom: 4vw;
        margin-right: 2vw;
        color: #666;
      }
    }
    .search-list{
      color: #555;
      .list-item{
        display: flex;
        align-items: center;
        padding: 4vw;
        border-bottom: 1px solid #e4e4e4;
        font-size: 3.6vw;
        &:active{
          background-color: #efeff4;
        }
        .list-item{
          display: flex;
          align-items: center;
          
        }
      }
    }
  }

}


.list-wrapper {
  width: 100vw;
  font-size: 3.6vw;
  color: #777;

  .list-item {
    width: 100vw;
    box-sizing: border-box;
    .division {
      width: 100vw;
      height: 5px;
      background-color: #e4e4e4;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e4e4e4;
      padding: 3vw 4vw;
      .date {
        display: flex;
        align-items: center;
      }
      .detail-btn {
        display: inline-block;
        padding: 1.2vw 5vw;
        border: 1px solid #ff696b;
        border-radius: 10vw;
        color: #ff696b;
        font-size: 3.6vw;
      }
    }

    .item-content {
      padding: 4vw 4vw;
      border-bottom: 1px solid #e4e4e4;
      font-size: 3.6vw;
      .label-wraper {
        display: flex;
        margin-top: 2vw;
        .label-left {
          flex: 1;
        }
        .label-right {
          flex: 1;
        }
      }
    }

    .item-footer {
      display: flex;
      justify-content: flex-end;
      padding: 2vw 4vw;
      border-bottom: 1px solid #e4e4e4;
      .back-btn {
        display: inline-block;
        padding: 1vw 6vw;
        background-color: #e4e4e4;
        border-radius: 10vw;
        color: #777;
      }
      .pass-btn {
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