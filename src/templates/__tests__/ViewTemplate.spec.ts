import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ViewTemplate from '../ViewTemplate.vue'

describe('ViewTemplate', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(ViewTemplate, {
      global: {
        stubs: {
          RouterView: true,
          FooterApp: true,
        },
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'FooterApp' }).exists()).toBe(true)
  })
})
