import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects & Tutorials</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse through my collection of hands-on projects and step-by-step tutorials to enhance your coding
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full bg-background pl-8 shadow-none"
                />
              </div>
              <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="frontend"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="fullstack"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Full-Stack
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <ProjectCard key={i} index={i} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="frontend" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ProjectCard key={i} index={i} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="backend" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ProjectCard key={i + 3} index={i + 3} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="fullstack" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ProjectCard key={i + 6} index={i + 6} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Project</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out this comprehensive project that showcases multiple technologies and advanced concepts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="bg-red-600 hover:bg-red-700">Featured</Badge>
                <h3 className="text-2xl font-bold">Full-Stack E-Commerce Platform</h3>
                <p className="text-muted-foreground">
                  A complete e-commerce solution with product management, user authentication, shopping cart, payment
                  processing, and order management.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Stripe</Badge>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects/ecommerce-platform">
                  <Button className="bg-red-600 hover:bg-red-700">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="https://github.com/yourusername/ecommerce-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">View Code</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ index }: { index: number }) {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      type: "Frontend",
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication",
      tags: ["React", "Firebase", "DnD Kit"],
      type: "Frontend",
    },
    {
      title: "E-commerce UI",
      description: "A modern e-commerce user interface with product filtering and cart functionality",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      type: "Frontend",
    },
    {
      title: "REST API",
      description: "A RESTful API for a blog platform with authentication and authorization",
      tags: ["Node.js", "Express", "MongoDB"],
      type: "Backend",
    },
    {
      title: "Real-time Chat Backend",
      description: "A scalable backend for a real-time chat application",
      tags: ["Node.js", "Socket.io", "Redis"],
      type: "Backend",
    },
    {
      title: "GraphQL API",
      description: "A GraphQL API for a social media platform with data relationships",
      tags: ["Node.js", "Apollo", "PostgreSQL"],
      type: "Backend",
    },
    {
      title: "Social Media App",
      description: "A full-stack social media application with posts, comments, and likes",
      tags: ["React", "Node.js", "MongoDB"],
      type: "Full-Stack",
    },
    {
      title: "Job Board",
      description: "A job board platform where companies can post jobs and users can apply",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      type: "Full-Stack",
    },
    {
      title: "Video Streaming Platform",
      description: "A YouTube-like platform for uploading and streaming videos",
      tags: ["React", "Node.js", "AWS S3"],
      type: "Full-Stack",
    },
  ]

  const project = projects[index % projects.length]

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={`/placeholder.svg?height=200&width=300&text=Project+${index + 1}`}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{project.title}</CardTitle>
          <Badge variant="outline">{project.type}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/projects/project-${index + 1}`}>
          <Button variant="outline" size="sm">
            View Project
          </Button>
        </Link>
        <Link href={`https://github.com/yourusername/project-${index + 1}`} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="sm">
            View Code
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
