<template>
    <div class="row">
        <div class="col-md-9 offset-2 mt-5">
           <table class="table table-hover table-dark table-striped border-dark border shadow-lg">
               <thead>
                   <th>id</th>
                   <th>tex1</th>
                   <th>tex2</th>
                   <th>tex3</th>
                   <th>tex4</th>
               </thead>
               <tbody>
                   <tr>
                       <td class="text-danger">#1</td>
                       <td class="text-info">vue.js</td>
                       <td class="text-success">java</td>
                       <td class="text-warning font-italic">css</td>
                       <td>
                           <button class="btn btn-sm btn btn-outline-danger">Borrar</button>
                           <button class="btn btn-sm btn btn-outline-warning">Editar</button>
                       </td>
                   </tr>
               </tbody>
           </table> 
           <button class="btn-dark btn text-info float-right">Agregar Nuevo</button>
        </div>
    </div>
</template>
