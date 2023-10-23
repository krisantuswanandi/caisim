<script setup lang="ts">
import { Product } from "@/database/schema";

const props = defineProps<{ data: Product }>();

const price = computed(() => formatCurrency(props.data.price));
</script>

<template>
  <div
    class="px-2 py-2 flex border-b border-neutral-300 hover:bg-neutral-100 last:border-none"
  >
    <div class="capitalize">
      {{ props.data.name }}
    </div>
    <div class="ml-auto">
      {{ price }}
    </div>
  </div>
</template>
