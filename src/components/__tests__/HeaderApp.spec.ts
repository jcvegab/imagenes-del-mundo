import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderApp from '../HeaderApp.vue'

describe('HeaderApp', () => {
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

    // Mock localStorage
    const localStorageMock = (() => {
      let store: Record<string, string> = {}
      return {
        getItem: vi.fn<(key: string) => string | null>((key: string) => store[key] || null),
        setItem: vi.fn<(key: string, value: string) => void>((key: string, value: string) => {
          store[key] = value.toString()
        }),
        clear: vi.fn<() => void>(() => {
          store = {}
        }),
      }
    })()
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    window.localStorage.clear()
  })

  it('renders correctly', () => {
    const wrapper = mount(HeaderApp, {
      props: {
        title: 'Test Title',
      },
      global: {
        stubs: {
          RouterLink: true,
          NavigationItems: true,
          InputSwitch: true,
        },
      },
    })
    expect(wrapper.text()).toContain('Test Title')
  })

  it('toggles theme when switch is changed', async () => {
    const wrapper = mount(HeaderApp, {
      props: {
        title: 'Test Title',
      },
      global: {
        stubs: {
          RouterLink: true,
          NavigationItems: true,
          InputSwitch: {
            template: '<input type="checkbox" @change="$emit(\'change\')" />',
          },
        },
      },
    })

    const inputSwitch = wrapper.find('input[type="checkbox"]')
    await inputSwitch.trigger('change')

    expect(window.localStorage.setItem).toHaveBeenCalled()
  })
})
