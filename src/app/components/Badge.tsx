import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import s from './Badge.module.scss'

const badgeVariants = cva(s.common, {
  variants: {
    variant: {
      default: s.default,
      outline: s.outline,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={clsx(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
