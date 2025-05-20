import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Filter, Search, Star, Users, Play, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Courses & Learning Paths</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive courses designed to take you from beginner to professional. Learn at your own pace with
                project-based curriculum.
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
                  placeholder="Search courses..."
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
                  All Courses
                </TabsTrigger>
                <TabsTrigger
                  value="beginner"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Beginner
                </TabsTrigger>
                <TabsTrigger
                  value="intermediate"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Intermediate
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Advanced
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <CourseCard key={i} index={i} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="beginner" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <CourseCard key={i} index={i} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="intermediate" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <CourseCard key={i + 3} index={i + 3} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="advanced" className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <CourseCard key={i + 6} index={i + 6} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Learning Paths</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Structured learning paths to help you achieve specific career goals and master key technologies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Developer</CardTitle>
                <CardDescription>Master modern frontend development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">4/6 Courses</span>
                  </div>
                  <Progress value={66} className="h-2" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Included Courses:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>HTML & CSS Fundamentals</li>
                    <li>JavaScript Essentials</li>
                    <li>React Fundamentals</li>
                    <li>Advanced React Patterns</li>
                    <li>Next.js for Production</li>
                    <li>UI/UX for Developers</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/paths/frontend" className="w-full">
                  <Button className="w-full bg-red-600 hover:bg-red-700">View Path</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Developer</CardTitle>
                <CardDescription>Build scalable backend systems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">2/6 Courses</span>
                  </div>
                  <Progress value={33} className="h-2" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Included Courses:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Node.js Fundamentals</li>
                    <li>RESTful API Design</li>
                    <li>Database Design & SQL</li>
                    <li>NoSQL with MongoDB</li>
                    <li>Authentication & Authorization</li>
                    <li>Microservices Architecture</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/paths/backend" className="w-full">
                  <Button className="w-full bg-red-600 hover:bg-red-700">View Path</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Full-Stack Developer</CardTitle>
                <CardDescription>Become a complete developer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">1/8 Courses</span>
                  </div>
                  <Progress value={12} className="h-2" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Included Courses:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Web Development Fundamentals</li>
                    <li>JavaScript Deep Dive</li>
                    <li>React Ecosystem</li>
                    <li>Node.js & Express</li>
                    <li>Database Management</li>
                    <li>Authentication & Security</li>
                    <li>Deployment & DevOps</li>
                    <li>Full-Stack Projects</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/paths/fullstack" className="w-full">
                  <Button className="w-full bg-red-600 hover:bg-red-700">View Path</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-red-600 hover:bg-red-700">New Course</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Full-Stack Web Development Bootcamp
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive course covering everything you need to become a professional full-stack developer.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured Course"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-16 w-16 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Play className="h-8 w-8 text-red-600" />
                    <span className="sr-only">Play Course Preview</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0 (120 reviews)</span>
                </div>
                <h3 className="text-2xl font-bold">What You'll Learn</h3>
                <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>HTML, CSS & JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>React & Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Node.js & Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>MongoDB & PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Authentication & Security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Deployment & DevOps</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>40+ Hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>5,000+ Students</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/courses/full-stack-bootcamp">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/courses/full-stack-bootcamp/preview">
                  <Button variant="outline">Watch Preview</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CourseCard({ index }: { index: number }) {
  const courses = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Learn the building blocks of web development",
      level: "Beginner",
      duration: "10 hours",
      students: "10,000+",
      rating: 4.8,
    },
    {
      title: "JavaScript Essentials",
      description: "Master the core concepts of JavaScript programming",
      level: "Beginner",
      duration: "15 hours",
      students: "8,500+",
      rating: 4.7,
    },
    {
      title: "Responsive Web Design",
      description: "Create websites that work on any device",
      level: "Beginner",
      duration: "8 hours",
      students: "7,200+",
      rating: 4.9,
    },
    {
      title: "React Fundamentals",
      description: "Build interactive UIs with React",
      level: "Intermediate",
      duration: "20 hours",
      students: "6,800+",
      rating: 4.8,
    },
    {
      title: "Node.js & Express",
      description: "Create server-side applications with Node.js",
      level: "Intermediate",
      duration: "18 hours",
      students: "5,500+",
      rating: 4.6,
    },
    {
      title: "MongoDB for Developers",
      description: "Learn NoSQL database design and implementation",
      level: "Intermediate",
      duration: "12 hours",
      students: "4,200+",
      rating: 4.7,
    },
    {
      title: "Advanced React Patterns",
      description: "Master advanced React concepts and patterns",
      level: "Advanced",
      duration: "15 hours",
      students: "3,800+",
      rating: 4.9,
    },
    {
      title: "GraphQL API Development",
      description: "Build efficient APIs with GraphQL",
      level: "Advanced",
      duration: "14 hours",
      students: "3,200+",
      rating: 4.8,
    },
    {
      title: "Microservices Architecture",
      description: "Design and implement scalable microservices",
      level: "Advanced",
      duration: "22 hours",
      students: "2,500+",
      rating: 4.7,
    },
  ]

  const course = courses[index % courses.length]

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={`/placeholder.svg?height=200&width=300&text=Course+${index + 1}`}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <Badge
            className={`${course.level === "Beginner" ? "bg-green-600" : course.level === "Intermediate" ? "bg-yellow-600" : "bg-red-600"}`}
          >
            {course.level}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current text-yellow-500" />
            <span>{course.rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/courses/course-${index + 1}`} className="w-full">
          <Button className="w-full">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
