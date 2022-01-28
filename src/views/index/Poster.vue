<template>
  <div class="poster">
          <div
            style="float:right;">
            <img style="width:90%" src="../../assets/img/Banner/hero-img.png"  alt="" />
          </div>

  </div>
</template>

<script>
export default {
  name: 'Poster'
}
</script>

<style scoped>
.poster {
  position: absolute;
  left: 0;
  right: 0;
  height: 4rem;
  background: url("../../assets/img/Banner/hero-bg.png") no-repeat;
  background-size: cover;
}
</style>
