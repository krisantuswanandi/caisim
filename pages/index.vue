<script setup lang="ts">
import { useGroceriesStore } from '@/stores/groceries'

const search = ref('')

const groceriesStore = useGroceriesStore()
const groceries = groceriesStore.groceries

const searchGroceries = (keyword: string) => {
  search.value = keyword
}

const filteredGroceries = computed(() => {
  if (!search.value.trim())
    return groceries

  return groceries.filter(groceriesItem => groceriesItem.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <SearchGroceries @search="searchGroceries" />
  <GroceriesList :data="filteredGroceries" />
  <div class="fixed left-0 right-0 bottom-0 max-w-lg p-2 mx-auto">
    <NuxtLink to="/add" class="bg-gray-400 hover:bg-gray-500 py-3 px-4 block rounded-lg text-center">
      New Item
    </NuxtLink>
  </div>
</template>
