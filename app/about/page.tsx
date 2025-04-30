import Link from "next/link"
import NetworkBackground from "@/components/network-background"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <NetworkBackground />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8 md:py-16">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">About Me</h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            I am a skilled game developer with a strong focus on crafting immersive and engaging experiences using Unreal Engine. Leveraging its powerful tools and features, I bring creative visions to life, delivering interactive digital experiences that captivate and inspire.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>Game Design & Development</li>
            <li>Advance Gameplay, Game Logic & Game Rules</li>
            <li>Multiplayer: Replications, Networking & Databases</li>
            <li>Weapons, Fire Weapons & Fighting Logic</li>
            <li>Gamemodes & Mechanics: Game Modes, Game Mechanics & Save Games</li>
            <li>VR & AR</li>
            <li>UI/UX for Games</li>
            <li>Gameplay Ability System</li>
            <li>EOS, Steam & Google</li>
            <li>Environment & Map Optimization</li>
            <li>Animations: Locomotion & State Machines</li>
            <li>Login & Register</li>
            <li>AI Development</li>
            <li>Chaos Destruction & Fracture Plugin</li>
            <li>Vehicle Logic & Vehicle Locomotion</li>
            <li> Bug Fixes & Game Settings</li>
          </ul>

          <h2>Experience</h2>
          <p>
            I have experience working on a range of projects, from indie PC games to complex multiplayer and VR titles. My work includes both solo development and collaborating with diverse teams to deliver unique and engaging games.
          </p>

          <h2>Contact</h2>
          <p>
            Feel free to reach out to me at <a href="mailto:hpqdevpro@gmail.com">hpqdevpro@gmail.com</a> or
            connect with me on <a href="discordapp.com/users/1259926949950918809">Discord</a>
          </p>
        </div>
      </div>
    </main>
  )
}
