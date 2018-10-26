<template>
  <div id="song-list-detail">
    <div id="detail-title">
      <span id="caret" @click="$emit('close')"></span>
      <span id="title">歌单</span>
      <ul id="menu">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div id="detail-content">
      <div id="search">
        <div id="search-fake">
          <img src="../assets/image/a7j.png">
          <span>搜索歌单内歌曲</span>
        </div>
      </div>
      <div id="detail-head">
        
      </div>
      <div id="detail-body">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "songListDetail",
  props: ["songListItem", "detail"]
};
</script>
<style lang="stylus">
#song-list-detail
  position fixed
  top 0
  width 100vw
  height 100vh
  z-index 999
  #detail-title
    display flex
    align-items center
    position absolute
    top 0
    width 100%
    height 80px
    background #282C34
    z-index 999
    span,ul
      display inline-block
      position absolute 
    #caret
      width 30px
      height 30px
      left 35px
      &::before
        content ""
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        border 2px solid #ffffff
        border-right-width 0
        border-bottom-width 0
        transform rotate(-45deg)
    #title
      top 50%
      left 50%
      transform translate(-50%, -50%)
      color #ffffff
      font-size 32px
      letter-spacing 5px
      height 50px
      margin -3px 0 0 0
      line-height 50px
    #menu
      top 50%
      right 35px
      padding 0
      margin 0
      transform translate(0, -50%)
      li
        width 8px
        height 8px
        background #ffffff
        border-radius 50%
        float left
        margin 0 5px
        list-style-type none
#detail-content
  width 100%
  height 600px
  background #282C34
  &>div
    padding 0 35px
    box-sizing border-box
  #search
    height 80px
    width 100%
    #search-fake
      position relative 
      top 50%
      transform translate(0,-50%)
      width 100%
      height 50px
      line-height 42px
      box-sizing border-box
      background rgba(255,255,255,.1)
      border-radius 35px
      text-align center
      img 
        width 30px
        vertical-align  middle
      span 
        color rgba(255,255,255,.3)
        font-size 27px
        margin-left 20px


</style>
