<script setup lang="ts">
import { useGroceriesStore } from '@/stores/groceries'

const router = useRouter()
const groceries = useGroceriesStore()

const goBack = () => {
  router.push('/')
}

const addGroceries = (groceriesItem: GroceriesItem) => {
  groceries.addGroceries(groceriesItem)
  goBack()
}
</script>

<template>
  <AddGroceries @submit="addGroceries" @cancel="goBack" />
</template>
