<script setup lang="ts">
import { Product } from "@/database/schema";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div v-if="products.length" class="pt-3 pb-10">
    <ProductItem
      v-for="product in products"
      :key="product.name"
      :data="product"
    />
  </div>
  <div v-else class="py-10 text-neutral-400 italic text-center">
    No products
  </div>
</template>
