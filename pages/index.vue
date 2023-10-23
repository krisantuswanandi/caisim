<script setup lang="ts">
import { Product } from "@/database/schema";

const { data, error } = await useFetch<Product[]>("/api/products");

if (error.value?.statusCode === 401) {
  navigateTo("/login");
}

const router = useRouter();
const search = ref("");

const products = computed(() => {
  if (!data.value) return [];

  if (!search.value.trim()) return data.value;

  return data.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

async function logout() {
  await useFetch("/api/logout", { method: "POST" });
  router.push("/login");
}
</script>

<template>
  <BaseLayout title="Caisim">
    <template #actions>
      <NuxtLink
        to="/add"
        class="rounded-md hover:bg-neutral-100 border border-neutral-300 px-4 py-1"
      >
        Add Item
      </NuxtLink>
      <button
        @click="logout"
        class="rounded-md hover:bg-neutral-100 border border-neutral-300 px-4 py-1"
      >
        Logout
      </button>
    </template>
    <BaseInput name="search" placeholder="search here..." v-model="search" />
    <ProductList :products="products" />
  </BaseLayout>
</template>
