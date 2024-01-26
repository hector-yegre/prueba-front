<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  
              </h1>
              <form @submit.prevent="onSubmit" class="space-y-4 md:space-y-6">
                  <div>
                       
                      <input 
                        type="email"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="Email" 
                        required
                      >
                  </div>
                  <div>
                       
                       <input 
                          v-model="loginForm.email"
                          type="email"  
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                          placeholder="Name" 
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
                     No tienes una cuenta ?<router-link :to="{name:'register'}" class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                     >
                     Registrate aqui
                    </router-link> 
                  </p>
              </form>
          </div>
      </div>
  </div>
</template>

<script scoped>
import {ref} from 'vue'
export default {

 setup(){

  const loginForm = ref({
    email:"asdasd",
    password:""
  })
 
  return{
    loginForm,
    onSubmit: async ()=>{
      console.log(loginForm.value)
    }

  }

 }


}
</script>

<style>

</style>