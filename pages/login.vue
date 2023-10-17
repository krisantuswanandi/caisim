<script setup lang="ts">
const router = useRouter();

const password = ref("");
const errorMsg = ref("");

async function login() {
  const { error } = await useFetch("/api/login", {
    method: "POST",
    body: { password: password.value },
  });

  if (error.value) {
    errorMsg.value = error.value?.statusMessage || "";
    setTimeout(() => {
      errorMsg.value = "";
    }, 1500);
    return;
  }

  router.push("/");
}
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div>
      <div class="flex items-center">
        <form @submit.prevent="login">
          <input
            v-model="password"
            type="password"
            class="border border-black rounded-md w-48 h-8 px-2 text-sm"
            :class="errorMsg ? 'border-red-600' : ''"
          />
          <button
            class="bg-neutral-900 rounded-md w-16 h-8 ml-1 text-white text-xs"
          >
            Login
          </button>
        </form>
      </div>
      <div class="text-xs text-red-600 mt-1 h-4">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>
