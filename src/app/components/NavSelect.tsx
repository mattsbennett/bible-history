'use client'

import { List } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger } from './Select'

import { Event, events } from '../events'
import s from './NavSelect.module.scss'
import slugify from '@sindresorhus/slugify'
import { getFormattedYear } from '../utils/generalUtils'

export default function NavSelect({ event }: { event: Event }) {
  const onValueChange = (value: string) => {
    const element = document.getElementById(slugify(value))
    if (element) {
      element.scrollIntoView()
    } else if (value === 'top') {
      window.scrollTo({ top: 0 })
    }
  }
  const filteredEvents = events.filter((e) => {
    return e.name !== event.name
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
          <SelectItem key={slugify(event.name)} value={event.name} className={s.item}>
            {event.name} <em>{getFormattedYear(event.dated)}</em>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
