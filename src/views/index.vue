<template>
  <div id="index">
    <div id="index-nav">
      <router-link to="">推荐</router-link>
      <router-link to="">朋友</router-link>
      <router-link to="">电台</router-link>
    </div>
    <recommend></recommend>
  </div>
</template>

<script>
import recommend from "./indexCommend.vue";
export default {
  name: "index",
  components: {
    recommend
  }
}
</script>
<style lang="stylus">
#index
  position absolute 
  top 120px
  left 0
  right 0
  bottom 100px
  #index-nav
    display flex
    justify-content space-around
    background #D43C33
    a
      font-size 30px
      color #ffffff
      text-decoration none
</style>

