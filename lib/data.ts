import type { ProjectType } from "./types"

export const projects: ProjectType[] = [
  {
    id: "1",
    slug: "handyman-corporation",
    title: "Handyman Corporation",
    description: "A handyman simulation game with procedurally generated tasks and repair challenges.",
    fullDescription: `Handyman Corporation is an immersive simulation game that takes players on a journey through the world of home improvement and repair. Each job features unique challenges, tools, and tasks to master.

The game combines elements of business management, skill development, and creative problem-solving as players grow their handyman business and tackle increasingly complex projects. The procedural generation system ensures that no two playthroughs are ever the same, with countless job configurations and repair scenarios.

I developed a custom job simulation system that generates realistic repair scenarios and tool usage based on the specific conditions of each project. The game also features a dynamic wear-and-tear system that impacts task difficulty and decision-making strategies.`,
    image: "/HandymanBG.jpg?height=400&width=600",
    gallery: [
      "/Handyman1.jpg?height=600&width=800",
      "/Handyman2.jpg?height=600&width=800",
      "/Handyman3.jpg?height=600&width=800",
      "/Handyman4.jpg?height=600&width=800&text=Repair%20Tools",
      "/Handyman5.jpg?height=600&width=800&text=Job%20Site",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=fr-_j1miLzY",
    url: "/projects/handyman-corporation",
    tags: ["Unreal Engine", "Simulator", "Full Game"],
    year: "2023",
    role: "Solo Developer",
    tools: ["Unreal Engine", "Simulator", "Full Game", "Shipped"],
    links: {
      store: "https://store.steampowered.com/app/1703180/Handyman_Corporation/",
    },
  },
  {
    id: "2",
    slug: "swordsman-vr",
    title: "Swordsman VR",
    description: "A VR sword-fighting game with dynamic combat encounters and adaptive enemy strategies.",
    fullDescription: `Swordsman VR is an immersive virtual reality sword-fighting game that takes players into intense, action-packed battles. Each encounter features uniquely skilled opponents, 
    a variety of weapons, and challenging scenarios to master. The game combines realistic physics, tactical dueling, and character progression as players face diverse factions and powerful bosses. 
    The dynamic combat system ensures every fight feels fresh and engaging, with countless ways to approach each battle.

I designed core gameplay mechanics, implemented physics-based dismemberment, and refined the game through focused polishing to enhance the overall player experience.`,
    image: "/SwordsmanBG.jpg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800&text=Combat%20System",
      "/placeholder.svg?height=600&width=800&text=Character%20Creation",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    url: "/projects/swordsman-vr",
    tags: ["Godot", "2D", "RPG"],
    year: "2020",
    role: "Team Member Developer",
    tools: ["Godot Engine", "GDScript", "Aseprite", "Tiled"],
    links: {
      demo: "",
      store: "https://store.steampowered.com/app/1206480/Swordsman_VR/",
    },
  },
  {
    id: "3",
    slug: "cosmic-explorers",
    title: "Cosmic Explorers",
    description: "A space exploration game with procedurally generated planets and ecosystems.",
    fullDescription: `Cosmic Explorers is an immersive space exploration game that takes players on a journey through a vast, procedurally generated universe. Each planet features unique ecosystems, creatures, and resources to discover.

The game combines elements of survival, base building, and scientific discovery as players navigate through the cosmos in their customizable spacecraft. The procedural generation system ensures that no two playthroughs are ever the same, with billions of possible planet configurations.

I developed a custom ecosystem simulation that creates believable food chains and creature behaviors based on the environmental conditions of each planet. The game also features a dynamic weather system that affects gameplay and exploration strategies.`,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800&text=Cosmic%20UI",
      "/placeholder.svg?height=600&width=800&text=Space%20Station",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=fr-_j1miLzY",
    url: "/projects/cosmic-explorers",
    tags: ["Unity", "3D", "Procedural Generation"],
    year: "2023",
    role: "Lead Developer & Game Designer",
    tools: ["Unity", "C#", "Blender", "Substance Painter", "FMOD"],
    links: {
      demo: "https://example.com/cosmic-explorers-demo",
      github: "https://github.com/yourusername/cosmic-explorers",
      download: "https://example.com/cosmic-explorers-download",
    },
  },
  {
    id: "4",
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
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    id: "5",
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
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    id: "6",
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
    youtubeUrl: "https://www.youtube.com/watch?v=fr-_j1miLzY",
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
]

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
