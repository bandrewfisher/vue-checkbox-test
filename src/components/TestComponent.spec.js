import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent.vue', () => {

  it('fills in the input', ()=>{
    var wrapper = mount(TestComponent)
    wrapper.find('.inputTest').setValue("Hello, world!")

    expect(wrapper.vm.textVal).to.equal("Hello, world!")
  })

  it('programatically checks the box', ()=>{
    var wrapper = mount(TestComponent)
    wrapper.find('.checkboxTest').setChecked(true)

    expect(wrapper.vm.cbVal).to.equal(true)
  })
})
