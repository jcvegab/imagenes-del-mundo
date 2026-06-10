import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import useDebouncedRef from '../useDebouncedRef'

describe('useDebouncedRef', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with the correct value', () => {
    const value = useDebouncedRef('initial')
    expect(value.value).toBe('initial')
  })

  it('should debounce value updates', () => {
    const value = useDebouncedRef('initial', 300)

    value.value = 'updated'
    expect(value.value).toBe('initial')

    vi.advanceTimersByTime(299)
    expect(value.value).toBe('initial')

    vi.advanceTimersByTime(1)
    expect(value.value).toBe('updated')
  })

  it('should update immediately if immediate flag is true', () => {
    const value = useDebouncedRef('initial', 300, true)

    value.value = 'updated'
    expect(value.value).toBe('updated')
  })
})
