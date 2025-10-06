// import { FloatingElement } from "@/components/animations/floating-element"
// import { PageTransition } from "@/components/animations/page-transition"
// import { ScrollReveal } from "@/components/animations/scroll-reveal"
// import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
// import { Navigation } from "@/components/navigation"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { getProjects } from "@/lib/content"
// import { ArrowRight, ExternalLink, Github, Mail } from "lucide-react"
// import Link from "next/link"

// export default async function HomePage() {
//   const projects = await getProjects()
//   const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-background">
//         <Navigation />

//         {/* Hero Section */}
//         <section className="container py-24 md:py-32">
//           <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
//             <ScrollReveal direction="up" className="space-y-4">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
//                 Building Digital
//                 <span className="text-primary block">Experiences</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
//                 Full-stack developer passionate about creating innovative web applications that solve real-world
//                 problems and deliver exceptional user experiences.
//               </p>
//             </ScrollReveal>

//             <ScrollReveal direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4">
//               <Button asChild size="lg" className="text-lg px-8">
//                 <Link href="/projects">
//                   View My Work
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
//                 <Link href="/contact">
//                   Get In Touch
//                   <Mail className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* Featured Projects */}
//         <section className="container py-16 md:py-24">
//           <div className="space-y-12">
//             <ScrollReveal direction="up" className="text-center space-y-4">
//               <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Projects</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 A selection of recent work showcasing my expertise in modern web development
//               </p>
//             </ScrollReveal>

//             <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {featuredProjects.map((project, index) => (
//                 <StaggerItem key={project.slug}>
//                   <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
//                     <div className="aspect-video bg-muted relative overflow-hidden">
//                       <img
//                         src={project.image || "/placeholder.svg"}
//                         alt={project.title}
//                         className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                     <CardContent className="p-6 space-y-4">
//                       <div className="space-y-2">
//                         <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
//                           {project.title}
//                         </h3>
//                         <p className="text-muted-foreground line-clamp-2">{project.description}</p>
//                       </div>

//                       <div className="flex flex-wrap gap-2">
//                         {project.technologies.slice(0, 3).map((tech) => (
//                           <Badge key={tech} variant="secondary" className="text-xs">
//                             {tech}
//                           </Badge>
//                         ))}
//                         {project.technologies.length > 3 && (
//                           <Badge variant="outline" className="text-xs">
//                             +{project.technologies.length - 3} more
//                           </Badge>
//                         )}
//                       </div>

//                       <div className="flex items-center gap-2 pt-2">
//                         <Button asChild variant="ghost" size="sm">
//                           <Link href={`/projects/${project.slug}`}>
//                             View Details
//                             <ArrowRight className="ml-1 h-4 w-4" />
//                           </Link>
//                         </Button>
//                         {project.githubUrl && (
//                           <Button asChild variant="ghost" size="sm">
//                             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                               <Github className="h-4 w-4" />
//                             </a>
//                           </Button>
//                         )}
//                         {project.liveUrl && (
//                           <Button asChild variant="ghost" size="sm">
//                             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                               <ExternalLink className="h-4 w-4" />
//                             </a>
//                           </Button>
//                         )}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </StaggerItem>
//               ))}
//             </StaggerContainer>

//             <ScrollReveal direction="up" className="text-center">
//               <Button asChild variant="outline" size="lg">
//                 <Link href="/projects">
//                   View All Projects
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* About Preview */}
//         <section className="bg-muted/50 py-16 md:py-24">
//           <div className="container">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <ScrollReveal direction="left" className="space-y-6">
//                 <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
//                 <div className="space-y-4 text-lg leading-relaxed">
//                   <p>
//                     I'm a passionate full-stack developer with over 5 years of experience building scalable web
//                     applications. I specialize in React, Next.js, and modern backend technologies.
//                   </p>
//                   <p>
//                     When I'm not coding, you'll find me exploring new technologies, contributing to open source
//                     projects, or sharing knowledge through technical writing and mentoring.
//                   </p>
//                 </div>
//                 <Button asChild variant="outline">
//                   <Link href="/about">
//                     Learn More About Me
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//               </ScrollReveal>

//               <ScrollReveal direction="right" className="relative">
//                 <FloatingElement duration={4} yOffset={15}>
//                   <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
//                     <img
//                       src="/professional-developer-portrait.png"
//                       alt="Profile"
//                       className="w-80 h-80 object-cover rounded-xl"
//                     />
//                   </div>
//                 </FloatingElement>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="container py-16 md:py-24">
//           <ScrollReveal direction="up" className="text-center space-y-8 max-w-3xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold">Let's Work Together</h2>
//             <p className="text-lg text-muted-foreground">
//               I'm always interested in new opportunities and exciting projects. Whether you have a specific project in
//               mind or just want to connect, I'd love to hear from you.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg">
//                 <Link href="/contact">
//                   Start a Conversation
//                   <Mail className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button asChild variant="outline" size="lg">
//                 <Link href="/experience">
//                   View Experience
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </div>
//           </ScrollReveal>
//         </section>
//       </div>
//     </PageTransition>
//   )
// }

import { FloatingElement } from "@/components/animations/floating-element"
import { PageTransition } from "@/components/animations/page-transition"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProjects } from "@/lib/content"
import { ArrowRight, ExternalLink, Github, Mail } from "lucide-react"
import Link from "next/link"

export default async function HomePage() {
  const projects = await getProjects()
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="grid place-items-center min-h-[80vh] md:min-h-[calc(100svh-88px)] text-center">
          <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
            <ScrollReveal direction="up" className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
                Building Digital
                <span className="text-primary block">Experiences</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Fourth year Software Engineering student passionate about creating innovative web applications and
                implementing AI/ML models that solve real-world problems and deliver exceptional user experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/contact">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24">
          <div className="space-y-12">
            <ScrollReveal direction="up" className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of recent work showcasing my expertise in modern web development
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <StaggerItem key={project.slug}>
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/projects/${project.slug}`}>
                            View Details
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                        {project.githubUrl && (
                          <Button asChild variant="ghost" size="sm">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button asChild variant="ghost" size="sm">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal direction="up" className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* About Preview */}
        <section className="bg-muted/50 py-16 md:py-24">
          {/* ✅ ADDED: container wrapper to introduce consistent horizontal padding */}
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-12 lg:gap-16">
              {/* ✅ ADDED: small left padding so text doesn't hug the edge */}
              <ScrollReveal direction="left" className="space-y-6 text-center md:text-left md:pl-4 lg:pl-8 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    I’m a fourth-year Software Engineering student who builds at the intersection of
                    <strong> machine learning and full-stack web development </strong>. I like taking an idea
                    from data exploration to a small API and a clear UI, focusing on simple, reliable pieces
                    that are easy to understand and maintain.
                  </p>
                  <p>
                    In my free time, I explore new tools and patterns, scout ideas for 
                    small projects, and dig through open-source to contribute—bug reports, 
                    doc fixes, or small PRs. I keep a backlog of experiments, build quick 
                    prototypes, and share notes when something works. 
                    It keeps me current and turns curiosity into practical improvements 
                    in the ML and full-stack projects I build.
                  </p>
                </div>
                <Button asChild variant="outline">
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </ScrollReveal>

              <ScrollReveal direction="right" className="relative">
                <FloatingElement duration={4} yOffset={15}>
                  {/* keep a bit of padding so the image doesn't hug the panel edge */}
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center p-6 md:p-10">
                    <img src="/profilePhoto.png" alt="Profile" className="w-80 h-80 object-cover rounded-xl" />
                  </div>
                </FloatingElement>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <ScrollReveal direction="up" className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. Whether you have a specific project in
              mind or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Conversation
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/experience">
                  View Experience
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  )
}
