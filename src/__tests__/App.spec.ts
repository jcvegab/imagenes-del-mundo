import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn<(query: string) => unknown>().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn<(...args: unknown[]) => void>(),
      removeListener: vi.fn<(...args: unknown[]) => void>(),
      addEventListener: vi.fn<(...args: unknown[]) => void>(),
      removeEventListener: vi.fn<(...args: unknown[]) => void>(),
      dispatchEvent: vi.fn<(...args: unknown[]) => boolean>(),
    })),
  })
})

afterEach(() => {
  vi.restoreAllMocks()
})

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterLink: true,
          RouterView: true,
          InputSwitch: true,
        },
      },
    })
    expect(wrapper.text()).toContain('Imágenes del mundo')
  })
})
