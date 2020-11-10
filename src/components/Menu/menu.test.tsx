import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import Menu, { MenuProps } from './Menu'
import MenuItem, { MenuItemProps } from './MenuItem'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={'0'}>active</MenuItem>
      <MenuItem index={'2'} disabled>
        disabled
      </MenuItem>
      <MenuItem index={'3'}>other</MenuItem>
    </Menu>
  )
}

let wrapper:RenderResult,wrapper2:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement

describe('test Menu should render default mode', () => {
    beforeEach(()=> {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })

    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('test origin-menu')
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })

    it('click items should change active and call the right callback', () => {
        const otherItem = wrapper.getByText('other')
        fireEvent.click(otherItem)
        expect(otherItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalled()
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
    })
})

describe('test Menu should render vertical mode', () => {
    beforeEach(()=> {
        wrapper2 = render(generateMenu(testVerticalProps))
    })
    it('should render vertical mode when mode set to vertical', () => {
        const menuElement = wrapper2.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
})
