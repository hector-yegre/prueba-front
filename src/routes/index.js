import { createRouter,createWebHashHistory } from "vue-router"
import Home from '../views/Home.vue'
import authRoutes  from '../modules/auth/routes'
import adminRouter from '../modules/admin/routes'
import isAuthGuard from "../modules/auth/routes/auth-router"
const routes = [
    { 
        path: '/', 
        ...adminRouter
    },
    {
        path: '/auth',
        ...authRoutes
    }
  ]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router