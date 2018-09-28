<template>
  <div id="index" @touchstart="toTouchstart" @touchmove="toTouchmove" @touchend="toTouchend">
    <div id="index-nav" @touchstart.stop @touchmove.stop @touchend.stop>
      <router-link to="/index/recommend" :class="{active: routers[0] === toRouter}">
        推荐
        <span v-if="routers[0] === toRouter" class="active"></span>
      </router-link>
      <router-link to="/index/friend" :class="{active: routers[1] === toRouter}">
        朋友
        <span v-if="routers[1] === toRouter" class="active"></span>
      </router-link>
      <router-link to="/index/radio" :class="{active: routers[2] === toRouter}">
        电台
        <span v-if="routers[2] === toRouter" class="active"></span>
      </router-link>
    </div>
    <router-view @componentChange="componentChange"></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      toRouter: "",
      routers: ["/index/recommend", "/index/friend", "/index/radio"],
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    }
  },
  computed: {
    routerCurrent() {
      return this.$router.history.current.path;
    }
  },
  methods: {
    toTouchstart(ev) {
     var thefinger = ev.touches[0];
     this.startX = thefinger.clientX;
     this.startY = thefinger.clientY;
    },
    toTouchmove(ev) {
      //获取手指
      var thefinger = ev.touches[0];
      this.endX = thefinger.clientX;
      this.endY = thefinger.clientY;
    },
    toTouchend() {
      let current = this.$router.history.current.path;
      if (Math.abs(this.startY - this.endY) > 100){
        return;
      }
      if (this.startX > this.endX && current === "/index/recommend") {
        this.$router.push("/index/radio");
      } else if(this.startX < this.endX && current === "/index/radio") {
        this.$router.push("/index/recommend");
      }
      this.startX = 0;
      this.startY = 0;
      this.endX = 0;
      this.endy = 0;
    },
    componentChange(value) {
      //子组件传值渲染
      this.toRouter = value;
    }
  },
  beforeRouteEnter(to, from, next) {
    //组件加载前渲染
    next(vm => {
      vm.toRouter = to.fullPath;
    });
  }
};
</script>
<style lang="stylus">
#index
  position absolute 
  top 120px
  left 0
  right 0
  bottom 100px
  padding-top 70px
  #index-nav
    position fixed
    top 120px
    display flex
    width 10rem
    padding-bottom 30px
    justify-content space-around
    background #D43C33
    z-index 99
    a
      font-size 30px
      color rgba(255,255,255,.7)
      text-decoration none
#index #index-nav a.active
  color #fff
span.active
  position absolute 
  bottom 18px
  width 60px
  height 5px
  background #fff
</style>
