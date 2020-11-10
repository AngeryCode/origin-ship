import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

type themeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
    themeColor?:themeColor
}

const Icon: React.FC<IconProps> = (props) => {
    const {themeColor, className, ...restProps} = props
    const classes = classnames('origin-icon', className, {
        [`color-${themeColor}`]: themeColor
    })
    return (   
      <FontAwesomeIcon className={classes} {...restProps}/>
    )
}

export default Icon