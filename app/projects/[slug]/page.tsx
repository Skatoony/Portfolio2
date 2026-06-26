import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data"
import { siteConfig, SITE_URL } from "@/lib/site"
import ProjectDetail from "./project-detail"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Project not found" }
  }

  const url = `/projects/${project.slug}`
  const image = project.image || siteConfig.ogImage

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.tags, ...project.tools, siteConfig.name],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      url,
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      images: [image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: project.title,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: `${SITE_URL}${project.image}`,
    gamePlatform: project.tags,
    applicationCategory: "Game",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: SITE_URL,
    },
    ...(project.links?.store ? { sameAs: project.links.store } : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail project={project} />
    </>
  )
}
