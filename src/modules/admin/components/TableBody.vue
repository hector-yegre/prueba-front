<template>
  <tbody>
     
            <tr  
            v-for="(client,index) in clients" :key="index"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">
                    {{ client.id }}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{client.name}}
                </th>
                <td class="px-6 py-4">
                    {{client.last_name}}
                </td>
                <td class="px-6 py-4">
                    {{client.license}}
                </td>
                <td class="px-6 py-4">
                    {{client.phone_number}}
                </td>
                <td class="px-6 py-4">
                    {{client.address}}
                </td>
                <td class="px-6 py-4">
                    <button href="#" class="font-medium text-white bg-blue-600 hover:underline">Edit</button>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 hover:underline">delete</a>
                </td>
            </tr>
        </tbody>
</template>

<script>
 
export default {
    name:'componet-table-body',
    props:{
        listClients: Array,
    },
    setup(props){

        console.log("props",props.listClients)
        return{
            clients: props.listClients
        }

    }

}
</script>

<style>

</style>