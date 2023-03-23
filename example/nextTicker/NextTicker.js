// 测试 nextTick 逻辑
import { getCurrentInstance, h, nextTick, ref } from '../../lib/guide-mini-vue.esm.js';

export default {
  name: 'NextTicker',
  setup() {
    const count = ref(1);
    const instance = getCurrentInstance();

    async function onClick() {
      for (let i = 0; i < 100; i++) {
        console.log('update');
        count.value = i;
      }

      console.log(instance);
      nextTick(() => {
        console.log(instance);
      });

      await nextTick();
      console.log(instance);
    }

    return {
      onClick,
      count,
    };
  },
  render() {
    const button = h('button', { onClick: this.onClick }, 'update');
    const p = h('p', {}, 'count: ' + this.count);

    return h('div', {}, [button, p]);
  },
};
