import { h, renderSlots } from '../../lib/guide-mini-vue.esm.js';

export const Foo = {
  setup(props, { emit }) {
    return {};
  },
  render() {
    const foo = h('p', {}, 'foo');

    // Foo .vnode .children
    console.log(this.$slots);

    // children -> vnode
    // renderSlots
    // 具名插槽
    // 1、获取到要渲染的元素
    // 2、获取要渲染的位置
    // 作用域插槽
    const age = 18;
    return h('div', {}, [renderSlots(this.$slots, 'header', { age: 18 }), foo, renderSlots(this.$slots, 'footer')]);
  },
};
