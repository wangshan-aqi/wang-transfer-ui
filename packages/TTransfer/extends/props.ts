import type { PropType } from "vue";

// interface DataType {
//   title: string;
//   data: dataTypeItem[];
// }
// interface dataTypeItem {
//   [key: string]: any;
// }
export default {
  data: {
    type: Array as PropType<any[]>,
    default: () => {
      return [];
    },
  },
  transferTitle: {
    type: String,
    default: "",
  },
};
