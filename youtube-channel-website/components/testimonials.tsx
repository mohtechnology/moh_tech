import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The tutorials on this channel completely changed my career path. I went from knowing nothing about coding to landing my first developer job in just 6 months.",
      name: "Alex Johnson",
      title: "Frontend Developer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The project-based approach to teaching makes complex concepts easy to understand. I've completed three courses and each one has been worth every penny.",
      name: "Sarah Williams",
      title: "Full-Stack Developer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "What sets this channel apart is the attention to detail and real-world applications. Not just theory, but practical skills you can use immediately.",
      name: "Michael Chen",
      title: "Software Engineer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I've tried many coding tutorials, but none explain concepts as clearly as these videos. The courses are comprehensive and the community is incredibly supportive.",
      name: "Jessica Miller",
      title: "Web Developer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The full-stack bootcamp was exactly what I needed to transition into tech. The curriculum is well-structured and the projects helped build my portfolio.",
      name: "David Thompson",
      title: "Junior Developer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As someone who learns by doing, I appreciate how each concept is tied to a real project. This channel offers the perfect balance of theory and practice.",
      name: "Emily Rodriguez",
      title: "UX Developer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What My Students Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take my word for it. Here's what others have to say about my courses and tutorials.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="hidden w-full justify-center md:flex">
              <TabsTrigger value="tab1">Page 1</TabsTrigger>
              <TabsTrigger value="tab2">Page 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.slice(0, 3).map((testimonial, i) => (
                  <Card key={i} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-muted-foreground/50" />
                      <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4 border-t p-6">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.slice(3, 6).map((testimonial, i) => (
                  <Card key={i} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-muted-foreground/50" />
                      <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4 border-t p-6">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
