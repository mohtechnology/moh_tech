import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Calendar, Code, Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { Video } from "lucide-react" // Import Video component

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Hi, I'm [Your Name] — a developer, educator, and content creator passionate about teaching programming
                  and web development.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Youtube className="mr-2 h-4 w-4" />
                    Subscribe on YouTube
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile Picture"
                  className="rounded-full object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">My Story</h2>
              <p className="text-muted-foreground">
                I started my journey as a self-taught developer over 10 years ago. After working in the industry for
                several years, I discovered my passion for teaching and sharing knowledge with others.
              </p>
              <p className="text-muted-foreground">
                In 2018, I launched my YouTube channel to help aspiring developers learn programming concepts in a
                practical, project-based way. Since then, I've helped thousands of students worldwide learn to code and
                build their own applications.
              </p>
              <p className="text-muted-foreground">
                My teaching philosophy is centered around practical, real-world applications. I believe the best way to
                learn is by building projects and solving problems, which is why all my courses and tutorials focus on
                creating functional applications.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Expertise</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Frontend Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      React, Next.js, Vue, Angular, HTML/CSS, JavaScript, TypeScript
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Backend Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Node.js, Express, Django, Flask, REST APIs, GraphQL</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Database & Cloud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, Firebase, AWS, Vercel, Netlify</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Other Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      UI/UX Design, DevOps, Testing, Performance Optimization
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Channel Statistics</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Numbers that reflect the impact and growth of my educational content.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Youtube className="h-10 w-10 text-red-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold sm:text-2xl">50K+</h3>
                <p className="text-sm text-muted-foreground">Subscribers</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Video className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold sm:text-2xl">200+</h3>
                <p className="text-sm text-muted-foreground">Videos</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Code className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold sm:text-2xl">50+</h3>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Calendar className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold sm:text-2xl">5+</h3>
                <p className="text-sm text-muted-foreground">Years Teaching</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Connect With Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow me on social media for updates, behind-the-scenes content, and more.
              </p>
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-4 py-8">
            <Link href="https://youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-12 w-12 rounded-full p-0">
                <Youtube className="h-5 w-5 text-red-600" />
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
            <Link href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-12 w-12 rounded-full p-0">
                <Twitter className="h-5 w-5 text-blue-400" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-12 w-12 rounded-full p-0">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-12 w-12 rounded-full p-0">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Recognition & Awards</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Honors and recognition received for educational content and contributions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-500" />
                <CardTitle className="mt-4">YouTube Silver Play Button</CardTitle>
                <CardDescription>Awarded for reaching 100,000 subscribers</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-blue-500" />
                <CardTitle className="mt-4">Best Educational Content</CardTitle>
                <CardDescription>Developer Community Awards 2022</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-green-500" />
                <CardTitle className="mt-4">Top Coding Instructor</CardTitle>
                <CardDescription>Web Development Excellence Awards</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
