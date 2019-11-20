<template>
    <div class="row">
        <div class="col-md-9 offset-2 mt-5">
           <table class="table table-hover table-dark table-striped border-dark border shadow-lg">
               <thead>
                   <th>id</th>
                   <th>tex1928</th>
                   <th>tex2</th>
                   <th>tex3</th>
                   <th>tex4</th>
               </thead>
               <tbody>
                   <Course/>
               </tbody>
           </table>
           <router-link
           to="/nuevo"
           tag="button"
           class="btn-dark btn text-info float-right">
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
    }
}
</script>
