

export default{
    name: 'auth',
    component: ()=>import('../layouts/AuthLayout.vue'),
    children:[
        {
            path:'',
            name:'login',
            component: ()=>import('../views/login.vue'),
        },
        {
            path:'register',
            name:'register',
            component: ()=>import('../views/register.vue'),
        }
    ]
    
}