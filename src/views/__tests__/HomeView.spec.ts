import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () =>
          Promise.resolve({
            items: [
              {
                title: 'Test Image',
                link: 'http://test.com/img.jpg',
                image: {
                  thumbnailLink: 'http://test.com/thumb.jpg',
                },
              },
            ],
          }),
      }),
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders properly and fetches initial images', async () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          InputText: true,
          Image: true,
        },
      },
    })

    // Wait for the mounted hook to complete fetching
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(wrapper.exists()).toBe(true)
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('Startups'))
  })

  it('fetches images when search changes', async () => {
    vi.useFakeTimers()
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          InputText: true,
          Image: true,
        },
      },
    })

    // Clear the first call from onMounted
    vi.mocked(global.fetch).mockClear()
    ;(wrapper.vm as unknown as { search: string }).search = 'Nature'

    // Avanzamos el tiempo para el debounced ref (600ms)
    vi.advanceTimersByTime(600)
    await wrapper.vm.$nextTick()

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('Nature'))
    vi.useRealTimers()
  })
})
