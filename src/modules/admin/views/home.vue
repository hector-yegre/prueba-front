<template>
    
 <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
            <button @click="open"
            class="inline-flex items-center text-white bg-blue-600 border border-gray-300  font-medium rounded-lg  px-3 py-1.5" >
              Registrar nuevo cliente
            </button>
           
        </div>
        <label for="table-search" class="sr-only">Buscar por Cedula</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input
            v-model="busqueda" 
            type="text"   class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
       
            
        </div>
        
    </div>
 
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       
        <TableHeader :headers="['id','Nombre','Apellido','Cedula','Telefono','Direccion','Actualizar','Eliminar']"/>
        <!-- <TableBody   :listClients="listClients"/> -->

        <tbody>
            <tr  
                v-for="(client,index) in listClients" :key="index"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">
                    {{ client.id }}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{client.name}}
                </th>
                <td class="px-6 py-2">
                    {{client.last_name}}
                </td>
                <td class="px-6 py-2">
                    {{client.license}}
                </td>
                <td class="px-6 py-2">
                    {{client.phone_number}}
                </td>
                <td class="px-6 py-2">
                    {{client.addres}}
                </td>
                <td class="px-6 py-2">
                    <button @click="redirect(client.id)"  
                    class="font-medium text-white bg-blue-600  e  rounded-lg text-sm px-3 py-1.5">Actualizar</button>
                </td>
                <td class="px-6 py-2">
                    <button  
                    @click="deleteClient(client.id,event)"  
                    class="font-medium text-white bg-red-600 hover:underline rounded-lg text-sm px-3 py-1.5">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <Paginate :lastPage="last_page"/>
</div>

<Popup />

</template>

<script>
import  {defineAsyncComponent,onMounted,ref, watchEffect} from 'vue'
import useClient from '../composables/useClient.js'
import { useRouter } from 'vue-router'


export default {

    components:{
        TableHeader: defineAsyncComponent(()=>import('../components/TableHeader.vue')),
        TableBody: defineAsyncComponent(()=>import('../components/TableBody.vue')),
        Popup: defineAsyncComponent(()=>import('../components/Popup.vue')),
        Paginate: defineAsyncComponent(()=>import('../components/Paginate.vue'))
    },

    setup(){
        const busqueda = ref('')
        const router = useRouter()
        const {getClients,listClients,last_page,deleteClient,updateClient}  = useClient()
        const fade = ref(null)
        const open = () => {
                const modal = document.querySelector('#modal')
                modal.style.display = 'flex'
        }

        onMounted(()=>{
            console.log('se monto el componente')
            getClients()
        })

        const redirect = (id) =>{
            router.push({name:'update',params:{id:id}})
        }
        
        watchEffect(()=>{
            console.log(busqueda.value)
            getClients(1,busqueda.value)
        })
        
        return{
            busqueda,
            deleteClient,
            fade,
            getClients,
            last_page,
            listClients,
            open,
            open,
            redirect,
            updateClient,
            
        }
    
    },
   
    
}
</script>

<style>

</style>