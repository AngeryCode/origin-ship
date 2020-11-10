import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom'

type TransitionProps = CSSTransitionProps & {
  animationName?: AnimationName,
  wrapper?: boolean
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { classNames, children, animationName, wrapper, ...resetProps } = props

  return (
    <CSSTransition
      classNames={animationName ? animationName : classNames}
      {...resetProps}
    >
        {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
    wrapper: false
}

export default Transition
