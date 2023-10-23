<script setup lang="ts">
const props = defineProps<{
  name: string;
  modelValue: string;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", params: string): void;
}>();

defineOptions({
  inheritAttrs: false,
});

const id = computed(() => `caisim-input-${props.name}`);

function onInput(e: Event<EventTarget>) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div class="mt-6 first:mt-0">
    <label v-if="label" :for="id" class="block mb-1.5">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :id="id"
      class="border border-neutral-300 rounded-md w-full py-1.5 px-2"
      @input="onInput"
    />
  </div>
</template>
