import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { VIDEOS, SHORTS, CATEGORIES, CHANNELS, INITIAL_COMMENTS } from '../data/videoData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // 1. Data Sources
  const [videos] = useState(VIDEOS);
  const [shorts] = useState(SHORTS);
  const [categories] = useState(CATEGORIES);
  const [channels, setChannels] = useState(CHANNELS);

  // 2. Navigation & UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // 3. User Authentication State (Persistent)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_current_user');
      return saved ? JSON.parse(saved) : {
        name: 'G15 Student',
        email: 'g15@chitkara.edu.in',
        avatar: '/images/user_avatar.svg',
        isLoggedIn: false
      };
    } catch {
      return { name: 'G15 Student', email: 'g15@chitkara.edu.in', avatar: '/images/user_avatar.svg', isLoggedIn: false };
    }
  });

  // 4. Liked Videos State (Persistent)
  const [likedVideoIds, setLikedVideoIds] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_liked_videos');
      return saved ? JSON.parse(saved) : ['v1', 'v4', 'v6', 's1'];
    } catch {
      return ['v1', 'v4', 'v6', 's1'];
    }
  });

  // 5. Watch Later State (Persistent)
  const [watchLaterIds, setWatchLaterIds] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_watch_later');
      return saved ? JSON.parse(saved) : ['v2', 'v10', 'v14', 'v15'];
    } catch {
      return ['v2', 'v10', 'v14', 'v15'];
    }
  });

  // 6. Subscribed Channels State (Persistent)
  const [subscribedChannels, setSubscribedChannels] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_subscribed_channels');
      return saved ? JSON.parse(saved) : ['Chai aur Code', 'Samay Raina', 'freeCodeCamp.org', 'MrBeast'];
    } catch {
      return ['Chai aur Code', 'Samay Raina', 'freeCodeCamp.org', 'MrBeast'];
    }
  });

  // 7. Watch History State (Persistent)
  const [watchHistory, setWatchHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_watch_history');
      return saved ? JSON.parse(saved) : [
        { id: 'v1', watchedAt: 'Today' },
        { id: 'v4', watchedAt: 'Yesterday' },
        { id: 'v2', watchedAt: '3 days ago' }
      ];
    } catch {
      return [
        { id: 'v1', watchedAt: 'Today' },
        { id: 'v4', watchedAt: 'Yesterday' }
      ];
    }
  });

  // 8. Video Comments State (Persistent)
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_comments');
      return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  // Save changes to localStorage via useEffect
  useEffect(() => {
    localStorage.setItem('phew_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('phew_liked_videos', JSON.stringify(likedVideoIds));
  }, [likedVideoIds]);

  useEffect(() => {
    localStorage.setItem('phew_watch_later', JSON.stringify(watchLaterIds));
  }, [watchLaterIds]);

  useEffect(() => {
    localStorage.setItem('phew_subscribed_channels', JSON.stringify(subscribedChannels));
  }, [subscribedChannels]);

  useEffect(() => {
    localStorage.setItem('phew_watch_history', JSON.stringify(watchHistory));
  }, [watchHistory]);

  useEffect(() => {
    localStorage.setItem('phew_comments', JSON.stringify(comments));
  }, [comments]);

  // Handler: Toggle Like
  const toggleLike = (id) => {
    setLikedVideoIds((prev) => {
      const isLiked = prev.includes(id);
      if (isLiked) {
        toast.info('Removed from Liked Videos');
        return prev.filter((item) => item !== id);
      } else {
        toast.success('Added to Liked Videos ❤️');
        return [...prev, id];
      }
    });
  };

  // Handler: Toggle Watch Later
  const toggleWatchLater = (id) => {
    setWatchLaterIds((prev) => {
      const isSaved = prev.includes(id);
      if (isSaved) {
        toast.info('Removed from Watch Later');
        return prev.filter((item) => item !== id);
      } else {
        toast.success('Saved to Watch Later 🕒');
        return [...prev, id];
      }
    });
  };

  // Handler: Toggle Subscribe
  const toggleSubscribe = (channelName) => {
    setSubscribedChannels((prev) => {
      const isSubbed = prev.includes(channelName);
      if (isSubbed) {
        toast.info(`Unsubscribed from ${channelName}`);
        return prev.filter((name) => name !== channelName);
      } else {
        toast.success(`Subscribed to ${channelName} 🔔`);
        return [...prev, channelName];
      }
    });
  };

  // Handler: Add to History when video opened
  const addToHistory = (videoId) => {
    setWatchHistory((prev) => {
      const filtered = prev.filter((item) => item.id !== videoId);
      return [{ id: videoId, watchedAt: 'Just now' }, ...filtered];
    });
  };

  // Handler: Clear History
  const clearHistory = () => {
    setWatchHistory([]);
    toast.info('Watch history cleared');
  };

  // Handler: Add Comment to a Video
  const addComment = (videoId, text) => {
    if (!text.trim()) return;
    const newComment = {
      id: 'c_' + Date.now(),
      author: currentUser.isLoggedIn ? currentUser.name : 'Chitkara Student (Guest)',
      avatar: currentUser.isLoggedIn ? currentUser.avatar : '/images/user_avatar.svg',
      timestamp: 'Just now',
      text: text.trim(),
      likes: 0,
      replies: 0
    };

    setComments((prev) => ({
      ...prev,
      [videoId]: [newComment, ...(prev[videoId] || [])]
    }));

    toast.success('Comment posted successfully! 💬');
  };

  // Handler: User Login
  const loginUser = (userData) => {
    setCurrentUser({
      name: userData.name || 'G15 Team Member',
      email: userData.email,
      avatar: '/images/user_avatar.svg',
      isLoggedIn: true
    });
    setIsAuthModalOpen(false);
    toast.success(`Welcome back, ${userData.name || 'User'}! 🎉`);
  };

  // Handler: User Logout
  const logoutUser = () => {
    setCurrentUser({
      name: 'Guest User',
      email: '',
      avatar: '/images/user_avatar.png',
      isLoggedIn: false
    });
    toast.info('Logged out successfully');
  };

  const value = {
    videos,
    shorts,
    categories,
    channels,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    isSidebarExpanded,
    setIsSidebarExpanded,
    isAuthModalOpen,
    setIsAuthModalOpen,
    currentUser,
    likedVideoIds,
    watchLaterIds,
    subscribedChannels,
    watchHistory,
    comments,
    toggleLike,
    toggleWatchLater,
    toggleSubscribe,
    addToHistory,
    clearHistory,
    addComment,
    loginUser,
    logoutUser
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
export default AppContext;
