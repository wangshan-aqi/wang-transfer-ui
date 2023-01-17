<template>
  <!-- vue3页面 -->
  <div :class="tClass">
    <button>{{ props.text }}<slot></slot></button>
  </div>
</template>

<script setup lang="ts" name="TButton">
import { computed } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "default",
  },
});
const tClass = computed(() => {
  return ["t-button", `t-button-${props.type}`];
});
</script>

<style scoped lang="scss">
.t-button {
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #ddd7d7;
    background: none;
    cursor: pointer;
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
}
.t-button-default {
  button {
    background: #dde6eb;
  }
}
.t-button-success {
  button {
    background: #00ff59;
  }
}
.t-button-warning {
  button {
    background: #ffff00;
  }
}
.t-button-error {
  button {
    background: #ff2600;
  }
}
</style>
