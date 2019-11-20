<template>
    <div class="container">
      <h1 class="text-center mt-5 text-info">Codeignither con Vue.js</h1>
        <router-view></router-view>
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
  html{
    height: 100% !important;
  }
  body{
    background-color: #002436;
  }

</style>
