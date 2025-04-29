import Link from "next/link"
import NetworkBackground from "@/components/network-background"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <NetworkBackground />

      <nav className="absolute top-0 right-0 p-8 z-10">
        <div className="flex gap-4">
          <Link
            href="#work"
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="bg-transparent text-white border border-white/30 px-6 py-2 rounded-md hover:bg-white/10 transition-colors"
          >
            About Me
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Hi! I am <span className="font-bold text-purple-400">Raul</span>.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-2">
            I make <span className="font-bold text-purple-400">games</span>, prototypes, debugging and
            everything in-between.
          </p>
          <p className="text-2xl md:text-3xl text-gray-300">
            Check out my <span className="font-bold text-purple-400">work</span> below.
          </p>
        </div>

        <div id="work" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
