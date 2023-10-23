<script setup lang="ts">
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    class="rounded-md hover:bg-neutral-800 border border-neutral-900 bg-neutral-900 text-white px-4 py-1.5 w-full disabled:bg-neutral-600 disabled:border-neutral-600"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
