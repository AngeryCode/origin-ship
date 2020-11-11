import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import Button from './index'

const centerStyle:React.CSSProperties = {
    textAlign: 'center'
}

const centerDecoration = (storyFn: any) => <div style={centerStyle}>{storyFn()}</div>

const defaultButton = () => (
    <Button onClick={action('click')}>defaultButton</Button>
)

const diffrentSizeButton = () => (
    <>
        <Button size="btn-lg" onClick={action('click')}>a large Button</Button>
        <Button size="btn-sm" onClick={action('click')}>a small Button</Button>
    </>
)

const diffrentTypeButton = () => (
    <>
        <Button btnType="danger" onClick={action('click')}>a danger Button</Button>
        <Button btnType="default" onClick={action('click')}>a default Button</Button>
        <Button btnType="link" href="https://www.google.com">a Button with link</Button>
        <Button btnType="primary" onClick={action('click')}>a primary Button</Button>
    </>
)

storiesOf('Button Component', module)
.addDecorator(centerDecoration)
.add('默认的Button', defaultButton)
.add('不同尺寸的Button',diffrentSizeButton)
.add('不同类型的Button',diffrentTypeButton)