import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  MdHome, 
  MdOutlineSubscriptions, 
  MdHistory, 
  MdOutlinePlaylistPlay, 
  MdOutlineWatchLater, 
  MdOutlineMusicNote, 
  MdOutlineFeed, 
  MdPodcasts, 
  MdOutlineOutlinedFlag, 
  MdOutlineFeedback 
} from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { AiOutlineLike } from 'react-icons/ai';
import { HiOutlineFire } from 'react-icons/hi2';
import { IoGameControllerOutline, IoSettingsOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { TfiCup } from 'react-icons/tfi';
import { FiExternalLink } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function Sidebar() {
  const { 
    isSidebarExpanded, 
    channels, 
    subscribedChannels, 
    toggleSubscribe,
    setSearchQuery,
    setSelectedCategory,
    setIsSettingsOpen,
    setIsHelpOpen,
    setIsFeedbackOpen
  } = useApp();

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleResetHome = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  const handleChannelClick = (channel) => {
    setSearchQuery(channel.name);
    setSelectedCategory('All');
    navigate('/');
  };

  const handleExploreCategory = (category, routePath) => {
    setSelectedCategory(category);
    setSearchQuery('');
    navigate(routePath);
  };

  return (
    <aside className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Main Section */}
      <div className="sidebar-section">
        <Link 
          to="/" 
          className={`sidebar-item ${currentPath === '/' || currentPath === '/home' ? 'active' : ''}`}
          onClick={handleResetHome}
        >
          <MdHome size={22} />
          {isSidebarExpanded && <span>Home</span>}
        </Link>

        <Link 
          to="/shorts" 
          className={`sidebar-item ${currentPath === '/shorts' ? 'active' : ''}`}
        >
          <SiYoutubeshorts size={20} />
          {isSidebarExpanded && <span>Shorts</span>}
        </Link>

        <Link 
          to="/subscriptions" 
          className={`sidebar-item ${currentPath === '/subscriptions' ? 'active' : ''}`}
        >
          <MdOutlineSubscriptions size={20} />
          {isSidebarExpanded && <span>Subscriptions</span>}
        </Link>
      </div>

      {isSidebarExpanded && <div className="sidebar-divider" />}

      {/* You / Library Section */}
      {isSidebarExpanded && (
        <div className="sidebar-section">
          <div className="sidebar-heading">You &gt;</div>
          <Link 
            to="/history" 
            className={`sidebar-item ${currentPath === '/history' ? 'active' : ''}`}
          >
            <MdHistory size={20} />
            <span>History</span>
          </Link>
          <Link 
            to="/playlists" 
            className={`sidebar-item ${currentPath === '/playlists' ? 'active' : ''}`}
          >
            <MdOutlinePlaylistPlay size={20} />
            <span>Playlists</span>
          </Link>
          <Link 
            to="/watch-later" 
            className={`sidebar-item ${currentPath === '/watch-later' ? 'active' : ''}`}
          >
            <MdOutlineWatchLater size={20} />
            <span>Watch Later</span>
          </Link>
          <Link 
            to="/liked" 
            className={`sidebar-item ${currentPath === '/liked' ? 'active' : ''}`}
          >
            <AiOutlineLike size={20} />
            <span>Liked Videos</span>
          </Link>
        </div>
      )}

      {isSidebarExpanded && <div className="sidebar-divider" />}

      {/* Subscriptions List Section */}
      {isSidebarExpanded && (
        <div className="sidebar-section">
          <div className="sidebar-heading">Subscriptions</div>
          {channels.map((channel) => {
            const isSubbed = subscribedChannels.includes(channel.name);
            return (
              <div 
                key={channel.id} 
                className="channel-item"
                title={`${channel.name} (${channel.subscribers})`}
              >
                <div 
                  className="channel-clickable-area"
                  onClick={() => handleChannelClick(channel)}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, cursor: 'pointer', overflow: 'hidden' }}
                >
                  <img 
                    src={channel.thumbnail} 
                    alt={channel.name} 
                    className="channel-img-sm"
                  />
                  <span className="channel-title" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {channel.name}
                  </span>
                </div>

                {/* External YouTube Link icon */}
                <button
                  type="button"
                  className="channel-ext-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(channel.channelUrl, '_blank');
                  }}
                  title={`Open ${channel.name} on YouTube`}
                  style={{ background: 'none', border: 'none', color: '#71717a', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                >
                  <FiExternalLink size={13} />
                </button>

                <button 
                  className={`sub-toggle-sm ${isSubbed ? 'subbed' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubscribe(channel.name);
                  }}
                  title={isSubbed ? "Subscribed" : "Subscribe"}
                >
                  {isSubbed ? 'Subscribed' : 'Join'}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {isSidebarExpanded && <div className="sidebar-divider" />}

      {/* Explore Section - Every button is fully functional! */}
      {isSidebarExpanded && (
        <div className="sidebar-section">
          <div className="sidebar-heading">Explore</div>
          <button 
            type="button"
            className={`sidebar-item btn-item ${currentPath === '/trending' ? 'active' : ''}`}
            onClick={() => handleExploreCategory('All', '/trending')}
          >
            <HiOutlineFire size={20} />
            <span>Trending</span>
          </button>
          <button 
            type="button"
            className={`sidebar-item btn-item ${currentPath === '/music' ? 'active' : ''}`}
            onClick={() => handleExploreCategory('Music', '/music')}
          >
            <MdOutlineMusicNote size={20} />
            <span>Music</span>
          </button>
          <button 
            type="button"
            className={`sidebar-item btn-item ${currentPath === '/gaming' ? 'active' : ''}`}
            onClick={() => handleExploreCategory('Gaming', '/gaming')}
          >
            <IoGameControllerOutline size={20} />
            <span>Gaming</span>
          </button>
          <button 
            type="button"
            className={`sidebar-item btn-item ${currentPath === '/news' ? 'active' : ''}`}
            onClick={() => handleExploreCategory('News', '/news')}
          >
            <MdOutlineFeed size={20} />
            <span>News (CNN)</span>
          </button>
          <button 
            type="button"
            className={`sidebar-item btn-item ${currentPath === '/sports' ? 'active' : ''}`}
            onClick={() => handleExploreCategory('Sports', '/sports')}
          >
            <TfiCup size={19} />
            <span>Sports (Sony LIV)</span>
          </button>
          <button 
            type="button"
            className={`sidebar-item btn-item ${currentPath === '/podcasts' ? 'active' : ''}`}
            onClick={() => handleExploreCategory('Podcasts', '/podcasts')}
          >
            <MdPodcasts size={20} />
            <span>Podcasts (Nikhil Kamath)</span>
          </button>
        </div>
      )}

      {isSidebarExpanded && <div className="sidebar-divider" />}

      {/* Settings / Footer Section - All 4 buttons functional! */}
      {isSidebarExpanded && (
        <div className="sidebar-section footer-section">
          <div 
            className="sidebar-item clickable-item"
            onClick={() => setIsSettingsOpen(true)}
            title="Open App Settings"
          >
            <IoSettingsOutline size={19} />
            <span>Settings</span>
          </div>
          <div 
            className="sidebar-item clickable-item"
            onClick={() => {
              navigate('/history');
              toast.info('Viewing Watch History report 📊', { toastId: 'rep_hist' });
            }}
            title="View Watch History Report"
          >
            <MdOutlineOutlinedFlag size={19} />
            <span>Report history</span>
          </div>
          <div 
            className="sidebar-item clickable-item"
            onClick={() => setIsHelpOpen(true)}
            title="Help & Keyboard Shortcuts"
          >
            <IoHelpCircleOutline size={19} />
            <span>Help</span>
          </div>
          <div 
            className="sidebar-item clickable-item"
            onClick={() => setIsFeedbackOpen(true)}
            title="Send Feedback"
          >
            <MdOutlineFeedback size={19} />
            <span>Send feedback</span>
          </div>

          <div className="sidebar-credits">
            <p>© 2026 PheW TuBe</p>
            <p className="credit-tag">Group G15 (PID-17)</p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
