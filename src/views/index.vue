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
    <router-view @componentChange="componentChange" @songListDetails="songListDetails"></router-view>
    <songListDetail v-if="songListDetail.show" @close="songListDetailClose" :songListItem="songListItem" :detail="songListDetail.msg"></songListDetail>
  </div>
</template>

<script>
import songListDetail from "../components/songListDetail.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "index",
  data() {
    return {
      toRouter: "",
      routers: ["/index/recommend", "/index/friend", "/index/radio"],
      banner: {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      },
      songListDetail: {
        //歌单详情显示与否
        show: false,
        msg: {
          pandect: [],
          state: null
        }
      }
    };
  },
  components: {
    songListDetail
  },
  computed: {
    routerCurrent() {
      return this.$router.history.current.path;
    },
    // songListItem() {
    //   //命名空间中的state
    //   return this.$store.state.songListDetailState.songListState;
    // },
    ...mapState("songListDetailState", { songListItem: "songListState" })
  },
  methods: {
    ...mapActions("songListDetailState", ["getSongState"]),
    songListDetails(data) {
      this.songListDetail.show = true;
      //获取promise对象来判断什么时候渲染歌单列表
      this.songListDetail.state = this.getSongState(data);
      this.songListDetail.pandect = data;
    },
    songListDetailClose() {
      this.songListDetail.show = false;
    },
    toTouchstart(ev) {
      var thefinger = ev.touches[0];
      this.banner.startX = thefinger.clientX;
      this.banner.startY = thefinger.clientY;
    },
    toTouchmove(ev) {
      //获取手指
      var thefinger = ev.touches[0];
      this.banner.endX = thefinger.clientX;
      this.banner.endY = thefinger.clientY;
    },
    toTouchend() {
      let current = this.$router.history.current.path;
      if (Math.abs(this.banner.startY - this.banner.endY) > 100) {
        return;
      }
      if (
        this.banner.startX - this.banner.endX > window.innerWidth / 3 &&
        current === "/index/recommend"
      ) {
        this.$router.push("/index/radio");
      } else if (
        this.banner.endX - this.banner.startX > window.innerWidth / 3 &&
        current === "/index/radio"
      ) {
        this.$router.push("/index/recommend");
      }
      this.banner.startX = 0;
      this.banner.startY = 0;
      this.banner.endX = 0;
      this.banner.endy = 0;
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
