<template>
    <div class="news-container">
        <Header title="详情页"/>
        <div :key="item" v-for="item in 1" class="new-list">
            <div class="item">
                <div class="img-wrapper">
                    
                        <image-dialog :thumb="imgUrl" :radius="3" :full="imgUrl" :maxWidth="500"></image-dialog>
                        <img v-if="false" @click="changeShow" src="http://data618.oss-cn-qingdao.aliyuncs.com/ys/3524/img/b.jpg" alt="">
                </div>
                <div class="right-content">
                    <div class="title">
                        标题
                    </div>
                    <div class="desc">
                        <span class="label">人民日报</span>
                        <span class="update-date">2018-08-20</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import ImageDialog from '../../components/ImageDialog.vue';
    import Header from '../../components/Header.vue'
  export default {
      components:{
          ImageDialog,
          Header
      },
    data () {
      return {
          show:false,
          imgUrl:"http://data618.oss-cn-qingdao.aliyuncs.com/ys/3524/img/b.jpg"
      }
    },
    created () {
    },
    mounted () {

    },
    methods:{
        changeShow(){
            this.show=!this.show;
        }
    }
  }
</script>

<style lang='scss' scoped>
    .news-container{
        width: 100%;

        .new-list{
            margin-bottom: 2vw;
            padding: 4vw;
            .item{
                display: flex;
                
                align-items: center;
                .img-wrapper{
                    width: 20vw;
                    height: 20vw;
                    
                }
                img{
                    width: 20vw;
                    height: 20vw;
                    object-fit: cover;

                    transition: width 2s;
                    -moz-transition: width 2s; /* Firefox 4 */
                    -webkit-transition: width 2s; /* Safari 和 Chrome */
                    -o-transition: width 2s; /* Opera */
                }
                
                .img-pre{
                    position: fixed;
                    left: 0;
                    right: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: #777;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: auto;
                        height: auto;
                        max-height: 100vh;
                        max-width: 100vw;
                    }
                }

                .right-content{
                    padding-left: 2vw;
                    width: 70vw;
                    min-height: 18vw;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .title{
                        color: #777;
                    }
                    .desc{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .label{
                            font-size: 3.6vw;
                             color: #777;
                        }
                        .update-date{
                            font-size: 3.4vw;
                            color: #999;

                        }
                    }
                }
            }
        }

    }
</style>