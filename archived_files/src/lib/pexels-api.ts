const PEXELS_API_KEY =
  'iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea';
const PEXELS_BASE_URL = 'https://api.pexels.com/v1';

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
}

export interface PexelsVideo {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: Array<{
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    link: string;
  }>;
  video_pictures: Array<{
    id: number;
    picture: string;
    nr: number;
  }>;
}

export interface PexelsResponse<T> {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  photos?: T[];
  videos?: T[];
}

export class PexelsAPI {
  private static async fetchFromAPI<T>(
    endpoint: string
  ): Promise<PexelsResponse<T>> {
    try {
      const response = await fetch(`${PEXELS_BASE_URL}${endpoint}`, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Pexels API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching from Pexels API:', error);
      throw error;
    }
  }

  static async searchPhotos(
    query: string,
    perPage: number = 10
  ): Promise<PexelsPhoto[]> {
    const encodedQuery = encodeURIComponent(query);
    const response = await this.fetchFromAPI<PexelsPhoto>(
      `/search?query=${encodedQuery}&per_page=${perPage}`
    );
    return response.photos || [];
  }

  static async searchVideos(
    query: string,
    perPage: number = 10
  ): Promise<PexelsVideo[]> {
    const encodedQuery = encodeURIComponent(query);
    const response = await this.fetchFromAPI<PexelsVideo>(
      `/videos/search?query=${encodedQuery}&per_page=${perPage}`
    );
    return response.videos || [];
  }

  static async getCuratedPhotos(perPage: number = 10): Promise<PexelsPhoto[]> {
    const response = await this.fetchFromAPI<PexelsPhoto>(
      `/curated?per_page=${perPage}`
    );
    return response.photos || [];
  }

  static async getPopularVideos(perPage: number = 10): Promise<PexelsVideo[]> {
    const response = await this.fetchFromAPI<PexelsVideo>(
      `/videos/popular?per_page=${perPage}`
    );
    return response.videos || [];
  }
}

// Cinematic-themed search queries for different sections
export const CINEMATIC_QUERIES = {
  hero: ['cinematic', 'dark office', 'dramatic lighting', 'film production'],
  services: [
    'tech workspace',
    'creative studio',
    'digital design',
    'video production',
  ],
  team: ['professional headshot', 'business portrait', 'creative professional'],
  success: [
    'before after',
    'transformation',
    'business success',
    'achievement',
  ],
  blog: ['cinematic', 'dark aesthetic', 'sophisticated', 'elegant'],
  background: [
    'abstract dark',
    'cinematic background',
    'sophisticated pattern',
  ],
};

// Utility function to get optimized image URL
export function getOptimizedImageUrl(
  photo: PexelsPhoto,
  size: 'small' | 'medium' | 'large' = 'medium'
): string {
  return photo.src[size];
}

// Utility function to get optimized video URL
export function getOptimizedVideoUrl(
  video: PexelsVideo,
  quality: 'sd' | 'hd' = 'hd'
): string {
  const videoFile = video.video_files.find(
    file => file.quality === quality || file.quality === 'hd'
  );
  return videoFile?.link || video.video_files[0]?.link || '';
}
