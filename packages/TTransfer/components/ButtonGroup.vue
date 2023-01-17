<template>
  <div class="transfer-box transfer-group">
    <div class="transfer-btn-box">
      <button
        class="transfer-l-btn transfer-btn"
        :disabled="leftButtonDisabled"
        @click="leftButtonClick"
      >
        &lt;
      </button>
    </div>
    <div class="transfer-btn-box">
      <button
        class="transfer-r-btn transfer-btn"
        :disabled="rightButtonDisabled"
        @click="rightButtonClick"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  leftButtonDisabled: {
    type: Boolean,
    defalut: false,
  },
  rightButtonDisabled: {
    type: Boolean,
    defalut: false,
  },
});

const emit = defineEmits<{
  (e: "leftButtonClick"): void;
  (e: "rightButtonClick"): void;
}>();
const leftButtonClick = () => {
  emit("leftButtonClick");
};
const rightButtonClick = () => {
  emit("rightButtonClick");
};
</script>

<style scoped lang="scss">
.transfer-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.transfer-btn-box {
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.transfer-btn {
  width: 80%;
  height: 38px;
  background-color: #c6eea5;
  border-radius: 4px;
  border-width: 0;
  &:disabled {
    opacity: 0.6;
  }
}
// .checkbox-item::before {
//   color: #87bd5a;
// }

.transfer-btn:hover {
  background-color: #87bd5a;
}
.transfer-btn:hover {
  background-color: #87bd5a;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.24), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
}
</style>
