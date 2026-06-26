interface YouTubeEmbedProps {
  url: string
}

export default function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  // Convert regular YouTube URLs to embed format
  const getEmbedUrl = (youtubeUrl: string) => {
    // Handle different YouTube URL formats
    let videoId = ""

    // Format 1: youtube.com/watch?v=VIDEO_ID
    if (youtubeUrl.includes("youtube.com/watch")) {
      const urlObj = new URL(youtubeUrl)
      videoId = urlObj.searchParams.get("v") || ""
    }
    // Format 2: youtu.be/VIDEO_ID
    else if (youtubeUrl.includes("youtu.be")) {
      videoId = youtubeUrl.split("/").pop() || ""
    }
    // Format 3: Already an embed URL
    else if (youtubeUrl.includes("youtube.com/embed")) {
      return youtubeUrl
    }

    // Return proper embed URL with additional parameters for better security
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={getEmbedUrl(url)}
        title="YouTube video player"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  )
}
