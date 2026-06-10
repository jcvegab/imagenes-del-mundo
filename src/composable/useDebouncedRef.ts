import { ref, customRef } from 'vue'

const debounce = <Params extends unknown[]>(
  fn: (...args: Params) => void,
  delay = 300,
  immediate = false,
) => {
  let timeout: ReturnType<typeof setTimeout> | undefined

  return (...args: Params) => {
    const callNow = immediate && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = undefined
      if (!immediate) fn(...args)
    }, delay)

    if (callNow) fn(...args)
  }
}

export const useDebouncedRef = <A>(initialValue: A, delay = 300, immediate = false) => {
  const state = ref(initialValue)

  const setDebounced = debounce(
    (value: A) => {
      state.value = value
    },
    delay,
    immediate,
  )

  return customRef<A>((track, trigger) => ({
    get() {
      track()
      return state.value
    },
    set(value) {
      setDebounced(value)
      trigger()
    },
  }))
}

export default useDebouncedRef
