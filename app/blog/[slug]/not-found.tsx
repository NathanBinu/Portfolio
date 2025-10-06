import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-24">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Post Not Found</h1>
            <p className="text-xl text-muted-foreground">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Blog
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <Search className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
