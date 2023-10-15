<script setup lang="ts">
const props = defineProps(['data'])
</script>

<template>
  <div class="rounded-lg first:mt-0 mt-1 bg-gray-300 p-4 flex">
    <div>
      {{ props.data.name }}
    </div>
    <div class="ml-auto">
      {{ props.data.price }}
    </div>
  </div>
</template>
