import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        courses : []
    },
    mutations : {
        initCourses(state, courses){
            state.courses = courses
        },
        addCourse(state, course){
            state.courses.push(course)
        },
        updateCourse(state, course){
            let index = state.courses.findIndex(c => c.id == course.id)
            if (index > -1) {
                state.courses.splice(index, 1)
            }
        },
        deleteCourse(state, courseID){
            let index = state.courses.findIndex(c => c.id == courseID)
            if (index > -1) {
                state.courses.splice(index, 1)
            } 
        }
    },
    actions : {
        initApp(context){
            axios.get("http://localhost/codig-vue/api/get_all_data")
            .then(response =>{
                context.commit("initCourses", response.data)
            })
        },
        addCourse(context, course) {
            return axios.post("http://localhost/codig-vue/api/save", JSON.stringify(course))
              .then(response => {
                context.commit("addCourse", { id : response.data.insert_id, ...course})
              })
        },
        updateCourse(context, course) {
            return axios.post("http://localhost/codig-vue/api/update", JSON.stringify(course))
                .then(response => {
                context.commit("updateCourse", course)
                })
        },
        deleteCourse(context, courseID) {
            return axios.post("http://localhost/codig-vue/api/delete", JSON.stringify({ id : courseID}))
              .then(response => {
                context.commit("deleteCourse", courseID)
              })
          }
        },
    getters : {
        getCourses(state){
            return state.courses
        }
    }
})

export default store