/**
 * Central site config used for SEO metadata, sitemap and structured data.
 *
 * NOTE: set NEXT_PUBLIC_SITE_URL in your environment (e.g. Vercel project
 * settings) to your real production domain. The fallback below is only a guess
 * and should be replaced so Open Graph / canonical URLs resolve correctly.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://raul-anuta.vercel.app"
).replace(/\/$/, "")

export const siteConfig = {
  name: "Raul Anuta",
  title: "Raul Anuta — Unreal Engine Developer",
  description:
    "Raul Anuta is an Unreal Engine developer building multiplayer systems, VR combat, gameplay, AI and UI/UX. Explore shipped games, prototypes and tools in his portfolio.",
  url: SITE_URL,
  // Default social-share image (1920×1080 screenshot that ships in /public).
  ogImage: "/CradleOfSins1.jpg",
  email: "raulanuta28@gmail.com",
  discord: "https://discord.com/users/1259926949950918809",
  // Public profiles — strengthens "Raul Anuta" entity recognition in Google.
  // Add your YouTube channel, LinkedIn, GitHub, Steam dev page, X/Twitter, etc.
  profiles: [
    "https://discord.com/users/1259926949950918809",
  ],
  keywords: [
    "Raul Anuta",
    "Raul Anuta game developer",
    "Raul Anuta Unreal Engine",
    "Unreal Engine developer",
    "Unreal Engine developer portfolio",
    "freelance Unreal Engine developer",
    "Unreal Engine 5 developer",
    "game developer portfolio",
    "multiplayer game developer",
    "VR game developer",
    "gameplay programmer",
    "UI/UX for games",
  ],
}

export type SiteConfig = typeof siteConfig
