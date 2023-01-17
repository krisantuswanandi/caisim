<script setup lang="ts">
const props = defineProps(['data'])
</script>

<template>
  <div class="mt-3">
    <GroceriesItem v-for="item in props.data" :key="item.name" :data="item" />
  </div>
</template>
