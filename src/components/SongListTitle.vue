<template>
  <h4 id="title">
      <span class="title-before"></span>
      <span class="title-font">{{ titleData.title }}</span>
      <span v-if="titleData.isCaret" class="title-after"></span>
    </h4>
</template>
<script>
export default {
  name: "SongListTitle",
  props: ["titleData"]
};
</script>

<style lang="stylus">
#title
  display flex
  align-items center
  font-size 32px
  margin 20px 0
  font-weight 500
  letter-spacing 2px
  overflow hidden
  .title-font
    margin 0 10px 0 20px
  .title-before
    width 5px
    height 30px
    background #D43C33
  .title-after
    width 20px
    height 20px
    margin-top 3px
    border 1px solid rgba(0,0,0,.9)
    border-left-width  0
    border-bottom-width 0
    transform rotateZ(45deg)
</style>
