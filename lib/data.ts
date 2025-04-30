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
      "/SwordsmanVR1.jpg?height=600&width=800",
      "/SwordsmanVR2.jpg?height=600&width=800",
      "/SwordsmanVR3.jpg?height=600&width=800",
      "/SwordsmanVR4.jpg?height=600&width=800&text=Combat%20System",
      "/SwordsmanVR5.jpg?height=600&width=800&text=Character%20Creation",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=9r0sOcWfof8",
    url: "/projects/swordsman-vr",
    tags: ["Unreal Engine", "VR", "Combat"],
    year: "2020",
    role: "Team Member Developer",
    tools: ["Unreal Engine", "VR", "Dismemberment", "Polish", "Gameplay", "Combat", "Shipped"],
    links: {
      demo: "",
      store: "https://store.steampowered.com/app/1206480/Swordsman_VR/",
    },
  },
  {
    id: "3",
    slug: "the-pitch",
    title: "The Pitch",
    description: "A zero-gravity multiplayer sports game with dynamic arenas and high-speed gameplay.",
    fullDescription: `The Pitch is an immersive zero-gravity sports game that takes players into fast-paced, team-based arenas. Each match challenges players to master unique movement mechanics, strategic teamwork, and precise timing to outplay their opponents. The game combines elements of 
    competitive multiplayer, skillful dashing, and dynamic goal scoring in an engaging and ever-evolving environment. 
    The physics-based mechanics and competitive dynamics ensure that every game is thrilling and unique.

I developed robust multiplayer systems and networking mechanics to support seamless online matches. The game features responsive gameplay and real-time interactions, ensuring competitive fairness and fluid team-based dynamics.`,
    image: "/ThePitchBG.jpg?height=400&width=600",
    gallery: [
      "/ThePitch1.jpg?height=600&width=800",
      "/ThePitch2.jpg?height=600&width=800",
      "/ThePitch3.jpg?height=600&width=800",
      "/ThePitch4.jpg?height=600&width=800",
      "/ThePitch5.jpg?height=600&width=800&text=Space%20Station",
    ],
    youtubeUrl: "",
    url: "/projects/the-pitch",
    tags: ["Unreal Engine", "Competitive", "Multiplayer"],
    year: "2025",
    role: "Team Member Developer",
    tools: ["Unreal Engine", "Competitive", "Multiplayer", "Gameplay", "Not-Shipped"],
    links: {
      demo: "",
      github: "",
      store: "https://store.steampowered.com/app/3482770/The_Pitch/",
    },
  },
  {
    id: "4",
    slug: "fifa-style-mainmenu",
    title: "Fifa Style Main Menu",
    description: "A FIFA-style main menu featuring customizable team logos, flags, colors, and music, with smooth animations and interactive effects.",
    fullDescription: `The main menu, inspired by FIFA's design, offers a fully customizable experience where players can personalize team logos, flags, colors, and music playlists. 
    Enhanced by smooth animations and visually striking button effects, the menu delivers an intuitive and engaging user interface. Built with attention to detail, 
    the system seamlessly blends functionality with style, creating an immersive entry point for players.

I implemented a FIFA-inspired main menu design from Figma into Unreal Engine, building backend logic for team customization, music integration, and polished animations. My work ensured a seamless and dynamic user experience, combining aesthetic quality with robust functionality.`,
    image: "/FifaMenuBG.jpg?height=400&width=600",
    gallery: [
      "/FifaMenuBG2.jpg?height=600&width=800",
      "/FifaMenuBG1.jpg?height=600&width=800",
      "/FifaMenuBG3.jpg?height=600&width=800",
      "/FifaMenuBG4.jpg?height=600&width=800",
      "/FifaMenuBG5.jpg?height=600&width=800&text=Vehicle%20Customization",
    ],
    youtubeUrl: "hhttps://youtu.be/3NqdRZf7Tr4",
    url: "/projects/fifa-style-mainmenu",
    tags: ["Unreal Engine", "UI/UX", "Main Menu"],
    year: "2020",
    role: "Solo Developer",
    tools: ["Unreal Engine", "UI/UX", "Figma", "Not-Shipped"],
    links: {
      github: "https://www.youtube.com/watch?v=3NqdRZf7Tr4",
      download: "",

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
