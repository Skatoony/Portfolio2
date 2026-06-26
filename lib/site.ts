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
  title: "Raul Anuta — Game Developer",
  description:
    "Portfolio of Raul Anuta, a game developer specialising in Unreal Engine — multiplayer systems, VR combat, gameplay, AI, UI/UX, prototypes and tools.",
  url: SITE_URL,
  // Default social-share image (1920×1080 screenshot that ships in /public).
  ogImage: "/CradleOfSins1.jpg",
  email: "raulanuta28@gmail.com",
  discord: "https://discord.com/users/1259926949950918809",
  keywords: [
    "Raul Anuta",
    "game developer",
    "Unreal Engine developer",
    "game programmer",
    "multiplayer game development",
    "VR developer",
    "Unreal Engine 5",
    "gameplay programmer",
    "UI/UX for games",
    "game portfolio",
  ],
}

export type SiteConfig = typeof siteConfig
