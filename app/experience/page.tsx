import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getExperience } from "@/lib/content"
import { Award, Briefcase, Calendar, CheckCircle, GraduationCap, MapPin } from "lucide-react"
import Link from "next/link"


export const metadata = {
  title: "Experience | Portfolio",
  description: "My professional experience, education, and career journey in web development.",
}

export default async function ExperiencePage() {
  const experience = await getExperience()

  if (!experience) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-24 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Experience</h1>
          <p className="text-muted-foreground">Experience data is currently unavailable.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Professional Experience</h1>
            <p className="text-xl text-muted-foreground">
              My journey in web development, from junior developer to senior engineer
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="container pb-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional roles that are shaping my career and expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-8">
                {experience.positions.map((position, index) => (
                  <div key={position.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                    <Card className="md:ml-16">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-2">
                            <CardTitle className="text-xl font-heading">{position.title}</CardTitle>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                              <span className="font-semibold text-foreground">{position.company}</span>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{position.location}</span>
                              </div>
                              <span className="hidden sm:inline">•</span>
                              <Badge variant="outline" className="w-fit">
                                {position.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(position.startDate).toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                              })}{" "}
                              -{" "}
                              {position.current
                                ? "Present"
                                : new Date(position.endDate!).toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric",
                                  })}
                            </span>
                            {position.current && (
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">{position.description}</p>

                        <div className="space-y-4">
                          <h4 className="font-semibold flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Current Scope
                          </h4>
                          <ul className="space-y-2">
                            {position.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {position.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold flex items-center justify-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                Education
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Academic foundation that launched my career in technology
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {experience.education.map((edu) => (
                  <Card key={edu.id}>
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="space-y-4 flex-1">
                          <div className="space-y-2">
                            <h3 className="text-xl font-heading font-semibold">{edu.degree}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                              <span className="font-semibold text-foreground">{edu.institution}</span>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                              </span>
                            </div>
                            {edu.gpa && <Badge variant="outline">GPA: {edu.gpa}</Badge>}
                          </div>

                          {edu.honors && edu.honors.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="font-semibold flex items-center gap-2">
                                <Award className="h-4 w-4 text-primary" />
                                Honors & Recognition
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.honors.map((honor) => (
                                  <Badge key={honor} className="bg-primary/10 text-primary">
                                    {honor}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="font-semibold">Relevant Coursework</h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.relevantCourses.map((course) => (
                                  <Badge key={course} variant="secondary" className="text-xs">
                                    {course}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="container py-16 md:py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.concepts.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View My Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
