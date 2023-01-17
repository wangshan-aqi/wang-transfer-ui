<template>
  <select @change="selectChange(($event.target as SelectHTMLAttributes).value)">
    <!-- @change="setTargetIndex(($event.target as SelectHTMLAttributes).value)" -->
    <option v-for="(title, index) of props.data" :key="index" :value="index">
      {{ title }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import type { SelectHTMLAttributes } from "vue";
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["selectChange"]);

const selectChange = (value: any) => {
  emit("selectChange", value);
};
</script>

<style scoped lang="scss"></style>
