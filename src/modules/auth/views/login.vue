<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Entra En tu Cuenta
              </h1>
              <form 
                @submit.prevent="onSubmit"
                class="space-y-4 md:space-y-6">
                  <div>
                       
                      <input 
                        v-model="loginForm.email"
                        type="email"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="Email" 
                        required
                      >
                  </div>

                  <div>
   
                      <input 
                        v-model="loginForm.password"
                        type="password" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        required
                        name="password" 
                        placeholder="••••••••"
                      >
                  </div>
               
                  <button 
                   
                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Sign in
                    </button>

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     No tienes una cuenta ?<a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrate aqui</a>
                  </p>
              </form>
          </div>
          <div v-if="alert" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="font-medium">{{ alert }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import axiosInsta from '../../../api/authApi'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const loginForm = ref({
            email:"",
            password:""
        })
        const alert = ref(null)
       
        const useAuth =  async ()=>{
            try{
                const {data} = await axiosInsta.post('/login',JSON.stringify(loginForm.value))
                const {token} = data
                if(token){
                    localStorage.setItem('token',token)
                    //Todo Redireccionar al home
                    router.push({name:'dashboar'});
                    
                }
                 
            }catch({response}){
                console.log(response)
                alert.value = response.data.msg 
              
            }
        }

        return{
            loginForm,
            onSubmit:  useAuth,
            alert

        }
    }

}
</script>

<style>

</style>