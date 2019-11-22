<template>
    <div class="row">
        <div class="col-md-9 offset-2 mt-54">
           <table v-if="courses.length > 0" class="table table-hover table-dark table-striped border-dark border shadow-lg">
               <thead>
                   <th>#id</th>
                   <th>Ttiulo</th>
                   <th>Descripción</th>
                   <th>Precio</th>
                   <th>Acciones</th>
               </thead>
               <tbody>
                   <Course v-for="course in courses" :key="course.id" :course="course"/>
               </tbody>
           </table>
           <div v-else class="alert alert-primary border-0">
               No hay cursos agregados
           </div>
           <router-link to="/nuevo" tag="button" class="btn-dark btn text-info float-right">
                Agregar Nuevo
           </router-link> 
        </div>
    </div>
</template>

<script>

import Course from "./Course"
export default {
    components : {
        Course
    },
    computed: {
        courses(){
            return this.$store.getters.getCourses
        }
    },
}
</script>
