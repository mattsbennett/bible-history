'use client'

import { z, ZodError } from 'zod'
import { useTina } from 'tinacms/dist/react'
import { OtherPagesQuery } from '../../../tina/__generated__/types'
import Header from '../components/Header'
import styles from './client-page.module.scss'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { useEffect, useState } from 'react'
import { FieldPath, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/Form'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { Button } from '../components/Button'
import { sendMessage, State } from '../actions'
import { useFormState } from 'react-dom'
import { contactFormSchema } from '../validation'

interface ContactProps {
  query: string
  variables: {
    relativePath: string
  }
  data: OtherPagesQuery
}

export interface FormValues {
  name: string
  email: string
  message: string
}

export default function Contact(props: ContactProps) {
  const { data: pageData } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data.otherPages,
  })
  const [state, formAction] = useFormState<State, FormData>(sendMessage, null)
  const [responseMessage, setResponseMessage] = useState('')
  const [isPending, setIsPending] = useState(false)
  const form = useForm<z.infer<typeof contactFormSchema>>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactFormSchema),
  })
  const getTriggerHandlers = (field: FieldPath<FormValues>) => ({
    onFocus: () => {
      form.clearErrors(field)
    },
    onClick: () => {
      form.clearErrors(field)
    },
    onInput: () => {
      if (form.formState.errors.name) {
        form.trigger(field)
      } else {
        form.clearErrors(field)
      }
    },
  })
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      contactFormSchema.parse(form.getValues())
    } catch (e) {
      if (e instanceof ZodError) {
        e.errors.forEach((error) => {
          form.setError(error.path[0] as FieldPath<FormValues>, {
            message: error.message,
          })
        })
        event.preventDefault()
        return
      }
    }

    setIsPending(true)
    formAction(new FormData(event.currentTarget))
  }

  useEffect(() => {
    if (!state) {
      return
    }

    setIsPending(false)

    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        form.setError(error.path as FieldPath<FormValues>, {
          message: error.message,
        })
      })
    }
    if (state.status === 'success') {
      setResponseMessage(state.message)
      form.reset()
    }
  }, [state, form])

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.contact}>
        <h1 className={styles.heading}>{pageData.title}</h1>
        <TinaMarkdown content={pageData.body} />
      </section>
      <section className={styles.form}>
        <Form {...form}>
          <form action={formAction} onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} {...getTriggerHandlers('name')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.address"
                      {...field}
                      {...getTriggerHandlers('email')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} {...getTriggerHandlers('message')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="outline" disabled={isPending}>
              {isPending ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </Form>
        <span className={styles.response}>{responseMessage}</span>
      </section>
    </main>
  )
}
