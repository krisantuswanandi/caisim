<script setup lang="ts">
const router = useRouter();

const goBack = () => {
  router.push("/");
};

const addProduct = () => {
  goBack();
};
</script>

<template>
  <AddProduct @submit="addProduct" @cancel="goBack" />
</template>
