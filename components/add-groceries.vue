<script setup lang="ts">
const emit = defineEmits(['submit', 'cancel'])

const name = ref('')
const price = ref('')

const submit = () => {
  emit('submit', { name: name.value, price: price.value })
}

const cancel = () => {
  emit('cancel')
}
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <input v-model="name" placeholder="name..." class="placeholder:italic flex-auto rounded-lg py-2 px-4 color-gray-600 w-full">
    </div>
    <div class="mt-2">
      <input v-model="price" placeholder="price..." class="placeholder:italic flex-auto rounded-lg py-2 px-4 color-gray-600 w-full">
    </div>
    <div class="fixed left-0 right-0 bottom-0 max-w-lg p-2 mx-auto flex">
      <button type="button" class="hover:bg-gray-300 rounded-lg py-3 px-4" @click="cancel">
        Cancel
      </button>
      <button class="bg-gray-400 hover:bg-gray-500 rounded-lg py-3 px-4 ml-1 flex-auto">
        Submit
      </button>
    </div>
  </form>
</template>
