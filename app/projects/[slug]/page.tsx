// import { notFound } from "next/navigation"
// import Link from "next/link"
// import { Navigation } from "@/components/navigation"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { ProjectStructuredData } from "@/components/seo/structured-data"
// import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Code } from "lucide-react"
// import { getProject, getProjects } from "@/lib/content"

// interface ProjectPageProps {
//   params: {
//     slug: string
//   }
// }

// export async function generateStaticParams() {
//   const projects = await getProjects()
//   return projects.map((project) => ({
//     slug: project.slug,
//   }))
// }

// export async function generateMetadata({ params }: ProjectPageProps) {
//   const project = await getProject(params.slug)

//   if (!project) {
//     return {
//       title: "Project Not Found",
//     }
//   }

//   return {
//     title: project.title,
//     description: project.description,
//     keywords: [...project.technologies, project.category, "web development", "project"],
//     openGraph: {
//       title: project.title,
//       description: project.description,
//       images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title }] : [],
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: project.title,
//       description: project.description,
//       images: project.image ? [project.image] : [],
//     },
//     alternates: {
//       canonical: `/projects/${project.slug}`,
//     },
//   }
// }

// export default async function ProjectPage({ params }: ProjectPageProps) {
//   const project = await getProject(params.slug)

//   if (!project) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <ProjectStructuredData project={project} authorName="Alex Johnson" baseUrl="https://portfolio.vercel.app" />
//       <Navigation />

//       {/* Back Navigation */}
//       <section className="container py-8">
//         <Button asChild variant="ghost" className="mb-4">
//           <Link href="/projects">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Projects
//           </Link>
//         </Button>
//       </section>

//       {/* Project Hero */}
//       <section className="container pb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <Badge variant="outline">{project.category}</Badge>
//                 {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
//               </div>
//               <h1 className="text-4xl md:text-5xl font-heading font-bold">{project.title}</h1>
//               <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               {project.githubUrl && (
//                 <Button asChild size="lg">
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Github className="mr-2 h-5 w-5" />
//                     View Code
//                   </a>
//                 </Button>
//               )}
//               {project.liveUrl && (
//                 <Button asChild variant="outline" size="lg">
//                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className="mr-2 h-5 w-5" />
//                     Live Demo
//                   </a>
//                 </Button>
//               )}
//             </div>

//             {/* Project Details */}
//             <Card>
//               <CardContent className="p-6 space-y-6">
//                 <div className="flex items-center gap-3">
//                   <Calendar className="h-5 w-5 text-muted-foreground" />
//                   <div>
//                     <h3 className="font-semibold">Completed</h3>
//                     <p className="text-muted-foreground">
//                       {new Date(project.completedAt).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </p>
//                   </div>
//                 </div>

//                 <Separator />

//                 <div className="flex items-start gap-3">
//                   <Tag className="h-5 w-5 text-muted-foreground mt-1" />
//                   <div className="space-y-2">
//                     <h3 className="font-semibold">Category</h3>
//                     <Badge variant="secondary">{project.category}</Badge>
//                   </div>
//                 </div>

//                 <Separator />

//                 <div className="flex items-start gap-3">
//                   <Code className="h-5 w-5 text-muted-foreground mt-1" />
//                   <div className="space-y-3">
//                     <h3 className="font-semibold">Technologies Used</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech) => (
//                         <Badge key={tech} variant="outline" className="text-xs">
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="space-y-6">
//             <div className="aspect-video bg-muted rounded-lg overflow-hidden">
//               <img
//                 src={project.image || "/placeholder.svg"}
//                 alt={project.title}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Description */}
//       <section className="container pb-16">
//         <div className="max-w-4xl mx-auto">
//           <Card>
//             <CardContent className="p-8">
//               <h2 className="text-2xl font-heading font-bold mb-6">About This Project</h2>
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-lg leading-relaxed text-muted-foreground">{project.longDescription}</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Key Features */}
//       <section className="bg-muted/50 py-16">
//         <div className="container">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <h2 className="text-3xl font-heading font-bold text-center">Key Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">Modern Architecture</h3>
//                   <p className="text-muted-foreground">
//                     Built with the latest technologies and best practices for optimal performance and maintainability.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">Responsive Design</h3>
//                   <p className="text-muted-foreground">
//                     Fully responsive interface that works seamlessly across all devices and screen sizes.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">Performance Optimized</h3>
//                   <p className="text-muted-foreground">
//                     Optimized for speed with efficient code splitting, lazy loading, and caching strategies.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">User Experience</h3>
//                   <p className="text-muted-foreground">
//                     Intuitive interface design focused on providing an excellent user experience.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Projects */}
//       <section className="container py-16">
//         <div className="text-center space-y-8">
//           <h2 className="text-3xl font-heading font-bold">More Projects</h2>
//           <p className="text-lg text-muted-foreground">Check out some of my other work</p>
//           <Button asChild size="lg">
//             <Link href="/projects">
//               View All Projects
//               <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

// import { Navigation } from "@/components/navigation"
// import { ProjectStructuredData } from "@/components/seo/structured-data"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { getProject, getProjects } from "@/lib/content"
// import { ArrowLeft, Calendar, Code, ExternalLink, Github, Tag } from "lucide-react"
// import Link from "next/link"
// import { notFound } from "next/navigation"

// // ✅ Next.js 15: dynamic route `params` is async. We'll type it and await it where used.
// type RouteParams = { slug: string }

// export async function generateStaticParams() {
//   const projects = await getProjects()
//   return projects.map((project) => ({
//     slug: project.slug,
//   }))
// }

// // ✅ CHANGED: make `params` a Promise and await it before reading `slug`
// export async function generateMetadata({ params }: { params: Promise<RouteParams> }) {
//   const { slug } = await params // ← CHANGED
//   const project = await getProject(slug)

//   if (!project) {
//     return {
//       title: "Project Not Found",
//     }
//   }

//   return {
//     title: project.title,
//     description: project.description,
//     keywords: [...project.technologies, project.category, "web development", "project"],
//     openGraph: {
//       title: project.title,
//       description: project.description,
//       images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title }] : [],
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: project.title,
//       description: project.description,
//       images: project.image ? [project.image] : [],
//     },
//     alternates: {
//       canonical: `/projects/${project.slug}`,
//     },
//   }
// }

// // ✅ CHANGED: make `params` a Promise and await it before reading `slug`
// export default async function ProjectPage({ params }: { params: Promise<RouteParams> }) {
//   const { slug } = await params // ← CHANGED
//   const project = await getProject(slug)

//   if (!project) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <ProjectStructuredData project={project} authorName="Alex Johnson" baseUrl="https://portfolio.vercel.app" />
//       <Navigation />

//       {/* Back Navigation */}
//       <section className="container py-8">
//         <Button asChild variant="ghost" className="mb-4">
//           <Link href="/projects">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Projects
//           </Link>
//         </Button>
//       </section>

//       {/* Project Hero */}
//       <section className="container pb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <Badge variant="outline">{project.category}</Badge>
//                 {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
//               </div>
//               <h1 className="text-4xl md:text-5xl font-heading font-bold">{project.title}</h1>
//               <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               {project.githubUrl && (
//                 <Button asChild size="lg">
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Github className="mr-2 h-5 w-5" />
//                     View Code
//                   </a>
//                 </Button>
//               )}
//               {project.liveUrl && (
//                 <Button asChild variant="outline" size="lg">
//                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className="mr-2 h-5 w-5" />
//                     Live Demo
//                   </a>
//                 </Button>
//               )}
//             </div>

//             {/* Project Details */}
//             <Card>
//               <CardContent className="p-6 space-y-6">
//                 <div className="flex items-center gap-3">
//                   <Calendar className="h-5 w-5 text-muted-foreground" />
//                   <div>
//                     <h3 className="font-semibold">Completed</h3>
//                     <p className="text-muted-foreground">
//                       {new Date(project.completedAt).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </p>
//                   </div>
//                 </div>

//                 <Separator />

//                 <div className="flex items-start gap-3">
//                   <Tag className="h-5 w-5 text-muted-foreground mt-1" />
//                   <div className="space-y-2">
//                     <h3 className="font-semibold">Category</h3>
//                     <Badge variant="secondary">{project.category}</Badge>
//                   </div>
//                 </div>

//                 <Separator />

//                 <div className="flex items-start gap-3">
//                   <Code className="h-5 w-5 text-muted-foreground mt-1" />
//                   <div className="space-y-3">
//                     <h3 className="font-semibold">Technologies Used</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech) => (
//                         <Badge key={tech} variant="outline" className="text-xs">
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="space-y-6">
//             <div className="aspect-video bg-muted rounded-lg overflow-hidden">
//               <img
//                 src={project.image || "/placeholder.svg"}
//                 alt={project.title}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Description */}
//       <section className="container pb-16">
//         <div className="max-w-4xl mx-auto">
//           <Card>
//             <CardContent className="p-8">
//               <h2 className="text-2xl font-heading font-bold mb-6">About This Project</h2>
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-lg leading-relaxed text-muted-foreground">{project.longDescription}</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Key Features */}
//       <section className="bg-muted/50 py-16">
//         <div className="container">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <h2 className="text-3xl font-heading font-bold text-center">Key Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">Modern Architecture</h3>
//                   <p className="text-muted-foreground">
//                     Built with the latest technologies and best practices for optimal performance and maintainability.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">Responsive Design</h3>
//                   <p className="text-muted-foreground">
//                     Fully responsive interface that works seamlessly across all devices and screen sizes.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">Performance Optimized</h3>
//                   <p className="text-muted-foreground">
//                     Optimized for speed with efficient code splitting, lazy loading, and caching strategies.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-3">User Experience</h3>
//                   <p className="text-muted-foreground">
//                     Intuitive interface design focused on providing an excellent user experience.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Projects */}
//       <section className="container py-16">
//         <div className="text-center space-y-8">
//           <h2 className="text-3xl font-heading font-bold">More Projects</h2>
//           <p className="text-lg text-muted-foreground">Check out some of my other work</p>
//           <Button asChild size="lg">
//             <Link href="/projects">
//               View All Projects
//               <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

import { Navigation } from "@/components/navigation"
import { ProjectStructuredData } from "@/components/seo/structured-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getProject, getProjects } from "@/lib/content"
import { ArrowLeft, Calendar, Code, ExternalLink, Github, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// ✅ Next.js 15: dynamic route `params` is async. We'll type it and await it where used.
type RouteParams = { slug: string }

export async function generateStaticParams() {
  // ⬇️ OPTION A: ask for *all* projects so every slug is included (no default cap)
  const projects = await getProjects(Number.MAX_SAFE_INTEGER) // ← CHANGED
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// ✅ CHANGED: make `params` a Promise and await it before reading `slug`
export async function generateMetadata({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params // ← CHANGED
  const project = await getProject(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.technologies, project.category, "web development", "project"],
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  }
}

// ✅ CHANGED: make `params` a Promise and await it before reading `slug`
export default async function ProjectPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params // ← CHANGED
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <ProjectStructuredData project={project} authorName="Alex Johnson" baseUrl="https://portfolio.vercel.app" />
      <Navigation />

      {/* Back Navigation */}
      <section className="container py-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </section>

      {/* Project Hero */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline">{project.category}</Badge>
                {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button asChild size="lg">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild variant="outline" size="lg">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            {/* Project Details */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-semibold">Completed</h3>
                    <p className="text-muted-foreground">
                      {new Date(project.completedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <Tag className="h-5 w-5 text-muted-foreground mt-1" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">Category</h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-muted-foreground mt-1" />
                  <div className="space-y-3">
                    <h3 className="font-semibold">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="container pb-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">About This Project</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">{project.longDescription}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Modern Architecture</h3>
                  <p className="text-muted-foreground">
                    Built with the latest technologies and best practices for optimal performance and maintainability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Responsive Design</h3>
                  <p className="text-muted-foreground">
                    Fully responsive interface that works seamlessly across all devices and screen sizes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Performance Optimized</h3>
                  <p className="text-muted-foreground">
                    Optimized for speed with efficient code splitting, lazy loading, and caching strategies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">User Experience</h3>
                  <p className="text-muted-foreground">
                    Intuitive interface design focused on providing an excellent user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="container py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-heading font-bold">More Projects</h2>
          <p className="text-lg text-muted-foreground">Check out some of my other work</p>
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
