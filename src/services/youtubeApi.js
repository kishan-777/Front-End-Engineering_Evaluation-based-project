/**
 * YouTube Data API v3 Integration Service
 * Developed for Chitkara University - Front End Engineering - II (25CSE0203)
 * Group G15 (Evaluation-Based Project)
 *
 * Provides live video/channel fetching from Google YouTube Data API v3,
 * with resilient offline fallback to local curated datasets.
 */

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

/**
 * Format ISO 8601 duration (e.g. PT15M33S) into standard mm:ss or hh:mm:ss
 */
export function formatDuration(duration) {
  if (!duration) return '10:00';
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '10:00';
  const hours = parseInt(match[1] || '0', 10);
  const minutes = parseInt(match[2] || '0', 10);
  const seconds = parseInt(match[3] || '0', 10);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format view count numbers into clean strings (e.g. 1.2M views)
 */
export function formatViews(views) {
  const num = parseInt(views, 10);
  if (isNaN(num)) return '100K views';
  if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B views';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M views';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K views';
  return `${num} views`;
}

/**
 * Format published date to relative time
 */
export function formatPublishedTime(dateString) {
  try {
    const published = new Date(dateString);
    const now = new Date();
    const diffSeconds = Math.floor((now - published) / 1000);
    const diffDays = Math.floor(diffSeconds / 86400);

    if (diffDays >= 365) {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
    if (diffDays >= 30) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }
    return 'Today';
  } catch {
    return 'Recently';
  }
}

/**
 * Fetch Live Videos from YouTube Data API v3 by search query
 * @param {string} query Search keyword (e.g. "React JS", "DSA Tutorial", "Music")
 * @param {string} apiKey Google Cloud YouTube Data API v3 Key
 * @param {number} maxResults Number of items (max 50, default 12)
 */
export async function fetchLiveYouTubeVideos(query = 'React JS projects', apiKey = '', maxResults = 12) {
  if (!apiKey || !apiKey.trim()) {
    return {
      success: false,
      videos: [],
      error: 'No YouTube Data API key provided. Operating in offline curated mode.'
    };
  }

  try {
    const searchUrl = `${YOUTUBE_API_BASE}/search?part=snippet&type=video&maxResults=${maxResults}&q=${encodeURIComponent(query)}&key=${apiKey.trim()}`;
    const searchResponse = await fetch(searchUrl);
    
    if (!searchResponse.ok) {
      const errorData = await searchResponse.json().catch(() => ({}));
      const reason = errorData?.error?.message || `HTTP ${searchResponse.status}`;
      return {
        success: false,
        videos: [],
        error: `YouTube API Error: ${reason}`
      };
    }

    const searchData = await searchResponse.json();
    const videoIds = searchData.items?.map(item => item.id?.videoId).filter(Boolean).join(',');

    if (!videoIds) {
      return { success: true, videos: [], totalResults: 0 };
    }

    // Fetch video details (duration, statistics, views)
    const detailsUrl = `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${apiKey.trim()}`;
    const detailsResponse = await fetch(detailsUrl);
    const detailsData = detailsResponse.ok ? await detailsResponse.json() : null;

    const detailsMap = new Map();
    if (detailsData?.items) {
      detailsData.items.forEach(v => detailsMap.set(v.id, v));
    }

    // Transform into standard PheW TuBe VideoCard model
    const transformedVideos = searchData.items.map(item => {
      const vid = item.id.videoId;
      const details = detailsMap.get(vid);
      const snippet = item.snippet;

      return {
        id: `yt_${vid}`,
        slug: snippet.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        title: snippet.title,
        description: snippet.description || '',
        thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url,
        duration: details ? formatDuration(details.contentDetails?.duration) : '10:00',
        views: details ? formatViews(details.statistics?.viewCount) : '250K views',
        timestamp: formatPublishedTime(snippet.publishedAt),
        channelName: snippet.channelTitle,
        channelId: snippet.channelId,
        channelAvatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(snippet.channelTitle)}`,
        category: 'YouTube API',
        videoUrl: `https://www.youtube.com/watch?v=${vid}`,
        youtubeId: vid,
        verified: true,
        source: 'YouTube Data API v3'
      };
    });

    return {
      success: true,
      videos: transformedVideos,
      totalResults: searchData.pageInfo?.totalResults || transformedVideos.length
    };
  } catch (err) {
    return {
      success: false,
      videos: [],
      error: `Network error connecting to YouTube API: ${err.message}`
    };
  }
}
