<template>
  <div id="app">
    <div id="header">
      <img src="./assets/image/rz.png">
      <div id="nav-main">
        <img src="./assets/image/t_actionbar_music_normal.png">
        <img src="./assets/image/t_actionbar_discover_selected.png">
        <img src="./assets/image/t_actionbar_video_normal.png">
      </div>
      <img src="./assets/image/sj.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus">
#app
  width 100vw
  height 100vh
#header
  position fixed
  top 0
  width 100%
  height 120px
  background: #D43C33;
  &>img
    position absolute
    top 50%
    transform translate(0, -50%)
    height 60px
    &:nth-of-type(1)
      left 20px
      ^[0]>img:nth-of-type(2)
        right 20px
#nav-main
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  height 90px
  &>img
    height 90px
</style>
