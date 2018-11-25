import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

describe('Foo.vue', () => {
  it('has a root element with class foo', () => {
    const wrapper = mount(Foo)
    expect(wrapper.is('.foo')).to.equal(true)
  })
})