export interface ProjectType {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  url: string
  tags: string[]
  year: string
  role: string
  tools: string[]
  youtubeUrl?: string
  youtubeUrls?: string[]
  contributions?: string[]
  links?: {
    demo?: string
    github?: string
    download?: string
    store?: string
  }
}
