import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavigationItems from '../NavigationItems.vue'

describe('NavigationItems', () => {
  it('renders correctly with routes', () => {
    const mockItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]

    const wrapper = mount(NavigationItems, {
      props: {
        items: mockItems,
      },
      global: {
        stubs: {
          RouterLink: {
            template: '<a :href="to"><slot /></a>',
            props: ['to'],
          },
        },
      },
    })

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
    expect(links[0]!.text()).toBe('Home')
    expect(links[0]!.attributes('href')).toBe('/')
    expect(links[1]!.text()).toBe('About')
    expect(links[1]!.attributes('href')).toBe('/about')
  })
})
