import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { ProjectType } from "@/lib/types"

interface ProjectCardProps {
  project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isShipped = project.tools.some((t) => {
    const s = t.toLowerCase()
    return s.includes("shipped") && !s.includes("not")
  })

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-violet-500/10"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b11] via-[#0b0b11]/20 to-transparent" />

        {/* Top badges */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-gray-200 backdrop-blur-sm">
            {project.year}
          </span>
          {isShipped && (
            <span className="rounded-full border border-emerald-400/40 bg-emerald-950/80 px-2.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
              Shipped
            </span>
          )}
        </div>

        {/* Hover arrow */}
        <div className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full bg-violet-500 text-white opacity-0 shadow-lg shadow-violet-500/40 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-violet-200">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-violet-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
