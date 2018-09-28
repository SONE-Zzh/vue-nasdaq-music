<template>
  <div id="index-commend">
    <banner></banner>
    <navButton></navButton>
  </div>
</template>
<script>
import banner from "../components/indexBanner.vue";
import navButton from "../components/index-nav-button.vue";
export default {
  components: {
    banner,
    navButton
  }
}
</script>
