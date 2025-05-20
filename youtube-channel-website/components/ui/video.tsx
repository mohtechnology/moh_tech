import type React from "react"
import { type LucideIcon, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  thumbnail: string
  duration?: string
  views?: string
  date?: string
  href: string
  icon?: LucideIcon
}

export function VideoCard({
  title,
  description,
  thumbnail,
  duration,
  views,
  date,
  href,
  icon: Icon = Play,
  className,
  ...props
}: VideoCardProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg", className)} {...props}>
      <Link href={href} className="absolute inset-0 z-10">
        <span className="sr-only">View {title}</span>
      </Link>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-1 py-0.5 text-xs text-white">{duration}</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
          >
            <Icon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold">{title}</h3>
        {description && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>}
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          {views && <span>{views} views</span>}
          {views && date && <span>•</span>}
          {date && <span>{date}</span>}
        </div>
      </div>
    </div>
  )
}
