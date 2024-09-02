'use client'

import { List } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger } from './Select'

import s from './NavSelect.module.scss'
import slugify from '@sindresorhus/slugify'
import { getFormattedYear } from '../utils/generalUtils'
import { Events } from '../../../tina/__generated__/types'

export default function NavSelect({ event, events }: { event: Events; events: Events[] }) {
  if (!event) {
    return null
  }

  const onValueChange = (value: string) => {
    const element = document.getElementById(slugify(value))
    if (element) {
      element.scrollIntoView()
    } else if (value === 'top') {
      window.scrollTo({ top: 0 })
    }
  }
  const filteredEvents = events.filter((e) => {
    return e.title !== event.title
  })
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={s.selectTrigger}>
        <List size={28} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem key="top" value="top" className={s.item}>
          <strong>Top of page</strong>
        </SelectItem>
        {filteredEvents.map((event) => (
          <SelectItem key={slugify(event.title)} value={event.title} className={s.item}>
            {event.title} <em>{getFormattedYear(new Date(parseInt(event.dated, 10), 1))}</em>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
