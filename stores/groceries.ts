import { defineStore } from 'pinia'

export const useGroceriesStore = defineStore('groceries', () => {
  const groceries = ref<GroceriesItem[]>([
    { name: 'Item 1', price: '10000' },
    { name: 'Item 2', price: '20000' },
    { name: 'Item 3', price: '30000' },
    { name: 'Item 4', price: '40000' },
    { name: 'Item 5', price: '50000' },
    { name: 'Item 6', price: '60000' },
  ])

  const addGroceries = (groceriesItem: GroceriesItem) => {
    groceries.value.push(groceriesItem)
  }

  return { groceries, addGroceries }
})
