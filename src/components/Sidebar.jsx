import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

function Sidebar({ 
  isExpanded, 
  channels, 
  subscribedChannels, 
  onToggleSubscribe,
  onResetSearch
}) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Main Section */}
      <div className="sidebar-section">
        <Link 
          to="/" 
          className={`sidebar-item ${currentPath === '/' || currentPath === '/home' ? 'active' : ''}`}
          onClick={onResetSearch}
        >
          <MdHome size={22} />
          {isExpanded && <span>Home</span>}
        </Link>

        <Link 
          to="/shorts" 
          className={`sidebar-item ${currentPath === '/shorts' ? 'active' : ''}`}
        >
          <SiYoutubeshorts size={20} />
          {isExpanded && <span>Shorts</span>}
        </Link>

        <Link 
          to="/subscriptions" 
          className={`sidebar-item ${currentPath === '/subscriptions' ? 'active' : ''}`}
        >
          <MdOutlineSubscriptions size={20} />
          {isExpanded && <span>Subscriptions</span>}
        </Link>
      </div>

      {isExpanded && <div className="sidebar-divider" />}

      {/* You / Library Section */}
      {isExpanded && (
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

      {isExpanded && <div className="sidebar-divider" />}

      {/* Subscriptions List Section */}
      {isExpanded && (
        <div className="sidebar-section">
          <div className="sidebar-heading">Subscriptions</div>
          {channels.map((channel) => {
            const isSubbed = subscribedChannels.includes(channel.name);
            const handleOpenChannel = () => {
              if (channel.channelUrl) {
                window.open(channel.channelUrl, '_blank');
              }
            };

            return (
              <div 
                key={channel.id} 
                className="channel-item"
                onClick={handleOpenChannel}
                title={"Visit " + channel.name + " on YouTube"}
              >
                <img 
                  src={channel.thumbnail} 
                  alt={channel.name} 
                  className="channel-img-sm"
                />
                <span className="channel-title">{channel.name}</span>
                <button 
                  className={`sub-toggle-sm ${isSubbed ? 'subbed' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSubscribe(channel.name);
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

      {isExpanded && <div className="sidebar-divider" />}

      {/* Explore Section */}
      {isExpanded && (
        <div className="sidebar-section">
          <div className="sidebar-heading">Explore</div>
          <Link 
            to="/trending" 
            className={`sidebar-item ${currentPath === '/trending' ? 'active' : ''}`}
          >
            <HiOutlineFire size={20} />
            <span>Trending</span>
          </Link>
          <Link 
            to="/music" 
            className={`sidebar-item ${currentPath === '/music' ? 'active' : ''}`}
          >
            <MdOutlineMusicNote size={20} />
            <span>Music</span>
          </Link>
          <Link 
            to="/gaming" 
            className={`sidebar-item ${currentPath === '/gaming' ? 'active' : ''}`}
          >
            <IoGameControllerOutline size={20} />
            <span>Gaming</span>
          </Link>
          <Link 
            to="/news" 
            className={`sidebar-item ${currentPath === '/news' ? 'active' : ''}`}
          >
            <MdOutlineFeed size={20} />
            <span>News</span>
          </Link>
          <Link 
            to="/sports" 
            className={`sidebar-item ${currentPath === '/sports' ? 'active' : ''}`}
          >
            <TfiCup size={19} />
            <span>Sports</span>
          </Link>
          <Link 
            to="/podcasts" 
            className={`sidebar-item ${currentPath === '/podcasts' ? 'active' : ''}`}
          >
            <MdPodcasts size={20} />
            <span>Podcasts</span>
          </Link>
        </div>
      )}

      {isExpanded && <div className="sidebar-divider" />}

      {/* Settings / Footer Section */}
      {isExpanded && (
        <div className="sidebar-section footer-section">
          <div className="sidebar-item">
            <IoSettingsOutline size={19} />
            <span>Settings</span>
          </div>
          <div className="sidebar-item">
            <MdOutlineOutlinedFlag size={19} />
            <span>Report history</span>
          </div>
          <div className="sidebar-item">
            <IoHelpCircleOutline size={19} />
            <span>Help</span>
          </div>
          <div className="sidebar-item">
            <MdOutlineFeedback size={19} />
            <span>Send feedback</span>
          </div>

          <div className="sidebar-credits">
            <p>© 2026 YouTube Platform</p>
            <p className="credit-tag">Group G15 (PID-17) • Chitkara University</p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
