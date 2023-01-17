<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- vue3页面 -->
  <input
    type="text"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as InputHTMLAttributes).value)
    "
  />
</template>
<script lang="ts" setup name="TInput">
import type { InputHTMLAttributes } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", item: string): void;
}>();

const handleInput = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<style scoped></style>
