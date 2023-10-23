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
  <BaseLayout title="Add New Item">
    <template #actions>
      <NuxtLink
        to="/"
        class="rounded-md hover:bg-neutral-100 border border-neutral-300 px-4 py-1"
      >
        Back
      </NuxtLink>
    </template>
    <form @submit.prevent="addProduct">
      <BaseInput type="text" name="name" label="Name" v-model="form.name" />
      <BaseInput type="text" name="price" label="Price" v-model="form.price" />
      <BaseInput type="text" name="store" label="Store" v-model="form.store" />
      <div class="py-4 text-red-600">{{ errMsg }}</div>
      <BaseButton>Submit</BaseButton>
    </form>
  </BaseLayout>
</template>
