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
      <form @submit.prevent="login" class="flex items-center gap-1">
        <BaseInput
          v-model="password"
          name="password"
          type="password"
          :class="errorMsg ? 'border-red-600' : ''"
        />
        <div>
          <BaseButton>Login</BaseButton>
        </div>
      </form>
      <div class="text-xs text-red-600 mt-1 h-4">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>
