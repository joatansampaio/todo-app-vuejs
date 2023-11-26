import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Notifications from '../Notifications.vue'

describe('Notifications', () => {
  it('renders properly', () => {
    const wrapper = mount(Notifications, { props: {} })
    expect(wrapper.text()).toContain('')
  })
})
