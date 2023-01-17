import TButton from "./TButton/index.vue";
import TInput from "./TInput/index.vue";
import TTransfer from "./TTransfer/TTransfer.vue";

const components = [TButton, TInput, TTransfer];
const WangUI = {
  install(app: any) {
    components.forEach((component: any) => {
      app.component(component.name, component);
    });
  },
};
export default WangUI;
export { TButton, TInput, TTransfer };
