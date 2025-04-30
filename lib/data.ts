import type { ProjectType } from "./types"

export const projects: ProjectType[] = [
  {
    id: "1",
    slug: "cosmic-explorers",
    title: "Handyman Corporation",
    description: "A handyman simulation game with procedurally generated tasks and repair challenges.",
    fullDescription: `Handyman Corporation is an immersive simulation game that takes players on a journey through the world of home improvement and repair. Each job features unique challenges, tools, and tasks to master.

The game combines elements of business management, skill development, and creative problem-solving as players grow their handyman business and tackle increasingly complex projects. The procedural generation system ensures that no two playthroughs are ever the same, with countless job configurations and repair scenarios.

I developed a custom job simulation system that generates realistic repair scenarios and tool usage based on the specific conditions of each project. The game also features a dynamic wear-and-tear system that impacts task difficulty and decision-making strategies.`,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800&text=Combat%20System",
      "/placeholder.svg?height=600&width=800&text=Character%20Creation",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=lVBhSpG9CHY",
    url: "/projects/pixel-kingdom",
    tags: ["Unreal Engine", "Simulator", "Full Game"],
    year: "2023",
    role: "Solo Developer",
    tools: ["Unreal Engine", "Simulator", "Shipped"],
    links: {
      demo: "",
      store: "https://store.steampowered.com/app/1703180/Handyman_Corporation/",
    },
  },
  {
    id: "3",
    slug: "neon-racer",
    title: "Neon Racer",
    description: "A high-speed racing game set in a cyberpunk future with dynamic tracks.",
    fullDescription: `Neon Racer is an adrenaline-fueled racing experience set in a vibrant cyberpunk world. Players compete in high-stakes races through neon-lit cityscapes with tracks that dynamically change during races, forcing quick adaptations to new routes and obstacles.

The game features a physics-based vehicle system with customizable hover cars that can be upgraded and modified with parts won from races or purchased from the in-game black market. Each vehicle component affects handling, speed, and special abilities.

I developed a procedural track generation system that creates unique race experiences while maintaining balanced difficulty. The AI opponents use machine learning techniques to adapt to player racing styles, creating increasingly challenging competitions as players progress.`,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800&text=Vehicle%20Customization",
      "/placeholder.svg?height=600&width=800&text=Night%20Race",
    ],
    url: "/projects/neon-racer",
    tags: ["Unreal Engine", "3D", "Racing"],
    year: "2023",
    role: "Technical Director & Level Designer",
    tools: ["Unreal Engine 5", "C++", "Blueprints", "Maya", "Houdini"],
    links: {
      demo: "https://example.com/neon-racer-demo",
      download: "https://example.com/neon-racer-download",
    },
  },
  {
    id: "4",
    slug: "puzzle-dimensions",
    title: "Puzzle Dimensions",
    description: "A mind-bending puzzle game that plays with spatial dimensions and physics.",
    fullDescription: `Puzzle Dimensions challenges players' perception and spatial reasoning with puzzles that manipulate dimensions, gravity, and physics. The game progresses from simple 3D puzzles to mind-bending 4D concepts that require thinking beyond conventional space.

Each level introduces new mechanics that build upon previous concepts, creating a carefully designed difficulty curve that teaches through gameplay rather than tutorials. The minimalist art style uses color and shape to communicate function, allowing players to focus on the puzzles themselves.

I implemented a custom physics system that allows for the manipulation of gravity direction, object scale, and even time flow. The game includes over 75 hand-crafted puzzles and a level editor that lets players create and share their own challenges.`,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800&text=Level%20Editor",
      "/placeholder.svg?height=600&width=800&text=4D%20Puzzle",
    ],
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "/projects/puzzle-dimensions",
    tags: ["Unity", "3D", "Puzzle"],
    year: "2021",
    role: "Lead Programmer & Puzzle Designer",
    tools: ["Unity", "C#", "Blender", "Adobe Illustrator"],
    links: {
      demo: "https://example.com/puzzle-dimensions-demo",
      store: "https://store.steampowered.com/app/example2",
    },
  },
  {
    id: "5",
    slug: "mystic-forest",
    title: "Mystic Forest",
    description: "An atmospheric adventure game with hand-drawn art and immersive sound design.",
    fullDescription: `Mystic Forest is an atmospheric adventure that follows a young spirit guardian navigating an ancient forest filled with forgotten magic and mysterious creatures. The game features hand-drawn artwork that brings the enchanted world to life, complemented by an immersive soundscape that responds to player actions and environment changes.

The narrative unfolds through environmental storytelling and interactions with the forest's inhabitants, with minimal UI elements to maintain immersion. Players solve puzzles by understanding the interconnected nature of the forest ecosystem and the magical properties of various plants and creatures.

I collaborated with traditional artists to develop a unique visual style that combines hand-drawn elements with subtle animation techniques. The adaptive music system changes based on player location, time of day, and story progression, creating a deeply atmospheric experience.`,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800&text=Spirit%20Guardian",
      "/placeholder.svg?height=600&width=800&text=Ancient%20Tree",
    ],
    url: "/projects/mystic-forest",
    tags: ["Custom Engine", "2D", "Adventure"],
    year: "2022",
    role: "Game Designer & Sound Director",
    tools: ["Custom Engine", "C++", "OpenGL", "Adobe Photoshop", "Ableton Live"],
    links: {
      demo: "https://example.com/mystic-forest-demo",
      github: "https://github.com/yourusername/mystic-forest",
    },
  },
  {
    id: "6",
    slug: "strategy-commander",
    title: "Strategy Commander",
    description: "A turn-based strategy game with deep tactical gameplay and multiplayer modes.",
    fullDescription: `Strategy Commander is a deep tactical experience that challenges players to master resource management, unit positioning, and long-term planning. The game features both a campaign mode with narrative-driven scenarios and competitive multiplayer with ranked matchmaking.

The combat system emphasizes positioning and terrain utilization over random chance, with a deterministic damage model that allows players to plan multiple turns ahead. Each faction has unique units and abilities that encourage different playstyles and counter-strategies.

I designed an AI system that uses a combination of decision trees and utility-based evaluation to create challenging opponents that adapt to player strategies. The multiplayer component includes replay analysis tools and a spectator mode for competitive play.`,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800&text=Battle%20Map",
      "/placeholder.svg?height=600&width=800&text=Unit%20Selection",
    ],
    url: "/projects/strategy-commander",
    tags: ["Unity", "Strategy", "Multiplayer"],
    year: "2023",
    role: "Lead Game Designer & AI Programmer",
    tools: ["Unity", "C#", "Photon", "Blender", "Substance Designer"],
    links: {
      demo: "https://example.com/strategy-commander-demo",
      store: "https://store.steampowered.com/app/example3",
    },
  },
]

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
