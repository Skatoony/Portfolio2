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
    slug: "metahuman-character-creator",
    title: "MetaHuman Character Creator",
    description: "A MetaHuman character editor that allows customization of face shape, hair style, and the color of eyes, hair, and skin..",
    fullDescription: `The MetaHuman character editor provides an intuitive and versatile toolset for creating unique characters. Users can shape facial features, select hairstyles,
     and customize the colors of eyes, hair, and skin. Designed with precision and flexibility, the system ensures a seamless character creation experience that brings lifelike avatars to life.

I designed and implemented a MetaHuman character editor, enabling users to modify facial shapes, choose hairstyles, and customize colors for eyes, hair, and skin. I also combined multiple groom assets from other MetaHumans to achieve the desired results.`,
    image: "/MetahumanBG.jpg?height=400&width=600",
    gallery: [
      "/Metahuman1.jpg?height=600&width=800",
      "/Metahuman2.jpg?height=600&width=800",
      "/Metahuman3.jpg?height=600&width=800",
      "/Metahuman4.jpg?height=600&width=800&text=Level%20Editor",
      "/Metahuman5.jpg?height=600&width=800&text=4D%20Puzzle",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=wHhrSTIOrCg",
    url: "/projects/metahuman-character-creator",
    tags: ["Unreal Engine", "MetaHuman", "Prototype"],
    year: "2022",
    role: "Solo Developer",
    tools: ["Unreal Engine", "MetaHuman", "Prototype", "Character Editor", "Not-Shipped"],
    links: {
      github: "https://www.youtube.com/watch?v=wHhrSTIOrCg",
      store: "",
    },
  },
  {
    id: "6",
    slug: "duck-flight-simulator",
    title: "Duck Flight Simulator",
    description: "A modern remake of the 1984 classic Duck Hunt, featuring fast-paced duck hunting action in a vibrant, nature-filled setting.",
    fullDescription: `Mystic Forest is an atmospheric adventure that follows a young spirit guardian navigating an ancient forest filled with forgotten magic and mysterious creatures. The game features hand-drawn artwork that brings the enchanted world to life, complemented by an immersive soundscape that responds to player actions and environment changes.

Duck Flight Simulator is a modern reimagining of the 1984 classic Duck Hunt, offering players an engaging duck hunting experience set in picturesque natural environments.
 Armed with a variety of firearms, players aim to shoot ducks and geese that become increasingly agile with each round. Accompanied by a loyal canine companion, 
the game combines nostalgic charm with updated visuals and mechanics, delivering a fresh take on a beloved arcade shooter.

I developed Duck Flight Simulator, a remake of the 1984 classic Duck Hunt, within just one week. Despite the tight timeline and potential for minor unpolished elements, the game features complete mechanics, responsive AI, and immersive environments that honor the charm of the original while adding a modern touch.`,
    image: "/DuckFlightBG.jpg?height=400&width=600",
    gallery: [
      "/DuckFlight1.jpg?height=600&width=800",
      "/DuckFlight2.jpg?height=600&width=800",
      "/DuckFlight3.jpg?height=600&width=800",
      "/DuckFlight4.jpg?height=600&width=800",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=QMPgN841qK4&t=56s",
    url: "/projects/duck-flight-simulator",
    tags: ["Unreal Engine", "Simulator", "Full Game"],
    year: "2021",
    role: "Solo Developer",
    tools: ["Unreal Engine", "Simulator", "Full Game", "Shooting", "Remake", "Shipped"],
    links: {
      demo: "",
      github: "",
      store: "https://store.steampowered.com/app/1519190/Duck_Flight_Simulator_2021/",
    },
  },
  {
    id: "7",
    slug: "monkey-empire",
    title: "Monkey Empire",
    description: "An MMO-RTS inspired by Clash of Clans, Monkey Empire lets players build empires, loot crypto, and dominate the ape world using blockchain-powered gameplay",
    fullDescription: `Mystic Forest is an atmospheric adventure that follows a young spirit guardian navigating an ancient forest filled with forgotten magic and mysterious creatures. The game features hand-drawn artwork that brings the enchanted world to life, complemented by an immersive soundscape that responds to player actions and environment changes.

Monkey Empire is an MMO-RTS game inspired by Clash of Clans and Guns of Glory, built using Unreal Engine 5. It offers a cross-platform experience where players manage a tribe of 
monkeys to build cities, collect resources, train armies, and raid other players to loot cryptocurrency, MonkeyCoin.
 With a blockchain-driven economy, the game introduces NFT BluePrints that unlock technological advancements, offering endless opportunities for strategy and trade.

I contributed as a front-end developer for Monkey Empire, designing and implementing the UI/UX while integrating backend systems to handle crypto transactions. My work ensured smooth interaction between the blockchain features and the core gameplay experience.`,
    image: "/MonkeyEmpireBG.jpg?height=400&width=600",
    gallery: [
      "/MonkeyEmpire1.jpg?height=600&width=800",
      "/MonkeyEmpire2.jpg?height=600&width=800",
      "/MonkeyEmpire3.jpg?height=600&width=800",
      "/MonkeyEmpire4.jpg?height=600&width=800",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=XrWqlCJ81Vk",
    url: "/projects/monkey-empire",
    tags: ["Unreal Engine", "MMO-RTS", "Front-End"],
    year: "2022",
    role: "Team Member Developer",
    tools: ["Unreal Engine", "MMO-RTS", "Front-End", "UI/UX", "Crypto", "Shipped - Mobile"],
    links: {
      demo: "",
      github: "https://www.youtube.com/watch?v=XrWqlCJ81Vk",
      store: "",
    },
  },
  {
    id: "8",
    slug: "wail",
    title: "Wail",
    description: "A single-player psychological horror game where players must break the Banshee’s curse by recovering relics in a haunted forest.",
    fullDescription: `Wail is a single-player horror experience developed in Unreal Engine 5. Set in a cursed forest, 
    the player must search for four relic pieces and complete a ritual inside a church to escape the Banshee’s wrath. The game blends atmospheric
     tension, jump scares, and environmental storytelling, with an AI-driven Banshee that adapts its behavior to create constant uncertainty. 
     The progression system ties exploration, puzzle-like relic hunts, and survival horror mechanics into one cohesive experience.

I designed and developed the entire game, from core gameplay systems and AI behavior to level design, sound design, and visual atmosphere. This included scripting the progression system, building the environments, balancing the horror pacing, and ensuring that every element supported immersion.`,
    image: "/WailBG.jpg?height=400&width=600",
    gallery: [
      "/Wail1.jpg?height=600&width=800",
      "/Wail5.jpg?height=600&width=800",
      "/Wail3.jpg?height=600&width=800",
      "/Wail4.jpg?height=600&width=800",
      "/Wail2.jpg?height=600&width=800",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=GMN6j57HrCI",
    url: "/projects/wail",
    tags: ["Unreal Engine", "Horror", "Full Game"],
    year: "2025",
    role: "Solo Developer",
    tools: ["Unreal Engine", "Horror", "Full Game", "Singleplayer", "Indie"],
    links: {
      demo: "",
      github: "https://www.youtube.com/watch?v=GMN6j57HrCI",
      store: "https://store.steampowered.com/app/3653460/Wail/",
    },
  },
]

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
