
export const App = {
  // .vue
  // <template></template>
  // render
  render() {
    // ui
    return h("div", "hi, " + this.msg);
  },

  setup() {
    return {
      msg: 'mini-vue'
    };
  }
}