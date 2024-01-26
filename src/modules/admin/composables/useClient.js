import clientApi from '../../../api/authApi'
import { ref} from 'vue'

const useClient = () =>{

    
    const listClients  = ref([])
    const show = ref(false)
    const current_page = ref(1)
    const last_page    = ref(null)
    const isLoading    = ref(false)
    const alert        = ref(null)

    const getClients = async ( page=1,cedula='') =>{
        
        try{
            const {data} = await clientApi.get(`/clients?page=${page}&cedula=${cedula}`);
         
            listClients.value = data.data.data
            last_page.value = data.data.last_page
            current_page.value = data.current_page
            console.log(data.data.last_page)
             
        }catch(err){
            console.log(err)
        }
    }

    const deleteClient = async (id) => {
        
        try{
            const {data:{ok,msg}} = await clientApi.delete(`/client/${id}`);
            if(ok){
                getClients(1)
            }
        }catch(err){
            console.log(err)
        }
    }

    const createClient =  async (payload) =>{
        
        try{
            isLoading.value = true
            const {data:{ok,msg}} = await clientApi.post(`/client`,JSON.stringify(payload));
            if(ok){
                getClients(1)
                console.log(msg)
               
                
            }
        }catch({response}){
            console.log(response.data.msg)
            alert.value = response.data.msg
             
        } 

        
    }

    const updateClient =async(id,payload)=>{

        try{
            isLoading.value = true
            const {data:{ok,msg}} = await clientApi.put(`/client/${id}`,JSON.stringify(payload));
            if(ok){
                alert.value = msg
            }
        }catch({response}){
            console.log(response.data.msg)
            alert.value = response.data.msg
             
        } 
            
    }
    return {
        show,
        getClients,
        listClients,
        last_page,
        deleteClient,
        createClient,
        updateClient,
        alert
      
    }
}

export default useClient
