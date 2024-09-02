import Contact from './client-page'
import client from '../../../tina/__generated__/client'

export const runtime = "edge";

export default async function ContactPage() {
  const data = await client.queries.otherPages({
    relativePath: 'Contact.md',
  })

  return <Contact {...data}></Contact>
}
