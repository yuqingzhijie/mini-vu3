import { ref } from '../../lib/guide-mini-vue.esm.js';

const App = {
  name: 'App',
  template: '<div>hi,{{message}}</div>',
  setup() {
    const message = (window.message = ref(1));
    return {
      message: message,
    };
  },
};

export default App;
