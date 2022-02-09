import { createWebHistory, createRouter } from "vue-router";
import New from './New.vue'
const routes = [
    {
    path:'/New',
    name:'New' , 
    component : New 
    }
    ]
    const router = createRouter({
        history: createWebHistory(),
        routes,
      });
      export default router;
      