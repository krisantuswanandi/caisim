<script setup lang="ts">
import { Product } from "@/database/schema";

defineProps<{
  data: Product[];
}>();
</script>

<template>
  <div class="mt-3 pb-24">
    <ProductItem v-for="item in data" :key="item.name" :data="item" />
  </div>
</template>
