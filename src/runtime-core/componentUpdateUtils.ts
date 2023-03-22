export function shouldUpdateComponent(prevVNode, nextVNode) {
  const { props: prevVProps } = prevVNode;
  const { props: nextProps } = nextVNode;

  for (const key in nextProps) {
    if (nextProps[key] !== prevVProps[key]) {
      return true;
    }
  }

  return false;
}
