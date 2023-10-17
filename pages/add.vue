<script setup lang="ts">
const router = useRouter();

const form = reactive({
  name: "",
  price: "",
  store: "",
});

const errMsg = ref("");
function setErrMsg(msg: string) {
  errMsg.value = msg;
  setTimeout(() => {
    errMsg.value = "";
  }, 1500);
}

async function addProduct() {
  if (!form.name || !form.price || !form.store) {
    setErrMsg("Fill out all fields");
    return;
  }

  const { error } = await useFetch("/api/products", {
    method: "post",
    body: form,
  });

  if (error.value) {
    if (error.value.statusCode === 401) {
      router.push("/login");
    } else {
      setErrMsg(error.value.statusMessage || "");
      return;
    }
  } else {
    router.push("/");
  }
}
</script>

<template>
  <div class="flex items-baseline">
    <h1 class="text-2xl font-bold my-6 mr-auto">Add New Item</h1>
    <NuxtLink to="/" class="text-blue-700 underline underline-offset-2">
      Back
    </NuxtLink>
  </div>
  <form @submit.prevent="addProduct">
    <BaseInput type="text" name="Name" v-model="form.name" />
    <BaseInput type="text" name="Price" v-model="form.price" />
    <BaseInput type="text" name="Store" v-model="form.store" />
    <div class="h-6 mb-4 text-red-600">{{ errMsg }}</div>
    <BaseButton>Submit</BaseButton>
  </form>
</template>
