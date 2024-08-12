import { getChannelInfo } from '../lib/telegram'

export const prerender = false

export async function GET(Astro) {
  const request = Astro.request
  const { SITE_URL } = Astro.locals
  const channel = await getChannelInfo(Astro)
  const posts = channel.posts || []

  const url = new URL(request.url)
  url.pathname = SITE_URL

  const postsIndex = posts.map(item => ({
    slug: `${url.toString()}posts/${item.id}`,
    title: item.title,
    description: item.description,
    tags: item.tags,
    content: item.content,
  }))

  return Response.json(postsIndex)
}
