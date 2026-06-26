import Link from "next/link"
import { ArrowDownRight, Gamepad2, Sparkles } from "lucide-react"
import NetworkBackground from "@/components/network-background"
import AmbientGlow from "@/components/ambient-glow"
import SiteHeader from "@/components/site-header"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export default function Home() {
  const shipped = projects.filter((p) =>
    p.tools.some((t) => t.toLowerCase().includes("shipped")),
  ).length

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#08080c] text-white">
      <NetworkBackground />
      <AmbientGlow />
      <SiteHeader workHref="#work" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-32 md:px-8 md:pt-40">
        {/* Hero */}
        <section className="mb-12 md:mb-16">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </div>

            <h1
              className="animate-fade-up mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Hi, I&apos;m <span className="text-gradient">Raul Anuta</span>.
              <br />I build games.
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              Game developer specialising in{" "}
              <span className="font-semibold text-white">Unreal Engine</span> — from
              multiplayer systems and VR combat to prototypes, tools and the
              debugging in&#8209;between.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:shadow-fuchsia-500/40 hover:brightness-110"
              >
                View my work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                About me
              </Link>
            </div>

            {/* Quick stats */}
            <dl
              className="animate-fade-up mt-14 flex flex-wrap gap-x-10 gap-y-6"
              style={{ animationDelay: "320ms" }}
            >
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Projects</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">
                  {projects.length}+
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Shipped titles</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">{shipped}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Engine</dt>
                <dd className="mt-1 flex items-center gap-1.5 font-display text-2xl font-bold text-white">
                  <Gamepad2 className="h-5 w-5 text-violet-400" />
                  Unreal
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-28">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-violet-400">
                <Sparkles className="h-4 w-4" />
                Selected work
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Projects &amp; experiments
              </h2>
            </div>
            <span className="hidden shrink-0 text-sm text-gray-500 sm:block">
              {projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="animate-fade-up"
                style={{ animationDelay: `${Math.min(i * 60, 420)}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-500 sm:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Raul Anuta. Built with Next.js.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:hpqdevpro@gmail.com" className="transition-colors hover:text-white">
              Email
            </a>
            <a
              href="https://discordapp.com/users/1259926949950918809"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Discord
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
