<template>
  
<nav class="bg-white border-gray-200 dark:bg-gray-900 pb-10">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <span  class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Prueba Tecnica</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
        
            <span @click="logout" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Cerrar secion</span>
        </div>
    </div>
</nav>

</template>

<script>
 

import { useRouter } from 'vue-router';
export default {
    
    setup(){
        const router = useRouter()
        const  logout = async()=>{
           
           
                localStorage.clear()
                router.push({name:'login'})
            
        }

        return{
            logout
        }
    }
}
</script>

<style>

</style>