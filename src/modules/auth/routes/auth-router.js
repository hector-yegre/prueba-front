import clientApi from '../../../api/authApi'

const isAuthGuard = async (to,from,next) =>{
    // const {data} = await clientApi.post('/sheck')
console.log(to)
    if(!localStorage.getItem('token')){
        next({name:'login'})
    }
     
    if(localStorage.getItem('token') && to.name == 'login'){
        next({name:'dashboar'})
    }
    
    next()
}

export default isAuthGuard