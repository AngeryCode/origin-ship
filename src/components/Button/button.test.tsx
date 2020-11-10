import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, {ButtonProps, ButtonSize, ButtonType} from './index'
const defaultProps  = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    size: ButtonSize.Large,
    btnType: ButtonType.Primary,
    onClick: jest.fn()
}

const linkProps:ButtonProps = {
    btnType: ButtonType.Link,
    href: 'http://www.facebook.com'
}

test('first react test', () => {
    const wrapper = render(<Button>Test</Button>)
    const element = wrapper.findByText('Test')
    expect(element).toBeTruthy()
})

describe('test button components', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Test</Button>)
        const element = wrapper.getByText('Test')
        expect(element).toBeInTheDocument
        fireEvent.click(element)
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(defaultProps.onClick).toHaveBeenCalled
    })
    it('should render the correct components based on diffrent props', () => {
        const wrapper = render(<Button {...testProps}>Test</Button>)
        const element = wrapper.getByText('Test')
        expect(element).toBeInTheDocument
        fireEvent.click(element)
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-primary btn-lg')
        expect(defaultProps.onClick).toHaveBeenCalled
    })
    it('should render a link when btnType toEqual Link and href is provide', () => {
        const wrapper = render(<Button {...linkProps}>Test</Button>)
        const element = wrapper.getByText('Test')
        expect(element).toBeInTheDocument
        fireEvent.click(element)
        expect(element.tagName).toEqual('A')
        expect(defaultProps.onClick).toHaveBeenCalled

    })
    it('should render a disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...testProps} disabled>Test</Button>)
        const element = wrapper.getByText('Test') as HTMLButtonElement
        expect(element).toBeInTheDocument
        fireEvent.click(element)
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-primary btn-lg')
        expect(defaultProps.onClick).not.toHaveBeenCalled
        expect(element.disabled).toBeTruthy
    })

})