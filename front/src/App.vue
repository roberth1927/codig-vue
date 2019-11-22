<template>
    <div class="container">
      <h1 class="text-center mt-5 text-info">Codeignither con Vue.js</h1>
        <transition name="page" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch("initApp")
  },
}
</script>

<style>
  html {
    height: 100% !important;
  }
  body {
    background-color: #002436;
  }
  .page-enter, .page-leave-active {
    opacity: 20;
    transform: translate(50px);
    transform: scale(0);
  }
  .page-enter-active, .page-leave-active {
    transition: all .3s;
  }
  /*pe pea pl pla*/
  /*0   1   1   0*/
</style>