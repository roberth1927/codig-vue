<template>
    <div class="row">
        <div class="col-md-6 offset-3">
        <form class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
            <div class="form-group">
                <label class="text-light">nombre del curso</label>
                <input type="email" class="bg-dark border border-warning text-warning form-control"  placeholder="Ingrese el nombre">
            </div>
            <div class="form-group">
                <label class="text-light">nombre del curso</label>
                <input type="email" class="bg-dark border border-info text-info form-control"  placeholder="Ingrese el nombre">
            </div>
            <div class="form-group">
                <label class="text-light">nombre del curso</label>
                <input type="email" class="bg-dark border border-danger text-danger form-control"  placeholder="Ingrese el nombre">
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