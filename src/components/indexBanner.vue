<template>
  <div id="commend-banner">
    <ul id="banner" @touch="stop()">
      <li v-for="(data, index) in bannerImgSrc" :key="index">
        <img :src="data.picUrl">
      </li>
    </ul>
    <ul id="dot-list">
      <li v-for="num in bannerImgSrc.length" :key="num" @click="dotClick(num - 1);"></li>
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
      moveTime: 8000
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
      return []
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
        if (this.mark > 7) {
          this.mark = 0;
        }
        this.play();
      }, this.moveTime);
    },
    play() {
      this.bannerBox.style.left =
        this.left + this.moveWidth * -this.mark + "px";
      this.mark++;
    },
    stop() {
      clearInterval(this.timer);
      console.log(this.timer);
    },
    dotClick(index) {
      if (this.mark === index) return;
      this.mark = index;
      this.play();
      console.log(index);
    }
  }
};
</script>
<style lang="stylus">
#commend-banner
  position relative
  width 100%
  height 400px
  overflow hidden
  background linear-gradient(to bottom,#D43C33 70%,#fff 0)
  #banner
    position absolute
    top 0
    left 0
    padding 0
    width calc(8 * 10rem)
    overflow hidden
    transition all .5s linear
    &>li
      float left
      list-style none
      width 10rem
      &>img 
        display block
        margin auto
        border-radius 10px
#dot-list
  position absolute
  bottom 0
  left 50%
  transform translate(0,-50%)
  padding 0
  &>li
    display inline-block
    margin 0 5px
    width 10px
    height 10px
    list-style-type none
    border-radius 50%
    background rgba(0,0,0,.4)
</style>
