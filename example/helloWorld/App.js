import { h } from '../../lib/guide-mini-vue.esm.js';

export const App = {
  // .vue
  // <template></template>
  // render
  render() {
    // ui
    return h(
      'div',
      {
        id: 'root',
        class: ['red', 'hard'],
      },
      // 'hi, ' + this.msg
      // string
      // "hi, mini-vue"
      // array
      [h('p', { class: 'red' }, 'hello'), h('p', { class: 'blue' }, 'vue3')]
    );
  },

  setup() {
    return {
      msg: 'mini-vue',
    };
  },
};
