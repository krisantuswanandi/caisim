<script setup lang="ts">
const emit = defineEmits(["search"]);

const search = ref("");

watchEffect(() => {
  emit("search", search.value);
});
</script>

<template>
  <div class="flex">
    <input
      v-model="search"
      placeholder="search..."
      class="placeholder:italic flex-auto rounded-lg py-2 px-4 color-gray-600"
    />
    <button class="bg-gray-400 hover:bg-gray-500 rounded-lg py-2 px-4 ml-3">
      Search
    </button>
  </div>
</template>
