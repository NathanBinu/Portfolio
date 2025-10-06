import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BlogPostStructuredData } from "@/components/seo/structured-data"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react"
import { getBlogPost, getBlogPosts } from "@/lib/content"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.title }] : [],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogPostStructuredData post={post} authorName="Alex Johnson" baseUrl="https://portfolio.vercel.app" />
      <Navigation />

      {/* Back Navigation */}
      <section className="container py-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </section>

      {/* Article Header */}
      <article className="container pb-16">
        <div className="max-w-4xl mx-auto">
          <header className="space-y-8 pb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline">{post.category}</Badge>
                {post.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">{post.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{post.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-12">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-lg leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Article Footer */}
          <footer className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="font-heading font-semibold">Published by {post.author}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {post.updatedAt !== post.publishedAt && (
                    <span>
                      {" "}
                      • Updated{" "}
                      {new Date(post.updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </p>
              </div>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-heading font-semibold">Enjoyed this article?</h3>
                <p className="text-muted-foreground">
                  Check out more of my writing or get in touch to discuss your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/blog">More Articles</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </footer>
        </div>
      </article>
    </div>
  )
}
