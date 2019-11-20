<template>
     <tr>
        <td class="text-danger">#1</td>
        <td class="text-info">vue.js</td>
        <td class="text-success">java</td>
        <td class="text-warning font-italic">css</td>
        <td>
            <button class="btn btn-sm btn btn-outline-danger">Borrar</button>
            <router-link
                to="/actualizar"
                tag="button"
                class="btn btn-sm btn btn-outline-warning">
                Editar
           </router-link> 
        </td>
    </tr>
</template>