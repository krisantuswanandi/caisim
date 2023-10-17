<script setup lang="ts">
const props = defineProps<{
  name: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", params: string): void;
}>();

const id = computed(() => `caisim-input-${props.name}`);

function onInput(e: Event<EventTarget>) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div class="mb-4">
    <label :for="id" class="text-sm font-bold">{{ name }}</label>
    <input
      :value="modelValue"
      :id="id"
      class="border border-black rounded-md w-full py-1 px-2"
      @input="onInput"
    />
  </div>
</template>
