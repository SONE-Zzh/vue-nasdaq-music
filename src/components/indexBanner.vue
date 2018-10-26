<template>
  <div id="commend-banner">
    <ul id="banner" :class="{transition: isTransition}" @touchstart.stop="stop" @touchend.stop="autoPlay">
      <li v-for="(data, index) in bannerImgSrc" :key="index">
        <img :src="data.imageUrl">
      </li>
    </ul>
    <ul id="dot-list">
      <li v-for="num in bannerImgSrc.length" :key="num" :class="{active: dotClass[num - 1]}" @click="dotClick(num - 1);"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "commendBanner",
  data() {
    return {
      mark: 0,
      timer: null,
      moveTime: 6000,
      isTransition: true
    };
  },
  computed: {
    bannerImgSrc() {
      return this.$store.state.bannerImgsrc;
    },
    bannerBox() {
      return this.$el.children[0];
    },
    ulWidth() {
      return getComputedStyle(this.bannerBox).width;
    },
    moveWidth() {
      return parseInt(this.ulWidth) / 8;
    },
    left() {
      return parseInt(getComputedStyle(this.bannerBox).left);
    },
    dotClass() {
      return Array.apply(null, Array(this.bannerImgSrc.length)).map(
        (value, index) => {
          if (this.mark === index) {
            return true;
          }
          return false;
        }
      );
    }
  },
  mounted() {
    this.$store.dispatch("getBannerImgsrc");
  },
  created() {
    this.autoPlay();
  },
  methods: {
    autoPlay() {
      this.timer = setInterval(() => {
        this.mark++;
        if (this.mark > 7) {
          this.mark = 0;
        }
        this.play();
      }, this.moveTime);
    },
    play() {
      this.bannerBox.style.left =
        this.left + this.moveWidth * -this.mark + "px";
    },
    stop() {
      clearInterval(this.timer);
    },
    dotClick(index) {
      if (this.mark === index) return;
      this.mark = index;
      this.play();
    }
  }
};
</script>
<style lang="stylus">
#commend-banner
  position relative
  width 100%
  height 262px
  overflow hidden
  background linear-gradient(to bottom,#D43C33 70%,#fff 0)
  #banner
    position absolute
    top 0
    bottom 0
    padding 0
    margin 0
    width calc(8 * 10rem)
    overflow hidden
    &>li
      float left
      list-style none
      width 10rem
      &>img 
        display block
        margin auto
        border-radius 10px
        width 94%
#banner.transition
  transition all .2s linear
#dot-list
  position absolute
  bottom 5px
  left 50%
  transform translate(-50%,0)
  padding 0
  margin 0
  &>li
    display inline-block
    margin 0 5px
    width 10px
    height 10px
    list-style-type none
    border-radius 50%
    background rgba(0,0,0,.4)
    &.active
      background rgba(255,255,255,.7)

</style>
