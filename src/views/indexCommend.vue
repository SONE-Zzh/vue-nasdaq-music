<template>
  <div id="index-commend">
    <banner></banner>
    <navButton></navButton>
    <commendSongList></commendSongList>
  </div>
</template>
<script>
import banner from "../components/indexBanner.vue";
import navButton from "../components/index-nav-button.vue";
import commendSongList from "../components/commendSongList.vue";
export default {
  components: {
    banner,
    navButton,
    commendSongList
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$emit("componentChange", to.fullPath);
    })
  }
};
</script>
<style lang="stylus">
#index-commend
  width 100%
  height 100%
</style>

