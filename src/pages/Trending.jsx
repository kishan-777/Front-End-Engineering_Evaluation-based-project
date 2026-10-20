import React, { useState } from 'react';
import { HiOutlineFire } from 'react-icons/hi2';
import { MdOutlineMusicNote } from 'react-icons/md';
import { IoGameControllerOutline } from 'react-icons/io5';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function Trending() {
  const { videos } = useApp();
  const [activeTab, setActiveTab] = useState('Now');

  const tabs = [
    { id: 'Now', label: 'Now', icon: <HiOutlineFire size={18} /> },
    { id: 'Music', label: 'Music', icon: <MdOutlineMusicNote size={18} /> },
    { id: 'Gaming', label: 'Gaming', icon: <IoGameControllerOutline size={18} /> }
  ];

  const filteredTrending = videos.filter((video) => {
    if (activeTab === 'Now') return true;
    if (activeTab === 'Music') return video.category === 'Music';
    if (activeTab === 'Gaming') return video.category === 'Gaming' || video.category === 'Minecraft';
    return true;
  });

  return (
    <div className="page-container">
      <div className="page-header-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HiOutlineFire size={30} color="#dc2626" />
          <h2>Trending</h2>
        </div>
        <p>Real-time trending videos across entertainment, music, coding, and gaming</p>
      </div>

      <div className="trending-tabs-row">
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
        <div className="video-grid">
          {filteredTrending.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Trending;
