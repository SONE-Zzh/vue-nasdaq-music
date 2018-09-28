<template>
  <ul id="index-nav-button">
    <li v-for="(data, index) in imgUrl" :key="index">
      <div class="nav-button-bg">
        <img :src="data.url" :alt="data.title">
        <span class="nowDate" v-if="data.title === '每日推荐'">{{ nowDate }}</span>
      </div>
      <span>{{ data.title }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "index-nav-button",
  data() {
    return {
      imgUrl: [
        {
          url: require("../assets/image/t_dragonball_icn_fm.png"),
          title: "私人FM"
        },
        {
          url: require("../assets/image/t_dragonball_icn_daily.png"),
          title: "每日推荐"
        },
        {
          url: require("../assets/image/t_dragonball_icn_playlist.png"),
          title: "歌单"
        },
        {
          url: require("../assets/image/t_dragonball_icn_rank.png"),
          title: "排行榜"
        }
      ],
      nowDate: new Date().getDate()
    };
  }
};
</script>
<style lang="stylus">
#index-nav-button
  padding 30px 0
  margin 0
  display flex
  justify-content space-around
  border-bottom 1px solid rgba(0,0,0,.1)
  &>li
    list-style-type none
    text-align center
    font-size 25px
    flex  1
    &>div
      position relative
      background #D43C33
      border-radius 50%
      margin 0 auto 
      margin-bottom 20px
      width 100px
      height 100px
      &>img 
        width 100%
        height 100%
.nowDate
  position absolute 
  top 50%
  left 50%
  transform translate(-50%, -30%)
  color rgba(255,255,255,.7)
</style>
