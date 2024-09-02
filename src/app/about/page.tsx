import About from './client-page'
import client from '../../../tina/__generated__/client'

export const runtime = "edge";

export default async function AboutPage() {
  const data = await client.queries.otherPages({
    relativePath: 'About.md',
  })

  return <About {...data}></About>
}
