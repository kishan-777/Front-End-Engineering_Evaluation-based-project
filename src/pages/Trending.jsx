import React, { useMemo } from 'react';
import VideoCard from '../components/VideoCard';
import { VIDEOS } from '../data/videoData';

function Trending({ 
  title, 
  category, 
  description, 
  likedVideoIds, 
  onToggleLike, 
  subscribedChannels, 
  onToggleSubscribe 
}) {
  const displayVideos = useMemo(() => {
    // 1. Music Feed: strictly music category
    if (category === 'Music') {
      return VIDEOS.filter((v) => v.category === 'Music');
    }

    // 2. Gaming Feed: gaming & minecraft
    if (category === 'Gaming') {
      return VIDEOS.filter((v) => v.category === 'Gaming' || v.category === 'Minecraft');
    }

    // 3. Podcasts & Talk Shows: podcasts & comedy talk episodes
    if (category === 'Podcasts') {
      return VIDEOS.filter((v) => v.category === 'Podcasts' || v.category === 'Comedy');
    }

    // 4. Tech & Dev News: Coding, Web Essentials, System Design
    if (category === 'News') {
      return VIDEOS.filter((v) => 
        v.category === 'Coding & Tech' || 
        v.category === 'React JS' || 
        v.category === 'DSA' || 
        v.category === 'Podcasts'
      );
    }

    // 5. Sports & Extreme Action: Extreme survival, heists & stunts
    if (category === 'Sports') {
      return VIDEOS.filter((v) => 
        v.title.toLowerCase().includes('stranded') || 
        v.title.toLowerCase().includes('survived') || 
        v.title.toLowerCase().includes('robbery') ||
        v.channelName === 'MrBeast'
      );
    }

    // 6. Trending (Default): Sort all videos by highest view count descending
    return [...VIDEOS].sort((a, b) => {
      const parseViews = (vStr) => {
        if (!vStr) return 0;
        if (vStr.includes('M')) return parseFloat(vStr) * 1_000_000;
        if (vStr.includes('K')) return parseFloat(vStr) * 1_000;
        return parseFloat(vStr) || 0;
      };
      return parseViews(b.views) - parseViews(a.views);
    });
  }, [category]);

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>{title || 'Trending Content'}</h2>
        <p>{description || `${displayVideos.length} curated videos for this section`}</p>
      </div>

      <div className="video-grid">
        {displayVideos.map((video) => (
          <VideoCard 
            key={video.id}
            video={video}
            isLiked={likedVideoIds.includes(video.id)}
            onToggleLike={onToggleLike}
            isSubscribed={subscribedChannels.includes(video.channelName)}
            onToggleSubscribe={onToggleSubscribe}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
