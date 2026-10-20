import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { VIDEOS, SHORTS, CATEGORIES, CHANNELS, INITIAL_COMMENTS, slugify } from '../data/videoData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // 1. Uploaded Videos State (Persistent)
  const [uploadedVideos, setUploadedVideos] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_uploaded_videos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 2. Main Videos State (Persistent with User Uploads prepended)
  const [videos, setVideos] = useState(() => {
    try {
      const savedUploads = localStorage.getItem('phew_uploaded_videos');
      const userUploads = savedUploads ? JSON.parse(savedUploads) : [];
      // Combine user-uploaded videos at the top with official dataset
      return [...userUploads, ...VIDEOS];
    } catch {
      return VIDEOS;
    }
  });

  const [shorts] = useState(SHORTS);
  const [categories] = useState(CATEGORIES);
  const [channels, setChannels] = useState(CHANNELS);

  // 3. Navigation & UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Autoplay State (Functional across Settings & Watch Page)
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_autoplay');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const toggleAutoplay = () => {
    setIsAutoplayEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('phew_autoplay', JSON.stringify(next));
      toast.info(`Autoplay ${next ? 'Enabled' : 'Disabled'}`, { toastId: 'ap_toast' });
      return next;
    });
  };

  // Interactive Modals State
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  // Notifications State
  const [notifications, setNotifications] = useState([
    { id: 'n1', title: 'Chai aur Code uploaded: Complete React 19 Full Course', time: '2 hours ago', unread: true, videoId: 'complete-react-course-with-projects-part-1' },
    { id: 'n2', title: 'Samay Raina: Latent Season 2 Episode 6 ft. Rakhi Sawant', time: 'Yesterday', unread: true, videoId: 'indias-got-latent-s2-ep6-rakhi-sawant-ashneer-grover' },
    { id: 'n3', title: 'MrBeast: $1 vs $250,000,000 Private Island Challenge', time: '2 days ago', unread: true, videoId: '1-vs-250000000-private-island' },
    { id: 'n4', title: 'Techno Gamerz: GTA 5 Episode 147 Police Chase', time: '3 days ago', unread: false, videoId: 'biggest-bank-robbery-in-gta-5-techno-gamerz' }
  ]);

  // 4. User Authentication State (Persistent)
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

  // 5. Liked Videos State (Persistent)
  const [likedVideoIds, setLikedVideoIds] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_liked_videos');
      return saved ? JSON.parse(saved) : ['v1', 'v4', 'v6', 's1'];
    } catch {
      return ['v1', 'v4', 'v6', 's1'];
    }
  });

  // 6. Watch Later State (Persistent)
  const [watchLaterIds, setWatchLaterIds] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_watch_later');
      return saved ? JSON.parse(saved) : ['v2', 'v10', 'v14', 'v15'];
    } catch {
      return ['v2', 'v10', 'v14', 'v15'];
    }
  });

  // 7. Subscribed Channels State (Persistent)
  const [subscribedChannels, setSubscribedChannels] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_subscribed_channels');
      return saved ? JSON.parse(saved) : ['Chai aur Code', 'Samay Raina', 'freeCodeCamp.org', 'MrBeast'];
    } catch {
      return ['Chai aur Code', 'Samay Raina', 'freeCodeCamp.org', 'MrBeast'];
    }
  });

  // 8. Watch History State (Persistent)
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

  // 9. Video Comments State (Persistent)
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem('phew_comments');
      return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  // Theme State (Dark / Light)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('phew_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('phew_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('phew_uploaded_videos', JSON.stringify(uploadedVideos));
  }, [uploadedVideos]);

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
      return isLiked ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  // Handler: Toggle Watch Later
  const toggleWatchLater = (id) => {
    const isSaved = watchLaterIds.includes(id);
    if (isSaved) {
      toast.info('Removed from Watch Later', { toastId: `wl_${id}` });
      setWatchLaterIds((prev) => prev.filter((item) => item !== id));
    } else {
      toast.success('Saved to Watch Later 🕒', { toastId: `wl_${id}` });
      setWatchLaterIds((prev) => [...prev, id]);
    }
  };

  // Handler: Toggle Subscribe
  const toggleSubscribe = (channelName) => {
    const isSubbed = subscribedChannels.includes(channelName);
    if (isSubbed) {
      toast.info(`Unsubscribed from ${channelName}`, { toastId: `sub_${channelName}` });
      setSubscribedChannels((prev) => prev.filter((name) => name !== channelName));
    } else {
      toast.success(`Subscribed to ${channelName} 🔔`, { toastId: `sub_${channelName}` });
      setSubscribedChannels((prev) => [...prev, channelName]);
    }
  };

  // Handler: Upload Video with File Explorer support
  const uploadVideo = (newVideo) => {
    const cleanTitle = (newVideo.title || 'Community Video').trim();
    const videoObj = {
      id: 'v_user_' + Date.now(),
      slug: slugify(cleanTitle) || ('user-video-' + Date.now()),
      isUserUpload: true,
      title: cleanTitle,
      thumbnail: newVideo.thumbnail || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      duration: newVideo.duration || '04:15',
      views: '0 views',
      timestamp: 'Just now',
      channelName: currentUser.isLoggedIn ? currentUser.name : 'Group G15 (You)',
      channelAvatar: currentUser.isLoggedIn ? currentUser.avatar : '/images/user_avatar.svg',
      channelId: 'ch_user',
      category: newVideo.category || 'React JS',
      videoUrl: newVideo.videoUrl || 'https://www.youtube.com/watch?v=k3G_n_L2B3g',
      youtubeId: newVideo.youtubeId || 'k3G_n_L2B3g',
      localFileUrl: newVideo.localFileUrl || null,
      fileName: newVideo.fileName || null,
      fileSize: newVideo.fileSize || null,
      verified: true,
      likes: '0',
      subscribers: '1.2K subscribers',
      description: newVideo.description || 'Uploaded community project video for PheW TuBe Evaluation-II.'
    };

    setUploadedVideos((prev) => [videoObj, ...prev]);
    setVideos((prev) => [videoObj, ...prev]);
    toast.success('Video uploaded successfully to PheW TuBe! 🎬', { toastId: 'video_uploaded' });
    setIsUploadOpen(false);
    return videoObj;
  };

  // Handler: Delete Uploaded Video
  const deleteUploadedVideo = (videoId) => {
    setUploadedVideos((prev) => prev.filter((v) => v.id !== videoId));
    setVideos((prev) => prev.filter((v) => v.id !== videoId));
    toast.info('Video removed from Your Uploads', { toastId: `del_${videoId}` });
  };

  // Handler: Mark all notifications read
  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    toast.success('All notifications marked as read', { toastId: 'notif_read' });
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
    toast.info('Watch history cleared', { toastId: 'hist_cleared' });
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

    toast.success('Comment posted successfully! 💬', { toastId: 'comment_added' });
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
    toast.success(`Welcome back, ${userData.name || 'User'}! 🎉`, { toastId: 'login_success' });
  };

  // Handler: User Logout
  const logoutUser = () => {
    setCurrentUser({
      name: 'Guest User',
      email: '',
      avatar: '/images/user_avatar.svg',
      isLoggedIn: false
    });
    toast.info('Logged out successfully. You can sign in with another account.', { toastId: 'logout_info' });
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  const value = {
    videos,
    shorts,
    categories,
    channels,
    uploadedVideos,
    uploadVideo,
    deleteUploadedVideo,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    isSidebarExpanded,
    setIsSidebarExpanded,
    isAuthModalOpen,
    setIsAuthModalOpen,
    isAutoplayEnabled,
    toggleAutoplay,
    theme,
    toggleTheme,
    isUploadOpen,
    setIsUploadOpen,
    isSettingsOpen,
    setIsSettingsOpen,
    isHelpOpen,
    setIsHelpOpen,
    isFeedbackOpen,
    setIsFeedbackOpen,
    notifications,
    unreadCount,
    markAllNotificationsRead,
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
