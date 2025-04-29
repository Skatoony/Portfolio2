import Link from "next/link"
import NetworkBackground from "@/components/network-background"

export default function ProjectNotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <NetworkBackground />

      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Project Not Found</h1>
        <p className="text-xl text-gray-300 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors">
          Return to Home
        </Link>
      </div>
    </main>
  )
}
