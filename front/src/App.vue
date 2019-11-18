<template>
    <div class="container">
        <List/>
        <NewCourse/>

    </div>
</template>

<script>

import List from './components/List.vue'
import NewCourse from './components/NewCourse.vue'

export default {
  components: {
    List,
    NewCourse
  }
}
</script>

<style>
  html{
    height: 100% !important;
  }
  body{
    background-color: #002436;
    /* background-image: linear-gradient(to right top, #051937, #002436, #022b2d #203028, #32342d); */
  }

</style>
