<template>
  <div id="radio">
    <h3>Hello Welcome to radio</h3>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$emit("componentChange", to.fullPath);
    });
  }
}
</script>

