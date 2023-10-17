<script setup lang="ts">
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    class="bg-neutral-900 text-white w-full px-1 py-2 rounded-md"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
