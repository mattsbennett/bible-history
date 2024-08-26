'use client'

import { List } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger } from './Select'

import {events} from '../events'
import s from './NavSelect.module.scss'
import slugify from '@sindresorhus/slugify'

export default function NavSelect() {
    const onValueChange = (value: string) => {
        const element = document.getElementById(slugify(value))
        if (element) {
            element.scrollIntoView()
        }
    }
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={s.selectTrigger}>
        <List size={28} />
      </SelectTrigger>
      <SelectContent>
        {events.map((event) => (
          <SelectItem key={slugify(event.name)} value={event.name} className={s.item}>
            {event.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
