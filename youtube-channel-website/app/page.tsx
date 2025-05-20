import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Users, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Learn Programming With My Channel
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Practical tutorials, projects, and courses to help you become a better developer. Join thousands of
                  students already learning with me.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/courses">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Browse Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline">
                    Explore Projects
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>50K+ Subscribers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Video className="h-4 w-4" />
                  <span>200+ Videos</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full md:h-[400px] lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Channel Preview"
                  className="rounded-lg object-cover"
                  fill
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-16 w-16 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Play className="h-8 w-8 text-red-600" />
                    <span className="sr-only">Play Introduction Video</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Content</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popular Videos & Courses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my most popular content that has helped thousands of developers level up their skills.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600">Featured Course</div>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">Full-Stack Web Development Bootcamp</h3>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn everything you need to become a full-stack developer. From HTML & CSS to React, Node.js, and
                  databases.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/courses/full-stack-bootcamp">
                  <Button className="bg-red-600 hover:bg-red-700">
                    View Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Featured Course"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Explore My Content</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From beginner-friendly tutorials to advanced projects, find the perfect content for your skill level.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-8">
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
              </TabsList>
              <TabsContent value="projects" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={`/placeholder.svg?height=200&width=300&text=Project+${i}`}
                          alt={`Project ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>
                          Build a {i === 1 ? "Portfolio Site" : i === 2 ? "Chat App" : "E-commerce Store"}
                        </CardTitle>
                        <CardDescription>
                          {i === 1
                            ? "Create a stunning portfolio with React"
                            : i === 2
                              ? "Real-time chat with Socket.io"
                              : "Full-featured store with payment processing"}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link href={`/projects/project-${i}`}>
                          <Button variant="outline" size="sm">
                            View Project
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/projects">
                    <Button variant="outline">
                      View All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="courses" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={`/placeholder.svg?height=200&width=300&text=Course+${i}`}
                          alt={`Course ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>
                          {i === 1 ? "React Fundamentals" : i === 2 ? "Node.js Masterclass" : "Full-Stack Development"}
                        </CardTitle>
                        <CardDescription>
                          {i === 1
                            ? "Master React basics and hooks"
                            : i === 2
                              ? "Build scalable backend applications"
                              : "End-to-end web development"}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link href={`/courses/course-${i}`}>
                          <Button variant="outline" size="sm">
                            View Course
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/courses">
                    <Button variant="outline">
                      View All Courses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}
