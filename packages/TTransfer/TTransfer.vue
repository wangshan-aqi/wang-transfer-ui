<template>
  <div>
    <transfer-selector
      :data="options"
      @selectChange="setTargetIndex"
    ></transfer-selector>
    <div class="transfer-wrap">
      <div
        class="transfer-box transfer-l-list"
        @dragover.prevent
        @drop="removeRightListData([dragItem])"
      >
        <list-title :title="leftTitle"></list-title>
        <div class="left-list-wrap">
          <list-item
            :data="leftListData"
            left-or-right="left"
            @clickCheck="setCheckedData"
            @dragedItem="setDragedItem"
          ></list-item>
        </div>
      </div>
      <button-group
        :leftButtonDisabled="transferButtonDisabled.right"
        @leftButtonClick="removeRightListData(checkedData.right)"
        :rightButtonDisabled="transferButtonDisabled.left"
        @rightButtonClick="addRightListData(checkedData.left)"
      ></button-group>
      <div
        class="transfer-box transfer-r-list"
        @dragover.prevent
        @drop="addRightListData([dragItem])"
      >
        <list-title :title="'已选择机型'"></list-title>
        <div class="left-list-wrap">
          <list-item
            :data="rightListData"
            left-or-right="right"
            @clickCheck="setCheckedData"
            @dragedItem="setDragedItem"
          ></list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="TTransfer">
import TransferSelector from "./components/TransferSelector.vue";
import ListTitle from "./components/ListTitle.vue";
import ListItem from "./components/ListItem.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import propsData from "./extends/props";
import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useDragedItem,
} from "./extends/hooks";

const props = defineProps(propsData);
const options: string[] = props.data.map(({ title }) => title);

const [targetIndex, setTargetIndex] = useTargetIndex(0) as any;

const { checkedData, addCheckedData, removeCheckedData } =
  useCheckedData() as any;

const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
) as any;

const [dragItem, setDragedItem] = useDragedItem() as any;

const [leftTitle, leftListData, transferButtonDisabled] = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
) as any;

const setCheckedData = (checked: boolean, leftOrRight: string, item: any) => {
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
};
</script>

<style scoped lang="scss">
.transfer-wrap {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;
}
.transfer-box {
  width: 120px;
  height: 100%;
}
</style>
