<template>
  <div id="index-commend">
    <banner></banner>
    <navButton></navButton>
    <commendSongList @songListDetails="songListDetails"></commendSongList>
    <exclusiveSendOut></exclusiveSendOut>
  </div>
</template>
<script>
import banner from "../components/indexBanner.vue";
import navButton from "../components/index-nav-button.vue";
import commendSongList from "../components/commendSongList.vue";
import exclusiveSendOut from "../components/exclusive-send-out.vue";

export default {
  methods: {
    songListDetails(data) {
      this.$emit("songListDetails", data);
    }
  },
  components: {
    banner,
    navButton,
    commendSongList,
    exclusiveSendOut
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$emit("componentChange", to.fullPath);
    });
  }
};
</script>
<style lang="stylus">
#index-commend
  width 100%
  height 100%
</style>

