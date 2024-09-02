'use server'

import { formDataToJson } from './utils/generalUtils'
import { contactFormSchema } from './validation'
import { ZodError } from 'zod'

export type State =
  | {
      status: 'success'
      message: string
    }
  | {
      status: 'error'
      message: string
      errors?: Array<{
        path: string
        message: string
      }>
    }
  | null

export async function sendMessage(data: FormData): Promise<State> {
  try {
    let responseMessage = ''
    let isSuccess = false
    const { email, name, message } = formDataToJson(data)
    // Add the access key to the form data
    const values = { email, name, message }

    // Validate the form data (will throw if invalid)
    contactFormSchema.parse(values)

    const submission = { email, name, message, access_key: process.env.WEB_3_FORMS_KEY }

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submission, null, 2),
    })
      .then(async (response) => {
        let json = await response.json()
        isSuccess = json.success ? true : false
        responseMessage = json.message
      })
      .catch((error) => {
        isSuccess = false
        responseMessage = 'Client Error. Please check the console.log for more info'
        console.log(error)
      })

    return {
      status: isSuccess ? 'success' : 'error',
      message: responseMessage,
    }
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: 'error',
        message: 'Invalid form data.',
        errors: e.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: `Server validation: ${issue.message}`,
        })),
      }
    }
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
    }
  }
}
