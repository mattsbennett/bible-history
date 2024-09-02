import * as React from 'react'
import clsx from 'clsx'

import s from './Input.module.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={clsx(s.input, className)} ref={ref} {...props} />
  },
)
Input.displayName = 'Input'

export { Input }
