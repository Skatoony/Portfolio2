import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle, Sparkles } from "lucide-react"
import NetworkBackground from "@/components/network-background"
import AmbientGlow from "@/components/ambient-glow"
import SiteHeader from "@/components/site-header"

const skills = [
  "Game Design & Development",
  "Gameplay Logic & Game Rules",
  "Multiplayer, Replication & Networking",
  "Databases",
  "Weapons & Combat Systems",
  "Game Modes & Mechanics",
  "Save Games",
  "VR & AR",
  "UI/UX for Games",
  "Gameplay Ability System",
  "EOS, Steam & Google",
  "Environment & Map Optimization",
  "Animations & State Machines",
  "Login & Register",
  "AI Development",
  "Chaos Destruction & Fracture",
  "Vehicle Logic & Locomotion",
  "Bug Fixes & Game Settings",
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#08080c] text-white">
      <NetworkBackground />
      <AmbientGlow />
      <SiteHeader />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-24 pt-32 md:px-8 md:pt-40">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Intro */}
        <div className="animate-fade-up flex items-center gap-2 text-sm font-medium text-violet-400">
          <Sparkles className="h-4 w-4" />
          About me
        </div>
        <h1
          className="animate-fade-up mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Crafting immersive games in{" "}
          <span className="text-gradient">Unreal Engine</span>.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-gray-300"
          style={{ animationDelay: "140ms" }}
        >
          I&apos;m a game developer focused on building immersive, engaging
          experiences with Unreal Engine. Leveraging its powerful tools, I bring
          creative visions to life — delivering interactive digital experiences that
          captivate and inspire.
        </p>

        {/* Skills */}
        <section
          className="animate-fade-up mt-16"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="font-display text-2xl font-bold tracking-tight">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-gray-200 transition-colors hover:border-violet-400/40 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="animate-fade-up mt-16" style={{ animationDelay: "260ms" }}>
          <h2 className="font-display text-2xl font-bold tracking-tight">Experience</h2>
          <div className="mt-6 glass rounded-2xl p-6 md:p-8">
            <p className="leading-relaxed text-gray-300">
              I&apos;ve worked on a range of projects, from indie PC games to complex
              multiplayer and VR titles. My work spans solo development and
              collaborating with diverse teams to deliver unique, engaging games —
              owning everything from core systems and AI to UI/UX, networking and the
              final polish.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="animate-fade-up mt-16" style={{ animationDelay: "320ms" }}>
          <h2 className="font-display text-2xl font-bold tracking-tight">Let&apos;s talk</h2>
          <p className="mt-3 text-gray-400">
            Have a project in mind or just want to say hi? Reach out.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:raulanuta28@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:shadow-fuchsia-500/40 hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              raulanuta28@gmail.com
            </a>
            <a
              href="https://discordapp.com/users/1259926949950918809"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
