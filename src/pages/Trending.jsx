import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiOutlineFire } from 'react-icons/hi2';
import { MdOutlineMusicNote, MdOutlineFeed, MdPodcasts } from 'react-icons/md';
import { IoGameControllerOutline } from 'react-icons/io5';
import { TfiCup } from 'react-icons/tfi';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function Trending() {
  const { videos } = useApp();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Now');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/music') setActiveTab('Music');
    else if (path === '/gaming') setActiveTab('Gaming');
    else if (path === '/news') setActiveTab('News');
    else if (path === '/sports') setActiveTab('Sports');
    else if (path === '/podcasts') setActiveTab('Podcasts');
    else setActiveTab('Now');
  }, [location.pathname]);

  const tabs = [
    { id: 'Now', label: 'Trending Now', icon: <HiOutlineFire size={18} /> },
    { id: 'Music', label: 'Music', icon: <MdOutlineMusicNote size={18} /> },
    { id: 'Gaming', label: 'Gaming', icon: <IoGameControllerOutline size={18} /> },
    { id: 'News', label: 'News (CNN)', icon: <MdOutlineFeed size={18} /> },
    { id: 'Sports', label: 'Sports (Sony LIV)', icon: <TfiCup size={17} /> },
    { id: 'Podcasts', label: 'Podcasts (Nikhil Kamath)', icon: <MdPodcasts size={18} /> }
  ];

  const filteredTrending = videos.filter((video) => {
    if (activeTab === 'Now') return true;
    if (activeTab === 'Music') return video.category === 'Music';
    if (activeTab === 'Gaming') return video.category === 'Gaming' || video.category === 'Minecraft';
    if (activeTab === 'News') return video.category === 'News' || video.channelName === 'CNN';
    if (activeTab === 'Sports') return video.category === 'Sports' || video.channelName === 'Sony LIV';
    if (activeTab === 'Podcasts') return video.category === 'Podcasts' || video.channelName === 'Nikhil Kamath';
    return true;
  });

  return (
    <div className="page-container">
      <div className="page-header-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HiOutlineFire size={30} color="#dc2626" />
          <h2>{activeTab === 'Now' ? 'Trending on PheW TuBe' : `${activeTab} Highlights`}</h2>
        </div>
        <p>Curated high-engagement streams across entertainment, tech, music, and gameplay</p>
      </div>

      <div className="trending-tabs-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '14px 0' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`trending-tab-pill ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <section className="video-grid-section" style={{ marginTop: '20px' }}>
        {filteredTrending.length === 0 ? (
          <p className="no-videos-msg" style={{ padding: '40px', textAlign: 'center', color: '#a1a1aa' }}>
            No streams found in this category. Check back soon!
          </p>
        ) : (
          <div className="video-grid">
            {filteredTrending.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Trending;
