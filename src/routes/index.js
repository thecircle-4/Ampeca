import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Home from '../components/Home.vue';
import Profile from '../components/Profile.vue'

const routes =[
    {
        path:'/home/:id',
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
    },
    {
        path:'/profile/:id',
        name:'profile',
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;