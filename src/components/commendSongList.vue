<template>
  <div id="commend-song-list">
    <ListTitle :titleData="titleData"></ListTitle>
    <div id="commend-song-list-content">
      <div id="commend-song-list-content-items" v-for="(data, index) in songList" :key="index" @click="$emit('songListDetails', data)">
        <div class="content-items-img">
          <img :src="data.picUrl">
          <span id="play-count">
            <img src="../assets/image/a8t.png">
            <span>{{ playCount[index] }}</span>
          </span>
        </div>
        <div id="content-name">{{ data.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import ListTitle from "./songListTitle.vue";
export default {
  data() {
    return {
      titleData: {
        title: "推荐歌单",
        isCaret: true
      }
    };
  },
  components: {
    ListTitle
  },
  computed: {
    songList() {
      return this.$store.state.personalized;
    },
    playCount() {
      return this.songList.map(value => {
        let playCount = Math.floor(value.playCount).toString();
        return playCount.length > 5 ? playCount.slice(0, -4) + "万" : playCount;
      });
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
    height 650px
    #commend-song-list-content-items
      width 33%
      height 50%
      .content-items-img
        position relative
        width 100%
        height 70%
        img 
          width 100%
          height 100%
        #play-count
          display flex
          position absolute
          top 2px
          right 10px
          align-items center
          color #ffffff
          img
            width 22px
            margin-right 4px
          span 
            font-size 25px
      #content-name
        padding 10px 0
        font-size 25px
        width 100%
        height 25%
        letter-spacing 1px
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        overflow:hidden;
        box-sizing  border-box
  
</style>
