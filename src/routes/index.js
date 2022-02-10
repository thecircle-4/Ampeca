import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Home from '../components/Home.vue';

const routes =[
    {
        path:'/home',
        name:'Home',
        component:Home
    },
    {
        path:'/',
        name:'login',
        component: Login
    },
    {
        path:'/signup',
        name:'signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;