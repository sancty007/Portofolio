import { fetchYouTubeVideos } from "./youtubeApi";
import { YouTubeVideo } from "./types";

export default async function VideosPage() {
  const videos: YouTubeVideo[] = await fetchYouTubeVideos();

  return (
    <div className="container mx-auto space-y-6 p-12">
      <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-300">
        Nos vidéos YouTube
      </h1>

      <ul className="grid grid-cols-2 gap-4">
        {videos.map((video) => (
          <li key={video.id} className="space-y-4">
            <h2>{video.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <p className="bg-gradient-to-r from-blue-600 to-red-300 inline-block p-2 rounded-lg">
              {new Date(video.publishedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
