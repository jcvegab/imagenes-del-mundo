import { ref, customRef } from "vue";

const debounce = <Params extends any[]>(
  fn: (...args: Params) => any,
  delay = 300,
  immediate = false
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Params) => {
    if (immediate && !timeout) fn(...args);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const useDebouncedRef = <A extends unknown>(
  initialValue: A,
  delay = 300,
  immediate = false
) => {
  const state = ref(initialValue);
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();
      return state.value;
    },
    set: debounce(
      (value) => {
        state.value = value;
        trigger();
      },
      delay,
      immediate
    ),
  }));
  return debouncedRef;
};

export default useDebouncedRef;
