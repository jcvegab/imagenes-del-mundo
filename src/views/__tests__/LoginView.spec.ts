import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginView from '../LoginView.vue'

describe('LoginView', () => {
  it('renders properly', () => {
    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          InputText: true,
          Button: true,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('shows form error alert when submitting empty form', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          InputText: true,
          Button: true,
        },
      },
    })

    await wrapper.find('form').trigger('submit')

    // Wait for validation to resolve
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(alertMock).toHaveBeenCalledWith('Form error!')
    alertMock.mockRestore()
  })

  it('shows success alert when form is valid', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          InputText: true,
          Button: true,
        },
      },
    })

    const inputs = wrapper.findAllComponents({ name: 'InputText' })
    await inputs[0]!.vm.$emit('update:modelValue', 'testuser')
    await inputs[1]!.vm.$emit('update:modelValue', 'test@example.com')
    await inputs[2]!.vm.$emit('update:modelValue', 'password123')
    await inputs[3]!.vm.$emit('update:modelValue', 'password123')

    await wrapper.find('form').trigger('submit')

    // Wait for vuelidate
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(alertMock).toHaveBeenCalledWith('Form successfully submitted!')
    alertMock.mockRestore()
  })
})
