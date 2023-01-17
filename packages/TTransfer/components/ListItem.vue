<template>
  <div
    class=""
    v-for="item of data"
    :key="item.id"
    :class="['list-item', item.disabled ? 'disabled' : '']"
    :draggable="!item.disabled"
    @dragstart="dragedItem(item)"
  >
    <input
      type="checkbox"
      :disabled="item.disabled"
      :id="'__checkbox__' + item.id"
      class="checkbox-item"
      @click="
        clickCheck(
          ($event.target as HTMLInputElement).checked,
          leftOrRight,
          item
        )
      "
    />
    <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  data: any[];
  leftOrRight: "left" | "right";
}
withDefaults(defineProps<Props>(), {
  data: () => [],
  leftOrRight: "left",
});

const emit = defineEmits<{
  (e: "clickCheck", checked: boolean, leftOrRight: string, item: any): void;
  (e: "dragedItem", item: any): void;
}>();

const clickCheck = (checked: boolean, leftOrRight: string, item: any) => {
  emit("clickCheck", checked, leftOrRight, item);
};
const dragedItem = (item: any) => {
  emit("dragedItem", item);
};
</script>

<style scoped lang="scss">
.list-item {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #333;
  height: 100%;
  height: 28px;
  line-height: 28px;
  &:disabled {
    opacity: 0.6;
  }
  .checkbox-item input[type="checkbox"]:checked {
    background-color: #87bd5a;
  }
}
</style>
