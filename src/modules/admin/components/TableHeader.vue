<template>
  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr >         
                <th 
                    v-for="(item,index) in headers" :key="index"
                     scope="col" class="px-6 py-3">
                    {{item}}
                </th>
            </tr>
        </thead>
</template>

<script>
export default {

    props:{
        headers: Array
    },
    name: 'Taable-heaeder',
    setup(props){
        
        return{
            Headers: props.headers.value
        }

    }

}
</script>

<style>

</style>

