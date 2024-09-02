import * as React from 'react'
import clsx from 'clsx'

import s from './Textarea.module.scss'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return <textarea className={clsx(s.textarea, className)} ref={ref} {...props} />
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
