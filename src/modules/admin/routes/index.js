import isAuthGuard from '../../auth/routes/auth-router';


export default{
    name: '',
    component: ()=>import('../layout/AdminLayout.vue'),
    children:[
        {
            path:'/',
            beforeEnter: [isAuthGuard],
            name:'dashboar',
            component: ()=>import('../views/home.vue'),
        },
        {
            path:'/:id',
            beforeEnter: [isAuthGuard],
            name:'update',
            component: ()=>import('../views/update.vue'),
        },
    ]
    
}