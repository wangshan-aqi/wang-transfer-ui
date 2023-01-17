<template>
  <t-button type="success">测试</t-button>
  <t-input v-model="text"></t-input>
  <t-transfer :data="datas"></t-transfer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { datas } from "../packages/TTransfer/datas";
// import { TButton } from "../packages/index";
const text = ref<string>("");
</script>

<style scoped lang="scss"></style>
