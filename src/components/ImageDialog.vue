<template>
  <div class="image-dialog">
    <button class="image-dialog-trigger" type="button" @click="showDialog">
     <img :style="{borderRadius:(radius)+'px'}" class="image-dialog-thumb" ref="thumb" :src="thumb"/></button>
    <transition name="dialog" @enter="enter" @leave="leave">
      <div @click="hideDialog" class="image-dialog-background" v-show="appearedDialog" ref="dialog">
        
        <button v-if="true" class="image-dialog-close" type="button" @click="hideDialog" aria-label="Close"></button>
        <img @click.stop="()=>{}" class="image-dialog-animate" ref="animate" :class="{ loading: !loaded }" :src="loaded ? full : thumb"/>
        <img @click.stop="()=>{}" class="image-dialog-full" ref="full" :src="appearedDialog && full" :width="fullWidth" :height="fullHeight" @load="onLoadFull"/>
      
      </div>
    </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    thumb: String,
    full: String,
    radius:Number,
    maxWidth:{
        type: Number,
        required: false,
        default:0
    },
     maxHeight:{
        type: Number,
        required: false,
        default:0
    }
  },

  data() {
    return {
      loaded: false,
      appearedDialog: false,
      fullWidth: 0,
      fullHeight: 0,

    };
  },
  created(){
      this.fullWidth=window.screen.width;
      this.fullHeight=window.screen.height;
  },
  mounted(){


  },
  methods: {
    getImgNaturalDimensions(oImg, callback) {
      var nWidth, nHeight;
      if (!oImg.naturalWidth) {
        // 现代浏览器

        nWidth = oImg.naturalWidth;
        nHeight = oImg.naturalHeight;
        callback({ w: nWidth, h: nHeight });
      } else {
        // IE6/7/8
        var nImg = new Image();

        nImg.onload = function() {
          var nWidth = nImg.width,
            nHeight = nImg.height;
          callback({ w: nWidth, h: nHeight });
        };
        nImg.src = oImg.src;
      }
    },
    showDialog() {
    const thumb = this.$refs.thumb;
    this.getImgNaturalDimensions(thumb,(dimension)=>{
        console.log(dimension);
        if(dimension.w>dimension.h){
            this.fullHeight=(dimension.h/dimension.w)*this.fullWidth;
        }else{
            this.fullWidth=(dimension.w/dimension.h)*this.fullHeight;
        }
        //判断最大允许宽度
        if(this.maxWidth && this.maxWidth>0 && this.fullWidth>this.maxWidth){
          this.fullWidth=this.maxWidth;
          this.fullHeight=(dimension.h/dimension.w)*this.fullWidth;
        }

        //判断最大允许高度
        if(this.maxHeight && this.maxHeight>0 && this.fullHeight>this.maxHeight){
          this.fullHeight=this.maxHeight;
          this.fullWidth=(dimension.w/dimension.h)*this.fullHeight;
        }
        
    });

      this.appearedDialog = true;
    },

    hideDialog() {
      this.appearedDialog = false;
    },

    enter() {
      this.animateImage(this.$refs.thumb, this.$refs.full);
    },

    leave() {
      this.animateImage(this.$refs.full, this.$refs.thumb);
    },

    onLoadFull() {
      this.loaded = true;
    },

    animateImage(startEl, destEl) {
      const start = this.getBoundForDialog(startEl);
      this.setStart(start);

      //console.log("animateImage");
      //console.log(start);


      this.$nextTick(() => {
        const dest = this.getBoundForDialog(destEl);
        this.setDestination(start, {
          top: dest.top,
          left: dest.left,
          width: dest.width || this.fullWidth,
          height: dest.height || this.fullHeight
        });
      });
    },

    getBoundForDialog(el) {
      const bound = el.getBoundingClientRect();
      console.log(bound);
      const dialog = this.$refs.dialog;
      return {
        top: bound.top + dialog.scrollTop,
        left: bound.left + dialog.scrollLeft,
        width: bound.width,
        height: bound.height
      };
    },

    setStart(start) {
      const el = this.$refs.animate;
      el.style.left = start.left + "px";
      el.style.top = start.top + "px";
      el.style.width = start.width + "px";
      el.style.height = start.height + "px";
      el.style.transitionDuration = "0s";
      el.style.transform = "";
    },

    setDestination(start, dest) {
      const el = this.$refs.animate;
      el.style.transitionDuration = "";

      const translate = `translate(${dest.left - start.left}px, ${dest.top -
        start.top}px)`;
      const scale = `scale(${dest.width / start.width}, ${dest.height /
        start.height})`;
      el.style.transform = `${translate} ${scale}`;
    }
  }
};
</script>

<style lang='scss' scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
.image-dialog {
  width: 100%;
  height: 100%;
  .image-dialog-trigger {
    width: 100%;
    height: 100%;
  }
}
.image-dialog-thumb{
    object-fit: cover;
}
.image-dialog-trigger {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}
.image-dialog-close {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-transition: 300ms ease-out;
  transition: 300ms ease-out;
  outline: none;
}
.image-dialog-close::before,
.image-dialog-close::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -0.5px;
  margin-left: -20px;
  width: 30px;
  height: 1px;
  background-color: #000;
}
.image-dialog-close::before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.image-dialog-close::after {
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.image-dialog-close:hover {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
.image-dialog-background {
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-dialog-animate {
  display: none;
  position: absolute;
  -webkit-transform-origin: left top;
  transform-origin: left top;
}
.image-dialog-animate.loading {
  display: block;
}

.dialog-enter-active,
.dialog-leave-active {
  -webkit-transition: background-color 300ms ease-out;
  transition: background-color 300ms ease-out;
}
.dialog-enter,
.dialog-leave-to {
  background-color: rgba(255, 255, 255, 0);
}
.dialog-enter-active .image-dialog-animate,
.dialog-leave-active .image-dialog-animate {
  display: block;
  -webkit-transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
  transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
  transition: transform 300ms cubic-bezier(1, 0, 0.7, 1);
  transition: transform 300ms cubic-bezier(1, 0, 0.7, 1),
    -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
}
.dialog-enter-active .image-dialog-full,
.dialog-leave-active .image-dialog-full {
  visibility: hidden;
}
.image-dialog-trigger img {
  width: 100%;
  height: 100%;
}
</style>