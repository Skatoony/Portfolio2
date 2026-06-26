"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ExternalLink,
  Download,
  Gamepad2,
  ZoomIn,
  Youtube,
  Calendar,
  User,
} from "lucide-react"
import { getProjectBySlug } from "@/lib/data"
import type { ProjectType } from "@/lib/types"
import NetworkBackground from "@/components/network-background"
import AmbientGlow from "@/components/ambient-glow"
import SiteHeader from "@/components/site-header"
import YouTubeEmbed from "@/components/youtube-embed"
import GalleryModal from "@/components/gallery-modal"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

function ProjectLinks({ links }: { links: NonNullable<ProjectType["links"]> }) {
  return (
    <div className="flex flex-col gap-2.5">
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:brightness-110"
        >
          <ExternalLink className="h-4 w-4" />
          Try Demo
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <Youtube className="h-4 w-4 text-red-400" />
          Watch Video
        </a>
      )}
      {links.download && (
        <a
          href={links.download}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <Download className="h-4 w-4" />
          Download
        </a>
      )}
      {links.store && (
        <a
          href={links.store}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <Gamepad2 className="h-4 w-4 text-sky-400" />
          View on Steam
        </a>
      )}
    </div>
  )
}

function ProjectDetailsPanel({ project }: { project: ProjectType }) {
  const hasLinks =
    project.links &&
    Object.values(project.links).some((v) => v && v.length > 0)

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="font-display text-lg font-bold">Project Details</h2>
      <div className="mt-5 space-y-5">
        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-500">Year</h3>
            <p className="text-white">{project.year}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <User className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-500">Role</h3>
            <p className="text-white">{project.role}</p>
          </div>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500">Stack &amp; tags</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-violet-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {hasLinks && (
          <div className="border-t border-white/10 pt-5">
            <h3 className="mb-3 text-xs uppercase tracking-wider text-gray-500">Links</h3>
            <ProjectLinks links={project.links!} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [initialImageIndex, setInitialImageIndex] = useState(0)

  if (!project) {
    notFound()
  }

  const openGallery = (index: number) => {
    setInitialImageIndex(index)
    setGalleryOpen(true)
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#08080c] text-white">
      <NetworkBackground />
      <AmbientGlow />
      <SiteHeader />

      <div className="relative z-10">
        {/* Hero */}
        <div className="relative h-[38vh] min-h-[280px] w-full overflow-hidden md:h-[44vh]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover opacity-50 blur-[6px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080c]/40 via-[#08080c]/60 to-[#08080c]" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-4 pb-10 md:px-8 md:pb-14">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-6xl px-4 pb-24 md:px-8">
          <div className="py-8">
            <Link
              href="/#work"
              className="group inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to all projects
            </Link>
          </div>

          {/* Mobile details first */}
          <div className="mb-10 md:hidden">
            <ProjectDetailsPanel project={project} />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Main content */}
            <div className="md:col-span-2">
              <p className="text-xl leading-relaxed text-gray-200">{project.description}</p>

              <div className="prose prose-lg prose-invert mt-8 max-w-none prose-p:text-gray-300">
                {project.fullDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {project.youtubeUrl && (
                <div className="mt-16">
                  <h2 className="mb-6 font-display text-2xl font-bold tracking-tight">
                    Video Preview
                  </h2>
                  <YouTubeEmbed url={project.youtubeUrl} />
                </div>
              )}

              <div className="mt-16">
                <h2 className="mb-6 font-display text-2xl font-bold tracking-tight">Gallery</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {project.gallery.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10"
                      onClick={() => openGallery(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                        <ZoomIn className="h-7 w-7 text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden md:block">
              <div className="sticky top-28">
                <ProjectDetailsPanel project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <GalleryModal
        images={project.gallery}
        initialIndex={initialImageIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </main>
  )
}
