"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  Gamepad2,
  Play,
  ZoomIn,
  Youtube,
  Calendar,
  User,
} from "lucide-react"
import type { ProjectType } from "@/lib/types"
import NetworkBackground from "@/components/network-background"
import AmbientGlow from "@/components/ambient-glow"
import SiteHeader from "@/components/site-header"
import YouTubeEmbed from "@/components/youtube-embed"
import GalleryModal from "@/components/gallery-modal"

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

export default function ProjectDetail({ project }: { project: ProjectType }) {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [initialImageIndex, setInitialImageIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)

  const scrollToVideos = () => {
    videosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const openGallery = (index: number) => {
    setInitialImageIndex(index)
    setGalleryOpen(true)
  }

  const videos =
    project.youtubeUrls && project.youtubeUrls.length > 0
      ? project.youtubeUrls
      : project.youtubeUrl
        ? [project.youtubeUrl]
        : []

  const scrollGallery = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#08080c] text-white">
      <NetworkBackground />
      <AmbientGlow />
      <SiteHeader />

      <div className="relative z-10">
        {/* Hero */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover opacity-50 blur-[6px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080c]/40 via-[#08080c]/60 to-[#08080c]" />

          <div className="relative mx-auto max-w-[1600px] px-4 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28">
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

        {/* Body */}
        <div className="mx-auto max-w-[1600px] px-4 pb-24 md:px-8">
          <div className="py-8">
            <Link
              href="/#work"
              className="group inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to all projects
            </Link>
          </div>

          {/* Gallery carousel — surfaced high so it isn't missed */}
          <section className="mb-12">
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight">Gallery</h2>
              <div className="flex items-center gap-2">
                {videos.length > 0 && (
                  <button
                    type="button"
                    onClick={scrollToVideos}
                    className="group relative mr-1 inline-flex h-10 overflow-hidden rounded-full bg-violet-500/40 p-[1.5px] shadow-[0_0_18px_rgba(168,85,247,0.5)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(217,70,239,0.7)]"
                  >
                    <span
                      aria-hidden
                      className="glow-ring absolute inset-[-150%] animate-[spin-around_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_210deg,#c084fc_280deg,#f0abfc_310deg,#c084fc_340deg,transparent_360deg)]"
                    />
                    <span className="relative z-10 inline-flex h-full items-center gap-2 rounded-full bg-[#1a1230] px-4 text-sm font-semibold text-white transition-colors group-hover:bg-[#241640]">
                      <Play className="h-4 w-4 fill-violet-300 text-violet-300" />
                      Check Videos
                    </span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => scrollGallery("left")}
                  aria-label="Previous images"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery("right")}
                  aria-label="Next images"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => openGallery(index)}
                  className="group relative aspect-video w-[80%] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 sm:w-[48%] lg:w-[32%]"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 48vw, 32vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                    <ZoomIn className="h-7 w-7 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </section>

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

              {project.contributions && project.contributions.length > 0 && (
                <div className="mt-12">
                  <h2 className="mb-5 font-display text-2xl font-bold tracking-tight">
                    What I worked on
                  </h2>
                  <ul className="space-y-3">
                    {project.contributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="hidden md:block">
              <div className="sticky top-28">
                <ProjectDetailsPanel project={project} />
              </div>
            </div>
          </div>

          {/* Videos — full width below the two-column layout */}
          {videos.length > 0 && (
            <div ref={videosRef} className="mt-16 scroll-mt-28">
              <h2 className="mb-6 font-display text-2xl font-bold tracking-tight">
                {videos.length > 1 ? "Videos" : "Video Preview"}
              </h2>
              {videos.length > 1 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {videos.map((url) => (
                    <div
                      key={url}
                      className="relative transition-all duration-300 ease-out will-change-transform md:hover:z-20 md:hover:scale-[1.18] md:hover:shadow-2xl md:hover:shadow-violet-500/30"
                    >
                      <YouTubeEmbed url={url} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="max-w-4xl">
                  <YouTubeEmbed url={videos[0]} />
                </div>
              )}
            </div>
          )}
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
