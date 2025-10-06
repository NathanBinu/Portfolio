"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Github, ExternalLink, Search, Filter, X } from "lucide-react"
import Link from "next/link"
import { getProjects, getProjectCategories, type Project } from "@/lib/content"
import { useEffect } from "react"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTech, setSelectedTech] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("newest")

  useEffect(() => {
    async function loadProjects() {
      const projectsData = await getProjects()
      const categoriesData = getProjectCategories(projectsData)
      setProjects(projectsData)
      setCategories(categoriesData)
    }
    loadProjects()
  }, [])

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech))
    })
    return Array.from(techs).sort()
  }, [projects])

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

      const matchesTech = selectedTech === "all" || project.technologies.includes(selectedTech)

      return matchesSearch && matchesCategory && matchesTech
    })

    // Sort projects
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())
        break
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [projects, searchTerm, selectedCategory, selectedTech, sortBy])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedTech("all")
    setSortBy("newest")
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || selectedTech !== "all" || sortBy !== "newest"

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A collection of projects showcasing my skills in web development, from simple websites to complex
              applications
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container pb-8">
        <div className="bg-muted/50 rounded-lg p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-heading font-semibold flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Projects
            </h2>
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Technology Filter */}
            <Select value={selectedTech} onValueChange={setSelectedTech}>
              <SelectTrigger>
                <SelectValue placeholder="All Technologies" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Technologies</SelectItem>
                {allTechnologies.map((tech) => (
                  <SelectItem key={tech} value={tech}>
                    {tech}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            {hasActiveFilters && <span>Filters active</span>}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container pb-16 md:pb-24">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <h3 className="text-2xl font-heading font-semibold">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            {hasActiveFilters && (
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(project.completedAt).toLocaleDateString()}
                      </span>
                    </div>
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
                    <Button asChild variant="ghost" size="sm" className="flex-1">
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
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
