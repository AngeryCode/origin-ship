import React from "react";
import classNames from 'classnames' 


export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
export type ButtonSize = 'btn-lg' | 'btn-sm'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, size, btnType, children, href, className, ...restProps } = props;
  const classes = classNames('btn', className , {
      [`btn-${btnType}`]: btnType,
      [`${size}`]: size,
      [`disabled`]: disabled
  })
  if (btnType === 'link' && href) {
    return (
        <a href={href} className={classes} {...restProps}>{children}</a>
    )
  } else {
    return <button
    className={classes}
    disabled={disabled}
    {...restProps}
    >
        {children}
    </button>;
  }
};

Button.defaultProps = {
    disabled: false,
    btnType: 'default' 
}

export default Button