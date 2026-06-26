import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import NetworkBackground from "@/components/network-background"
import AmbientGlow from "@/components/ambient-glow"

export default function ProjectNotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#08080c] text-white">
      <NetworkBackground />
      <AmbientGlow />

      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 text-center">
        <p className="font-display text-7xl font-bold text-gradient md:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Project not found
        </h1>
        <p className="mt-3 max-w-md text-gray-400">
          The project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:brightness-110"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Return home
        </Link>
      </div>
    </main>
  )
}
