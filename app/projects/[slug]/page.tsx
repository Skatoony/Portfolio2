"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink, Download, ShoppingCart, ZoomIn } from "lucide-react"
import { getProjectBySlug } from "@/lib/data"
import NetworkBackground from "@/components/network-background"
import YouTubeEmbed from "@/components/youtube-embed"
import GalleryModal from "@/components/gallery-modal"

interface ProjectPageProps {
  params: {
    slug: string
  }
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
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <NetworkBackground />

      <div className="relative z-10">
        {/* Hero Section - Fixed overlay and using project.image instead of gallery */}
        <div className="w-full h-[30vh] md:h-[40vh] relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover opacity-60 blur-[8px]"
            priority
          />
          {/* Full overlay that covers the entire image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>

        {/* Content - Reordered for mobile */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
          {/* Project Details - Shows first on mobile, hidden on desktop */}
          <div className="md:hidden mb-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-gray-800">Project Details</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400">Year</h3>
                  <p className="text-white">{project.year}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400">Role</h3>
                  <p className="text-white">{project.role}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400">Tools</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs px-2 py-1 bg-gray-800 text-purple-300 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && (
                  <div className="pt-4 mt-4 border-t border-gray-800">
                    <h3 className="text-sm text-gray-400 mb-3">Links</h3>
                    <div className="flex flex-col gap-2">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-md transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Try Demo
                        </a>
                      )}

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source
                        </a>
                      )}

                      {project.links.download && (
                        <a
                          href={project.links.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      )}

                      {project.links.store && (
                        <a
                          href={project.links.store}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Steam
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop layout with grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Project description at the top */}
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>

              <div className="prose prose-lg prose-invert max-w-none">
                {project.fullDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* YouTube Video */}
              {project.youtubeUrl && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold mb-6">Video Preview</h2>
                  <YouTubeEmbed url={project.youtubeUrl} />
                </div>
              )}

              {/* Gallery */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => openGallery(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Hidden on mobile since we show it at the top */}
            <div className="hidden md:block">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-8">
                <h2 className="text-xl font-bold mb-6 pb-4 border-b border-gray-800">Project Details</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm text-gray-400">Year</h3>
                    <p className="text-white">{project.year}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400">Role</h3>
                    <p className="text-white">{project.role}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400">Tools</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-1 bg-gray-800 text-purple-300 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.links && (
                    <div className="pt-4 mt-4 border-t border-gray-800">
                      <h3 className="text-sm text-gray-400 mb-3">Links</h3>
                      <div className="flex flex-col gap-2">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-md transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Try Demo
                          </a>
                        )}

                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Source
                          </a>
                        )}

                        {project.links.download && (
                          <a
                            href={project.links.download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        )}

                        {project.links.store && (
                          <a
                            href={project.links.store}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Purchase
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        images={project.gallery}
        initialIndex={initialImageIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </main>
  )
}
