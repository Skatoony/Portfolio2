import Link from "next/link"
import NetworkBackground from "@/components/network-background"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <NetworkBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-16">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            I'm a passionate game developer with a focus on creating immersive and engaging experiences. With expertise
            in various game engines and programming languages, I bring creative ideas to life through interactive
            digital experiences.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>Game Design & Development</li>
            <li>Unity & Unreal Engine</li>
            <li>3D Modeling & Animation</li>
            <li>C#, C++, JavaScript</li>
            <li>UI/UX Design for Games</li>
            <li>Procedural Generation</li>
          </ul>

          <h2>Experience</h2>
          <p>
            I've worked on a variety of projects ranging from indie mobile games to more complex PC and console titles.
            My experience includes both solo development and collaboration with teams of various sizes.
          </p>

          <h2>Education</h2>
          <p>
            Bachelor's Degree in Computer Science with a focus on Game Development from [Your University]. I
            continuously expand my knowledge through online courses and industry workshops.
          </p>

          <h2>Contact</h2>
          <p>
            Feel free to reach out to me at <a href="mailto:your.email@example.com">your.email@example.com</a> or
            connect with me on <a href="#">Twitter</a>, <a href="#">LinkedIn</a>, or <a href="#">GitHub</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
