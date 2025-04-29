"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data"
import { Pencil, Trash2, Plus, ArrowLeft } from "lucide-react"
import NetworkBackground from "@/components/network-background"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <NetworkBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to site
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Project Manager</h1>
          </div>

          <button className="inline-flex items-center bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add New Project
          </button>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search projects by title or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 bg-gray-800 font-medium">
            <div className="col-span-1">Image</div>
            <div className="col-span-3">Title</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-2">Tags</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="p-8 text-center text-gray-400">No projects found matching your search.</div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 items-center hover:bg-gray-800/50 transition-colors"
              >
                <div className="col-span-1">
                  <div className="relative w-12 h-12 rounded overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-3 font-medium">{project.title}</div>
                <div className="col-span-4 text-gray-300 truncate">{project.description}</div>
                <div className="col-span-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-gray-800 text-purple-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-700 rounded-md transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 text-gray-400 text-sm">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>
    </main>
  )
}
