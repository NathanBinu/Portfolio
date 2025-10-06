"use client"

import { useState, useMemo, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search, Filter, X, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { getBlogPosts, getBlogCategories, type BlogPost } from "@/lib/content"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("newest")

  useEffect(() => {
    async function loadBlogData() {
      const postsData = await getBlogPosts()
      const categoriesData = getBlogCategories(postsData)
      setPosts(postsData)
      setCategories(categoriesData)
    }
    loadBlogData()
  }, [])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort posts
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
        break
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [posts, searchTerm, selectedCategory, sortBy])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSortBy("newest")
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || sortBy !== "newest"
  const featuredPosts = posts.filter((post) => post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, tutorials, and insights about web development, technology, and the craft of building digital
              experiences
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="container pb-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="ghost" className="p-0 h-auto">
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="container pb-8">
        <div className="bg-muted/50 rounded-lg p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-heading font-semibold flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Posts
            </h2>
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
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

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Showing {filteredPosts.length} of {posts.length} posts
            </span>
            {hasActiveFilters && <span>Filters active</span>}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container pb-16 md:pb-24">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <h3 className="text-2xl font-heading font-semibold">No posts found</h3>
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
            {filteredPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>By {post.author}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild variant="ghost" className="p-0 h-auto">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
