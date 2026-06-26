"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data"
import { Pencil, Trash2, Plus, ArrowLeft, Search } from "lucide-react"
import NetworkBackground from "@/components/network-background"
import AmbientGlow from "@/components/ambient-glow"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#08080c] text-white">
      <NetworkBackground />
      <AmbientGlow />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-16 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link
              href="/"
              className="group mb-4 inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to site
            </Link>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Project Manager
            </h1>
          </div>

          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:brightness-110">
            <Plus className="h-4 w-4" />
            Add New Project
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search projects by title or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-white placeholder:text-gray-500 focus:border-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
          />
        </div>

        <div className="glass overflow-hidden rounded-2xl">
          <div className="grid grid-cols-12 gap-4 border-b border-white/10 bg-white/[0.03] p-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <div className="col-span-1">Image</div>
            <div className="col-span-3">Title</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-2">Tags</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              No projects found matching your search.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-12 items-center gap-4 border-b border-white/5 p-4 transition-colors last:border-0 hover:bg-white/[0.03]"
              >
                <div className="col-span-1">
                  <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-3 font-medium">{project.title}</div>
                <div className="col-span-4 truncate text-gray-400">{project.description}</div>
                <div className="col-span-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-violet-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>
    </main>
  )
}
