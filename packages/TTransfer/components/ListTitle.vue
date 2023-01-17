<template>
  <h1 class="list-title">{{ title }}</h1>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    defalut: "",
    required: true,
  },
});
</script>

<style scoped lang="scss">
.list-title {
  display: flex;
  height: 38px;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-bottom: 1px solid #ddd;
  background-color: #eee;
  font-size: 14px;
}
</style>
