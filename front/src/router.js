import Vue from "vue"
import VueRouter from "vue-router"
import Courses from './components/ListCourse/Courses'
import NewCourse from './components/NewCourse'
import UpdateCourse from './components/UpdateCourse'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path : "/", component : Courses},
        { path : "/nuevo", component : NewCourse},
        { name : "actu-id", path : "/actualizar", component : UpdateCourse},
        { path : "*", redirect : "/"},
    ],
    mode : "history"
})