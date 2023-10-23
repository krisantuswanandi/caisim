<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex items-center my-6">
    <h1 class="text-xl font-bold mr-auto">{{ title }}</h1>
    <div class="flex gap-1">
      <slot name="actions" />
    </div>
  </div>
  <div>
    <slot></slot>
  </div>
</template>
