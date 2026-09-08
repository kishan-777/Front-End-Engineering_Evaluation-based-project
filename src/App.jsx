import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import History from './pages/History';
import LikedVideos from './pages/LikedVideos';
import WatchLater from './pages/WatchLater';
import Playlists from './pages/Playlists';
import Trending from './pages/Trending';
import PNF from './pages/PNF';
import { CHANNELS, VIDEOS } from './data/videoData';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedVideoIds, setLikedVideoIds] = useState(['v1', 'v4', 's1']);
  const [subscribedChannels, setSubscribedChannels] = useState([
    'Chai aur Code', 
    'freeCodeCamp.org',
    "India's Got Latent",
    'MrBeast'
  ]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleToggleLike = (id) => {
    setLikedVideoIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleToggleSubscribe = (channelName) => {
    setSubscribedChannels((prev) => {
      if (prev.includes(channelName)) {
        return prev.filter((name) => name !== channelName);
      } else {
        return [...prev, channelName];
      }
    });
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  // Real-time Controlled Word-Based Filter Logic
  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      let matchesCategory = true;
      if (!searchQuery.trim() && selectedCategory !== 'All') {
        matchesCategory = video.category.toLowerCase() === selectedCategory.toLowerCase();
      }

      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        const textToSearch = `${video.title} ${video.channelName} ${video.category}`.toLowerCase();
        const words = textToSearch.split(/[^a-z0-9]+/);
        
        // Match if any word begins with the query, or if the full multi-word query matches
        if (!query.includes(' ')) {
          matchesSearch = words.some((w) => w.startsWith(query));
        } else {
          matchesSearch = textToSearch.includes(query);
        }
      }

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Top Navbar */}
        <Navbar 
          onToggleSidebar={handleToggleSidebar}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearchSubmit={(q) => setSearchQuery(q)}
          onResetSearch={handleResetSearch}
        />

        {/* Main Content Layout */}
        <div className="main-layout">
          <Sidebar 
            isExpanded={isSidebarOpen}
            channels={CHANNELS}
            subscribedChannels={subscribedChannels}
            onToggleSubscribe={handleToggleSubscribe}
            onResetSearch={handleResetSearch}
          />

          <main className={`content-area ${isSidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <Routes>
              {/* Home */}
              <Route path="/" element={
                <Home 
                  videos={filteredVideos}
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => setSelectedCategory(cat)}
                  searchQuery={searchQuery}
                  onClearSearch={handleResetSearch}
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/home" element={
                <Home 
                  videos={filteredVideos}
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => setSelectedCategory(cat)}
                  searchQuery={searchQuery}
                  onClearSearch={handleResetSearch}
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />

              {/* Shorts */}
              <Route path="/shorts" element={
                <Shorts 
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                />
              } />

              {/* Subscriptions */}
              <Route path="/subscriptions" element={
                <Subscriptions 
                  subscribedChannels={subscribedChannels}
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />

              {/* Library */}
              <Route path="/history" element={
                <History 
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/playlists" element={
                <Playlists 
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/watch-later" element={
                <WatchLater 
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/liked" element={
                <LikedVideos 
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />

              {/* Explore */}
              <Route path="/trending" element={
                <Trending 
                  title="🔥 Trending Right Now"
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/music" element={
                <Trending 
                  title="🎵 Music Trending"
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/gaming" element={
                <Trending 
                  title="🎮 Gaming Hub"
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/news" element={
                <Trending 
                  title="📰 News & Events"
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/sports" element={
                <Trending 
                  title="🏆 Sports Central"
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />
              <Route path="/podcasts" element={
                <Trending 
                  title="🎙 Podcasts & Talk Shows"
                  likedVideoIds={likedVideoIds}
                  onToggleLike={handleToggleLike}
                  subscribedChannels={subscribedChannels}
                  onToggleSubscribe={handleToggleSubscribe}
                />
              } />

              {/* 404 */}
              <Route path="*" element={<PNF />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
