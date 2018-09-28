<template>
  <div id="commend-song-list">
    <ListTitle :titleData="titleData"></ListTitle>
    <div id="commend-song-list-content">
      <div id="commend-song-list-content-items" v-for="(data, index) in songList" :key="index">
        <div class="content-items-img">
          <img :src="data.picUrl">
        </div>
        <div id="content-name">{{ data.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import ListTitle from "./SongListTitle.vue";
export default {
  data() {
    return {
      titleData: {
        title: "推荐歌单",
        isCaret: true
      }
    }
  },
  components: {
    ListTitle
  },
  computed: {
    songList() {
      return this.$store.state.personalized;
    }
  },
  mounted() {
    this.$store.dispatch("getPersonalized");
  }
};
</script>

<style lang="stylus">
#commend-song-list
  padding 20px 0
  #commend-song-list-content
    display flex
    flex-wrap wrap
    justify-content space-between
    width 100%
    height 620px
    #commend-song-list-content-items
      width 33%
      height 50%
      .content-items-img
        width 100%
        height 75%
        img 
          width 100%
          height 100%
      #content-name
        margin 5px 0
        font-size 25px
        width 100%
        height 20%
        letter-spacing 2px
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        overflow:hidden;
  
</style>
