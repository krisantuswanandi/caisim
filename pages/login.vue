<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

const router = useRouter()

const login = () => {
  router.push('/')
}
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <button class="bg-gray-300 hover:bg-gray-400 rounded-lg py-2 px-8 ml-1" @click="login">
      Login
    </button>
  </div>
</template>
