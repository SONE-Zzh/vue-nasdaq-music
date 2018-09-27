<template>
  <div id="commend">
    <ul id="commend-banner">
      <li v-for="(data, index) in bannerImgSrc" :key="index">
        <img :src="data.picUrl">
      </li>
    </ul>
    <ul id="dot-list">
      <li v-for="num in bannerImgSrc.length" :key="num"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "commendBanner",
  // data(){
  //   // let bannerBox = this.$el.children[0];
  //   setTimeout(() => {
  //     console.log(this)
  //   })
  //   return {
  //     // bannerBox
  //   }
  // },
  computed: {
    bannerImgSrc(){
      return this.$store.state.bannerImgsrc;
    },
    bannerBox(){
      return this.$el.children[0];
    }
  },
  mounted(){
    this.$store.dispatch("getBannerImgsrc");
  },
  created(){
    this.autoPlay();
  },
  methods: {
    autoPlay(){
      let ulWidth = this;
      setTimeout(() => {
        this.play();
      }, 100);
    },
    play(){
      console.log(this.bannerBox.getComputedStyle("width"));
    },
    move(){
      console.log(this.bannerBox);
    }
  }
};
</script>
<style lang="stylus">
#commend
  position relative
  width 100%
  overflow hidden
  background linear-gradient(to bottom,#D43C33 80%,#fff 0)
  #commend-banner
    padding 0
    width calc(8 * 10rem)
    overflow hidden
    &>li
      float left
      list-style none
      width 10rem
      &>img 
        display block
        margin auto
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
