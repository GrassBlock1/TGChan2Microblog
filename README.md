# TGChan2Microblog

**Turn your Telegram Channel into a MicroBlog.**

---

English | [简体中文](./README.zh-cn.md)

## ✨ Features

- **Turn your Telegram Channel into a MicroBlog**
- **SEO friendly** `/sitemap.xml`
- ~~**0 JS on the browser side**~~(Telegram Search Sucks... so I have to use Google's search engine)
- **RSS and RSS JSON** `/rss.xml` `/rss.json`

This fork provides:

- Enhanced search experience (**Fuse.js** fuzzy search + Google Programmable Search Engine, see FAQ)
- Dark mode following system/browser settings

## 🪧 Demo

### Real users

- [m1cr0b10g@GB](https://gb-microblog.pages.dev/)

### Platform

1. [Cloudflare](https://broadcast-channel.pages.dev/)
2. [Netlify](https://broadcast-channel.netlify.app/)
3. [Vercel](https://broadcast-channel.vercel.app/)

TGChan2Microblog supports deployment on serverless platforms like Cloudflare, Netlify, Vercel that support Node.js SSR, or on a VPS.
For detailed tutorials, see [Deploy your Astro site](https://docs.astro.build/en/guides/deploy/).

## 🧱 Tech Stack

- Framework: [Astro](https://astro.build/)
- CMS: [Telegram Channels](https://telegram.org/tour/channels)
- Template: [Sepia](https://github.com/Planetable/SiteTemplateSepia)

## 🏗️ Deployment

1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) this project to your GitHub
2. Create a project on Cloudflare/Netlify/Vercel
3. Select the `BroadcastChannel` project and the `Astro` framework
4. Configure the environment variable `CHANNEL` with your channel name and configure `GOOGLE_CSE_CODE` with Google's Search Engine ID . This is the minimal configuration, for more configurations see the options below
5. Save and deploy
6. Bind a domain (optional).
7. Update code, refer to the official GitHub documentation [Syncing a fork branch from the web UI](https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui).

## ⚒️ Configuration

```env
## Telegram Channel Username, must be configured. The string of characters following t.me/
CHANNEL=miantiao_me

## Language and timezone settings, language options see [dayjs](https://github.com/iamkun/dayjs/tree/dev/src/locale)
LOCALE=en
TIMEZONE=America/New_York

## Social media usernames
TELEGRAM=ccbikai
TWITTER=ccbikai
GITHUB=ccbikai
MASTODON=mastodon.social/@Mastodon
BLUESKY=bsky.app

## The following two social media need to be URLs
DISCORD=https://DISCORD.com
PODCAST=https://PODCAST.com

## Header and footer code injection, supports HTML
FOOTER_INJECT=FOOTER_INJECT
HEADER_INJECT=HEADER_INJECT

## SEO configuration options, can prevent search engines from indexing content
NO_FOLLOW=false
NO_INDEX=false

## Google Programming Search Engine Code, can be used to search for content on the site, grab it from https://programmablesearchengine.google.com and copy the code in 'cx' parameter
GOOGLE_CSE_CODE=xxxx

## Sentry configuration options, collect server-side errors
SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN
SENTRY_DSN=SENTRY_DSN
SENTRY_PROJECT=SENTRY_PROJECT

## Telegram host name and static resource proxy, not recommended to modify
HOST=telegram.dog
STATIC_PROXY=
```

## 🙋🏻 FAQs

1. Why is the content empty after deployment?
   - Check if the channel is public, it must be public
   - The channel username is a string, not a number
   - Turn off the "Restricting Saving Content" setting in the channel
   - Redeploy after modifying environment variables
   - Telegram blocks public display of some sensitive channels, you can verify by visiting `https://t.me/s/channelusername`.
2. Why can't I search for some content?
   > Because Telegram's channel public display page by default only loads one page (about a dozen) of content each time, so the Fuse.js search can only search the last dozen or so pieces of content for now, so it's a bit better than the original search, but not much.
   >
   > Although I also tried to directly recursively get all the content, but because of limited technical level, I finally gave up.
   >
   > In the past two days, I found a possible solution when looking at the issue, which is to use Google search to solve it. Then I found that "Programmable Search Engine" can be embedded in the website, so I changed it to this overnight, it simply works but you may need to submit the website to Google's index to achieve the best effect.
