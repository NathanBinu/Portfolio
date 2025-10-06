import { NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/content"

export async function GET() {
  const posts = await getBlogPosts()
  const baseUrl = "https://portfolio.vercel.app"

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Portfolio Blog</title>
    <description>Thoughts, tutorials, and insights about web development, technology, and the craft of building digital experiences</description>
    <link>${baseUrl}/blog</link>
    <language>en-US</language>
    <managingEditor>alex@example.com (Alex Johnson)</managingEditor>
    <webMaster>alex@example.com (Alex Johnson)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>alex@example.com (${post.author})</author>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("")}
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  })
}
