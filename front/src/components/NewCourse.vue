<template>
    <div class="row">
        <div class="col-md-6 offset-3">
        <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
            <div class="form-group">
                <label class="text-light">Titulo</label>
                <input v-model="course.title" type="text" class="bg-dark border border-warning text-warning form-control"  placeholder="Ingrese el nombre">
            </div>
            <div class="form-group">
                <label class="text-light">Descripción</label>
                <input v-model="course.couponCode" type="text" class="bg-dark border border-info text-info form-control"  placeholder="Ingrese el nombre">
            </div>
            <div class="form-group">
                <label class="text-light">Precio</label>
                <input v-model="course.price" type="text" class="bg-dark border border-danger text-danger form-control"  placeholder="Ingrese el nombre">
            </div>
            <div class="container">
                <button  type="submit" class="btn btn-outline-success">Registrar</button>
                 <router-link
                    to="/"
                    tag="button"
                    class="btn btn-outline-danger">
                    Cancelar
                </router-link> 
            </div>
            
        </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            course :{
                title : '',
                couponCode: '',
                price : 0.0

            }
        }
    },
   methods: {
      onSubmit() {
        this.$store.dispatch("addCourse", this.course)
          .then(() => {
            this.$router.push("/")
          })
      }
    }
  }
</script>