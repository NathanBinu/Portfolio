import type { BlogPost, Project } from "@/lib/content"

interface PersonStructuredDataProps {
  name: string
  jobTitle: string
  url: string
  sameAs: string[]
}

export function PersonStructuredData({ name, jobTitle, url, sameAs }: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    sameAs,
    knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "Node.js", "Full Stack Development"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface BlogPostStructuredDataProps {
  post: BlogPost
  authorName: string
  baseUrl: string
}

export function BlogPostStructuredData({ post, authorName, baseUrl }: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? `${baseUrl}${post.image}` : undefined,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Person",
      name: authorName,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface ProjectStructuredDataProps {
  project: Project
  authorName: string
  baseUrl: string
}

export function ProjectStructuredData({ project, authorName, baseUrl }: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image ? `${baseUrl}${project.image}` : undefined,
    author: {
      "@type": "Person",
      name: authorName,
    },
    dateCreated: project.completedAt,
    url: `${baseUrl}/projects/${project.slug}`,
    keywords: project.technologies.join(", "),
    genre: project.category,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface WebsiteStructuredDataProps {
  name: string
  description: string
  url: string
}

export function WebsiteStructuredData({ name, description, url }: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    description,
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
