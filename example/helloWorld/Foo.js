import { h } from '../../lib/guide-mini-vue.esm.js';

export const Foo = {
  setup(props, { emit }) {
    const emitAdd = () => {
      console.log('emit add');
      emit('add', 'a', 'lisa');
      emit('add-foo');
    };
    return {
      emitAdd,
    };
  },
  render() {
    const btn = h(
      'button',
      {
        onClick: this.emitAdd,
      },
      'emitAdd'
    );
    const foo = h('div', {}, 'foo: ' + this.count);
    return h('div', {}, [foo, btn]);
  },
};
