import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import FooterApp from '../FooterApp.vue'

describe('FooterApp', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(FooterApp, {
      props: {
        title: 'Test Footer Title',
      },
      global: {
        stubs: {
          NavigationItems: true,
        },
      },
    })

    expect(wrapper.text()).toContain('Test Footer Title')
    expect(wrapper.text()).toContain(new Date().getFullYear().toString())
  })
})
