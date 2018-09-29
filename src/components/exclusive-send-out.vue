<template>
  <div id="exclusive-send-out">
    <ListTitle :titleData="titleData"></ListTitle>
  </div>
</template>
<script>
import ListTitle from "./SongListTitle.vue";
export default {
  data() {
    return {
      titleData: {
        title: "独家放送",
        isCaret: false
      }
    };
  },
  components: {
    ListTitle
  }
}
</script>

