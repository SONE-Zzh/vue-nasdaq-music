<template>
  <ul id="index-nav-button">
    <li v-for="(data, index) in imgUrl" :key="index">
      <img :src="data.url" :alt="data.title">
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
      ]
    }
  }
}
</script>
<style lang="stylus">
#index-nav-button
  padding 0
  &>li
    list-style-type none
</style>


