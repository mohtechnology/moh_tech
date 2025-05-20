"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    })
    setFormData({
      name: "",
      email: "",
      subject: "general",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or want to work together? Reach out and I'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Feel free to reach out through any of these channels. I'm always open to new opportunities,
                  collaborations, or just a friendly chat.
                </p>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <Mail className="h-6 w-6 text-red-600" />
                    <div>
                      <CardTitle className="text-base">Email</CardTitle>
                      <CardDescription>
                        <Link href="mailto:hello@yourchannel.com" className="hover:underline">
                          hello@yourchannel.com
                        </Link>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                    <div>
                      <CardTitle className="text-base">Location</CardTitle>
                      <CardDescription>San Francisco, California</CardDescription>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <Phone className="h-6 w-6 text-red-600" />
                    <div>
                      <CardTitle className="text-base">Phone</CardTitle>
                      <CardDescription>+1 (555) 123-4567</CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Connect on Social Media</h3>
                <div className="flex flex-wrap gap-4">
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
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <RadioGroup
                      defaultValue="general"
                      value={formData.subject}
                      onValueChange={handleRadioChange}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="cursor-pointer">
                          General Inquiry
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="collaboration" id="collaboration" />
                        <Label htmlFor="collaboration" className="cursor-pointer">
                          Collaboration
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sponsorship" id="sponsorship" />
                        <Label htmlFor="sponsorship" className="cursor-pointer">
                          Sponsorship
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about my content, courses, and services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>How can I support your channel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The best way to support my channel is by subscribing, liking videos, and sharing them with others. You
                  can also join my courses or become a channel member for exclusive content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer private coaching?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, I offer limited one-on-one coaching sessions for developers looking for personalized guidance.
                  Please contact me directly for availability and rates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I suggest video topics?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I love hearing from my audience about what they want to learn. You can suggest topics through the
                  contact form or in the comments section of my videos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are your courses suitable for beginners?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many of my courses are designed with beginners in mind, while others target intermediate and advanced
                  developers. Each course description clearly indicates the required prerequisite knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
