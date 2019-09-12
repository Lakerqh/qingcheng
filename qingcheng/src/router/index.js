import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/home'
import Homepage from './../views/home/homepage'
import Teacher from './../views/teacher/teacher'
import Teacherdetail from './../views/teacher/teacherdetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            redirect:'/home'
        },{
        path: '/home',
        redirect:'/home/homepage',
        name: 'Home',
        component: Home,
        children: [{
            path: 'homepage',
            name: Homepage,
            component: Homepage
        },{
            path:'teacher',
            name: Teacher,
            component: Teacher
        },{
            path:'teacherdetail',
            name: Teacherdetail,
            component: Teacherdetail
        }]
    }]
})
