// 组件 provide 和 inject 功能
import { h, inject, provide } from '../../lib/guide-mini-vue.esm.js';

const Provider = {
  name: 'provider',
  setup() {
    provide('foo', 'fooVal');
    provide('bar', 'barVal');
  },
  render() {
    return h(ProviderTwo);
  },
};

const ProviderTwo = {
  setup() {
    // override parent value
    provide('foo', 'fooOverride');
    // provide('baz', 'baz');
    const foo = inject('foo');
    // 这里获取的 foo 的值应该是 "foo"
    // 这个组件的子组件获取的 foo ，才应该是 fooOverride
    if (foo !== 'fooVal') {
      throw new Error('Foo should equal to foo');
    }
  },
  render() {
    return h(Consumer);
  },
};

const Consumer = {
  name: 'Consumer',
  setup() {
    const foo = inject('foo');
    const bar = inject('bar');
    const baz = inject('baz', 'bazDefault');

    return {
      foo,
      bar,
      baz,
    };
  },
  render() {
    return h('div', {}, `${this.foo}-${this.bar}-${this.baz}`);
  },
};

export default {
  name: 'App',
  setup() {
    //
  },
  render() {
    return h(Provider);
  },
};
