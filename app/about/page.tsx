import { PageTransition } from "@/components/animations/page-transition"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getExperience } from "@/lib/content"
import { Award, Calendar, Code, Coffee, HandHelping, Heart, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background, skills, and what drives my passion for web development.",
}

export default async function AboutPage() {
  const experience = await getExperience()

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold">Hi, I'm Nathan Binu Edappilly</h1>
                <p className="text-xl text-muted-foreground">
                  Fourth-year Software Engineering student, York University.
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I’m a fourth-year Software Engineering student with a focus on machine learning.
                  Recently I’ve built an NLP sentiment classifier for Reddit discussions and am also working on a 
                  real-estate price prediction model. My previous full-stack experiences 
                  drives me to catalyze from a notebook to a usable, measurable product.
                </p>
                <p>
                  I focus on machine learning and applied AI—building data pipelines, 
                  training/evaluating models, and turning results into clear, usable products. 
                  When a UI adds value, I ship it with React/Next.js on the front end and Node/Express 
                  on the back end, backed by SQL and simple REST APIs. I care about clean, 
                  maintainable code, reproducible experiments, and crafting fast, accessible interfaces 
                  that make the model’s output easy to trust and use.
                </p>
              </div>

              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Toronto, Ontario, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Graduating ~ Dec 2026</span>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </ScrollReveal>

            <ScrollReveal direction="right" className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <img
                  src="/professional-developer-working-at-desk.jpg"
                  alt="Alex Johnson"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        {experience?.skills && (
          <section className="bg-muted/50 py-16 md:py-24">
            <div className="container">
              <div className="space-y-12">
                <ScrollReveal direction="up" className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold">Skills & Expertise</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Technologies and tools I use to bring ideas to life
                  </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <StaggerItem>
                    <Card className="h-full">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Code className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-heading font-semibold">Frontend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.frontend.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card className="h-full">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-heading font-semibold">Backend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.backend.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card className="h-full">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Coffee className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-heading font-semibold">Tools</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.tools.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card className="h-full">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Heart className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-heading font-semibold">Concepts</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.concepts.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </section>
        )}

        {/* Personal Interests */}
        <section className="container py-16 md:py-24">
          <div className="space-y-12">
            <ScrollReveal direction="up" className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Beyond Code</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What I do when I'm not building applications
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <Card className="text-center h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <HandHelping className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Volunteering</h3>
                    <p className="text-muted-foreground">
                      Mentoring peers and supporting community tech events.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="text-center h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Open Source</h3>
                    <p className="text-muted-foreground">
                      Contributing to open source projects and maintaining libraries that help other developers.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="text-center h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Mentoring</h3>
                    <p className="text-muted-foreground">
                      Helping junior developers grow their skills through mentorship and technical writing.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container text-center space-y-8">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Let's Create Something Amazing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with talented people. Let's discuss how we
                can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a Project
                    <Mail className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
