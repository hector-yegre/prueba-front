<template>
  <transition class="fade" id="modal" >
    <div class="overlive flex justify-center items-center bg-gray-300 w-full h-full fixed inset-x-0 inset-y-0 bg-transparent">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 v-if="!alert" class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Nuevo Registro
              </h2>
              <div v-if="alert" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="font-medium">{{ alert }}</span>
              </div>
              <form 
                @submit.prevent="createClient(updateForm)"
                class="space-y-4 md:space-y-6">
                  <div>
                      <input 
                        v-model="updateForm.name"
                        type="text"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" 
                        placeholder="Nombre" 
                        required
                      >
                  </div>
                  <div>
                      <input 
                        v-model="updateForm.last_name"
                        type="text"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" 
                        placeholder="Apellido" 
                        required
                      >
                  </div>
                  <div>
                      <input 
                        v-model="updateForm.license"
                        type="text"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" 
                        placeholder="Cedula" 
                        required
                      >
                  </div>
                  <div>
                      <input 
                        v-model="updateForm.email"
                        type="email"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" 
                        placeholder="Email" 
                        required
                      >
                  </div>
                  <div>
                      <input 
                        v-model="updateForm.phone_number"
                        type="text"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" 
                        placeholder="Telefono" 
                        required
                      >
                  </div>

                  <div class="ml-1">
                      <textarea
                        v-model="updateForm.addres"
                        type="text"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" 
                        placeholder="Direccion" 
                        required
                      ></textarea>
                  </div>

                  <button 
                    type="submit"
                    class="w-[50%] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                    >
                        Guardar
                    </button>
                    
                    <button 
                      @click="close"
                      type="button"
                      class="w-[50%] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                    >
                    Cancelar
                   </button>
              </form>
          </div>
         
      </div>
    </div>
  </transition>
</template>

<script>

import { ref, watch} from "vue";

import useClient from '../composables/useClient.js'

export default {
    props:{fade:Boolean},
    setup(props,{emit}){
       
        const {createClient,isLoading,alert} = useClient()
       
        const updateForm = ref({
           name: "",
           last_name:"",
           license:"",
           phone_number:"",
           email:"",
           addres:""  
        })

        const close = () => {
                updateForm.value.name = ""
                updateForm.value.last_name= ""
                updateForm.value.license=""
                updateForm.value.phone_number =""
                updateForm.value.email =""
                updateForm.value.addres =""
                alert.value = null

                const modal = document.querySelector('#modal')
                modal.style.display = 'none'
                console.log("epaaaa",updateForm.value.name)
        }

     
       
        return {
             
            createClient,
            updateForm,
            createClient,
            close,
            alert,

        }
    }

}
</script>

<style scoped>

.fade{
  display: none;
  transition: 1.5s ease-in;
  
}
 

</style>