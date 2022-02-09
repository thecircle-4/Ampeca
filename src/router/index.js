import { createRouter,createWebHistory } from "vue-router";
import Test from "../components/Test"
import Home from "../components/Home"
const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;
