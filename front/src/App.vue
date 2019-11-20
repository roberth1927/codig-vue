<template>
    <div class="container">
      <h1 class="text-center mt-5 text-info">Codeignither con Vue.js</h1>
        <!-- <Courses/> -->
        <!-- <NewCourse/> -->+
        <router-view></router-view>

    </div>
</template>

<script>

import Courses from './components/ListCourse/Courses.vue'
import NewCourse from './components/NewCourse.vue'

export default {
  components: {
    Courses,
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
