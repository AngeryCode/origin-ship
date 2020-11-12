import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react'
import classnames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/Icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prepend?: string | ReactElement
  append?: string | ReactElement,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
  const { className, disabled, size, icon, prepend, append, ...restProps } = props
  const classes = classnames('origin-input', className, {
    'is-disabled': disabled,
    [`btn-${size}`]: size
  })
  const fixControllVal = (value:any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete  restProps.defaultValue
    restProps.value = fixControllVal(props.value)
  }
  const renderChildren = () => {
    if (icon) {
      if (prepend && append) {
        return (
          <div className="origin-input-with-pend">
            <div className="prepend">{prepend}</div>
            <div className="origin-input-wrapper">
              <input className={classes} disabled={disabled} {...restProps} />
              <Icon icon={icon}></Icon>
            </div>
            <div className="append">{append}</div>
          </div>
        )
      }
      if (prepend) {
        return (
          <div className="origin-input-with-pend">
            <div className="prepend">{prepend}</div>
            <div className="origin-input-wrapper">
              <input className={classes} disabled={disabled} {...restProps} />
              <Icon icon={icon}></Icon>
            </div>
          </div>
        )
      }
      if (append) {
        return (
          <div className="origin-input-with-pend">
            <div className="origin-input-wrapper">
              <input className={classes} disabled={disabled} {...restProps} />
              <Icon icon={icon}></Icon>
            </div>
            <div className="append">{append}</div>
          </div>
        )
      }
      return (
        <div className="origin-input-with-pend">
          <div className="origin-input-wrapper">
            <input className={classes} disabled={disabled} {...restProps} />
            <Icon icon={icon}></Icon>
          </div>
        </div>
      )
    } else {
      if (prepend && append) {
        return (
          <div className="origin-input-with-pend">
            <div className="prepend">{prepend}</div>
            <div className="origin-input-wrapper">
              <input className={classes} disabled={disabled} {...restProps} />
            </div>
            <div className="append">{append}</div>
          </div>
        )
      }
      if (prepend) {
        return (
          <div className="origin-input-with-pend">
            <div className="prepend">{prepend}</div>
            <div className="origin-input-wrapper">
              <input className={classes} disabled={disabled} {...restProps} />
            </div>
          </div>
        )
      }
      if (append) {
        return (
          <div className="origin-input-with-pend">
            <div className="origin-input-wrapper">
              <input className={classes} disabled={disabled} {...restProps} />
            </div>
            <div className="append">{append}</div>
          </div>
        )
      }
      return <input className={classes} disabled={disabled} {...restProps} />
    }
  }
  return <>{renderChildren()}</>
}

export default Input
