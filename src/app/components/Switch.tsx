'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { Icon } from 'lucide-react'
import clsx from 'clsx'

import s from './Switch.module.scss'

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
  icon?: React.ReactNode
}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, icon, ...props }, ref) => (
    <SwitchPrimitives.Root className={clsx(s.switch, className)} {...props} ref={ref}>
      <SwitchPrimitives.Thumb className={s.thumb}>
        {icon && <span className={s.icon}>{icon}</span>}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  ),
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
