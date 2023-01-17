import { ref, computed, reactive } from "vue";

/**
 * 下拉选择 选择数据
 * @param initialIndex 初始化选择的下拉内容
 * @returns [targetIndex, setTargetIndex]
 */
export function useTargetIndex(initialIndex: number | string) {
  const targetIndex = ref(initialIndex);

  function setTargetIndex(newIndex: number | string) {
    // console.log(event);
    targetIndex.value = Number(newIndex);
  }

  return [targetIndex, setTargetIndex];
}

/**
 * 右侧列表渲染hooks
 * @param initialData
 * @param checkedData
 * @returns
 */
export function useRightListData(
  initialData: any[],
  checkedData: CheckedDataType
) {
  // 初始化右侧列表
  const rightListData = ref(initialData);
  // 添加 左侧列表勾选
  function addRightListData(newData: any[]) {
    rightListData.value = [...rightListData.value, ...newData];
    // 清空 左侧选择的暂存区内容
    checkedData.left = [];
  }

  // 删除 右侧列表勾选
  function removeRightListData(newData: any[]) {
    newData.forEach((newItem) => {
      rightListData.value = rightListData.value.filter(
        ({ id }) => newItem.id !== id
      );
    });
    // 清空 右侧选择的暂存区内容
    checkedData.right = [];
  }
  return [rightListData, addRightListData, removeRightListData];
}

/**
 * 计算列表渲染内容 和 对应的列表title 以及按钮禁用状态
 * @param data 所有数据
 * @param targetIndex 下拉框选择的下标
 * @param rightListData 右侧列表要渲染的内容
 * @param checkedData 勾选内容暂存区
 * @returns
 */
export function useComputedData(
  data: any[],
  targetIndex: any,
  rightListData: any,
  checkedData: CheckedDataType
) {
  const leftTitle = computed(() => data[targetIndex.value].title);
  // 左侧列表
  const leftListData = computed(() => {
    const { data: currentData } = data[targetIndex.value];
    return currentData.filter((item: any) => {
      if (!rightListData.value.find((v: any) => item.id === v.id)) {
        return item;
      }
    });
  });

  const transferButtonDisabled = computed(() => ({
    left: checkedData.left.length === 0,
    right: checkedData.right.length === 0,
  }));

  return [leftTitle, leftListData, transferButtonDisabled];
}

export interface CheckedDataType {
  left: any[];
  right: any[];
}
type UseCheckedDataType = {
  checkedData: CheckedDataType;
  addCheckedData: (leftOrRight: string, item: any) => void;
  removeCheckedData: (leftOrRight: string, id: any) => void;
};
/**
 * 判断是 左侧勾选 还是右侧勾选 然后放到暂存区
 * @returns 抛出 暂存区内容，添加暂存区方法，和删除暂存区方法
 */
export function useCheckedData(): UseCheckedDataType {
  const checkedData = reactive<CheckedDataType>({
    left: [],
    right: [],
  });
  function addCheckedData(leftOrRight: string, item: any) {
    switch (leftOrRight) {
      case "left":
        checkedData.left.push(item);
        break;
      case "right":
        checkedData.right.push(item);
        break;
      default:
        break;
    }
  }

  function removeCheckedData(leftOrRight: string, id: number) {
    switch (leftOrRight) {
      case "left":
        checkedData.left = checkedData.left.filter((item) => item.id !== id);
        break;
      case "right":
        checkedData.right = checkedData.right.filter((item) => item.id !== id);
        break;
      default:
        break;
    }
  }

  return { checkedData, addCheckedData, removeCheckedData };
}

export function useDragedItem() {
  const dragedItem = ref(null);

  function setDragedItem(item: any) {
    dragedItem.value = item;
  }

  return [dragedItem, setDragedItem];
}
