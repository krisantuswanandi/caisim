<script setup lang="ts">
const { data, error } = await useFetch("/api/products");

if (error.value?.statusCode === 401) {
  navigateTo("/login");
}

const router = useRouter();
const search = ref("");

const searchProduct = (keyword: string) => {
  search.value = keyword;
};

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
  <SearchProduct @search="searchProduct" />
  <ProductList :data="products" />
  <div class="fixed left-0 right-0 bottom-0 max-w-lg p-2 mx-auto">
    <button @click="logout">Logout</button>
    <NuxtLink
      to="/add"
      class="bg-gray-400 hover:bg-gray-500 py-3 px-4 block rounded-lg text-center"
    >
      New Item
    </NuxtLink>
  </div>
</template>
