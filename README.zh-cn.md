# TGChan2Microblog

**将你的 Telegram Channel 转为微博客。**

---

[English](./README.md) | 简体中文

## ✨ 特性

- **将 Telegram Channel 转为微博客**
- **SEO 友好** `/sitemap.xml`
- ~~**浏览器端 0 JS**~~（Telegram 搜索太烂了... 所以我不得不用 Google 的搜索引擎）
- **提供 RSS 和 RSS JSON** `/rss.xml` `/rss.json`

这个 fork 提供了：

- 增强的搜索体验（**Fuse.js** 模糊搜索 + Google 可编程搜索引擎）（施工中，详见 FAQ）
- 跟随系统/浏览器设置的暗黑模式

## 🪧 演示

### 真实用户

- [m1cr0b10g@GB](https://gb-microblog.pages.dev/)

### 平台

1. [Cloudflare](https://broadcast-channel.pages.dev/)
2. [Netlify](https://broadcast-channel.netlify.app/)
3. [Vercel](https://broadcast-channel.vercel.app/)

TGChan2Microblog 支持部署在 Cloudflare、Netlify、Vercel 等支持 Node.js SSR 的无服务器平台或者 VPS。
具体教程见[部署你的 Astro 站点](https://docs.astro.build/zh-cn/guides/deploy/)。

## 🧱 技术栈

- 框架：[Astro](https://astro.build/)
- 内容管理系统：[Telegram Channels](https://telegram.org/tour/channels)
- 模板: [Sepia](https://github.com/Planetable/SiteTemplateSepia)

## 🏗️ 部署

### Docker

1. `docker pull ghcr.io/grassblock1/tgchan2microblog:main`
2. `docker run -d --name tgchan2microblog -p 4321:4321 -e CHANNEL=username ghcr.io/grassblock1/tgchan2microblog:main`

podman 用户可以使用 `podman` 替换 `docker`。

### Serverless

1. [Fork](https://github.com/GrassBlock1/TGChan2Microblog/fork) 此项目到你 GitHub
2. 在 Cloudflare/Netlify/Vercel 创建项目
3. 选择 `BroadcastChannel` 项目和 `Astro` 框架
4. 配置环境变量 `CHANNEL` 为你的频道名称。此为最小化配置，更多配置见下面的配置项
5. 保存并部署
6. 绑定域名（可选）。
7. 更新代码，参考 GitHub 官方文档 [从 Web UI 同步分叉分支](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)。

## ⚒️ 配置

```env
## Telegram 频道用户名，必须配置。 t.me/ 后面那串字符
CHANNEL=miantiao_me

## 语言和时区设置，语言选项见[dayjs](https://github.com/iamkun/dayjs/tree/dev/src/locale)
LOCALE=zh-cn
TIMEZONE=Asia/Shanghai

## 社交媒体用户名
TELEGRAM=ccbikai
TWITTER=ccbikai
GITHUB=ccbikai

## 下面两个社交媒体需要为 URL
DISCORD=https://DISCORD.com
PODCASRT=https://PODCASRT.com

## 头部尾部代码注入，支持 HTML
FOOTER_INJECT=FOOTER_INJECT
HEADER_INJECT=HEADER_INJECT

## SEO 配置项，可不让搜索引擎索引内容
NO_FOLLOW=false
NO_INDEX=false

## Google Programming Search Engine 的搜索引擎 ID, 用来搜索内容,从 https://programmablesearchengine.google.com 获取代码中的 cx 参数的值即可。
GOOGLE_CSE_CODE=xxxx

## Sentry 配置项，收集服务端报错
SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN
SENTRY_DSN=SENTRY_DSN
SENTRY_PROJECT=SENTRY_PROJECT

## Telegram 主机名称和静态资源代理，不建议修改
HOST=telegram.dog
STATIC_PROXY=
```

## 🙋🏻 常问问题

1. 为什么部署后内容为空？
   - 检查频道是否是公开的，必须是公开的
   - 频道用户名是字符串，不是数字
   - 关闭频道 Restricting Saving Content 设置项
   - 修改完环境变量后需要重新部署
   - Telegram 会屏蔽一些敏感频道的公开展示， 可以通过访问 `https://t.me/s/频道用户名` 确认
2. 为什么我无法搜索到内容？
   > 因为 Telegram 的频道公开展示页默认情况下是每次仅加载一页（大概十几条）内容，所以 Fuse.js 搜索目前暂时只能搜到最后十几条内容，所以说它比原版的搜索要好一点，但不多。
   >
   > 虽然也尝试了直接递归获取所有内容，但是因为技术水平有限，最后还是放弃了。
   >
   > 这两天看 issue 时发现了一个可能的解决方案，就是使用 Google 搜索来解决。然后发现“可编程搜索引擎”可以内嵌在网站里，于是连夜改成这个，发现能用但是你可能需要将网站提交到 Google 那里的索引才能实现最佳效果。
