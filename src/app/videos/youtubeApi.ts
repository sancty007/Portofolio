'use server'

import { YouTubeVideo } from "./types";

const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
const API_KEY = process.env.YOUTUBE_API_KEY;

export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
    
  if (!PLAYLIST_ID || !API_KEY) {
    console.error("Les variables d'environnement YOUTUBE_PLAYLIST_ID ou YOUTUBE_API_KEY ne sont pas définies");
    return [];
  }

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}&maxResults=50`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    return data.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos YouTube:", error);
    return [];
  }
}
