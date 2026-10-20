import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AuthModal from './components/AuthModal';
import UploadModal from './components/UploadModal';
import SettingsModal from './components/SettingsModal';
import HelpModal from './components/HelpModal';
import FeedbackModal from './components/FeedbackModal';

import Home from './pages/Home';
import WatchPage from './pages/WatchPage';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import History from './pages/History';
import LikedVideos from './pages/LikedVideos';
import WatchLater from './pages/WatchLater';
import Playlists from './pages/Playlists';
import Trending from './pages/Trending';
import PNF from './pages/PNF';
import './App.css';

function AppContent() {
  const { isSidebarExpanded } = useApp();

  return (
    <div className="app-container">
      {/* Top Navigation Bar with Live Search & Auth */}
      <Navbar />

      {/* Interactive Modals */}
      <AuthModal />
      <UploadModal />
      <SettingsModal />
      <HelpModal />
      <FeedbackModal />

      {/* Main Layout Area */}
      <div className="main-layout">
        {/* Collapsible Sidebar Navigation */}
        <Sidebar />

        {/* Dynamic Route Content Area */}
        <main className={`content-area ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* Phase 2 Core Feature: Dynamic Watch Route with useParams() */}
            <Route path="/watch/:id" element={<WatchPage />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/history" element={<History />} />
            <Route path="/liked" element={<LikedVideos />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/music" element={<Trending />} />
            <Route path="/gaming" element={<Trending />} />
            <Route path="/news" element={<Trending />} />
            <Route path="/sports" element={<Trending />} />
            <Route path="/podcasts" element={<Trending />} />
            <Route path="*" element={<PNF />} />
          </Routes>
        </main>
      </div>

      {/* Teacher-Recommended React-Toastify Asynchronous Feedback */}
      <ToastContainer
        position="bottom-right"
        autoClose={2400}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
