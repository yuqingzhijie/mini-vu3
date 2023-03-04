import { h } from '../../lib/guide-mini-vue.esm.js';
import { Foo } from './Foo.js';

window.self = null;
export const App = {
  // .vue
  // <template></template>
  // render
  render() {
    // ui
    window.self = this;
    return h(
      'div',
      {
        id: 'root',
        class: ['red', 'hard'],
        onClick() {
          console.log('click');
        },
        onMousedown() {
          console.log('mouse dome');
        },
      },
      [h('div', {}, 'hi, ' + this.msg), h(Foo, { count: 1 })]
      // 'hi, ' + this.msg
      // string
      // "hi, mini-vue"
      // array
      // [h('p', { class: 'red' }, 'hello'), h('p', { class: 'blue' }, 'vue3')]
    );
  },

  setup() {
    return {
      msg: 'mini-vue3',
    };
  },
};
