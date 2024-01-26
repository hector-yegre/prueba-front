<template>
  <nav aria-label="Page navigation example" class="py-5">
  <ul class="inline-flex -space-x-px text-sm">
    <li >
      <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>

    <li v-for="i in last_page">
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70">{{i}}</a>
    </li>
    
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>

  </ul>
</nav>
</template>

<script>
import useClient from '../composables/useClient';
export default {
setup(){
  const { last_page } = useClient()

  return{
    last_page


  }
}

}
</script>

<style>

</style>