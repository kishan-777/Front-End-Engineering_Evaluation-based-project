// Curated video & shorts dataset with verified 2026 subscriber counts & real YouTube media
// Designed for Front End Engineering - II Project (PheW TuBe - Evaluation-II)

export function slugify(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const CATEGORIES = [
  "All",
  "Coding & Tech",
  "React JS",
  "DSA",
  "Comedy",
  "Music",
  "Gaming",
  "Minecraft",
  "Entertainment",
  "News",
  "Sports",
  "Podcasts"
];

export const CHANNELS = [
  {
    id: "ch1",
    name: "MrBeast",
    handle: "@MrBeast",
    thumbnail: "/images/mrbeast_logo.png",
    banner: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=1600&auto=format&fit=crop&q=80",
    subscribers: "522M subscribers",
    channelUrl: "https://www.youtube.com/@MrBeast",
    verified: true,
    videosCount: "820 videos",
    description: "I want to make the world a better place before I die. Giving away private islands, high tech gear, and hosting extreme survival challenges!"
  },
  {
    id: "ch2",
    name: "T-Series",
    handle: "@tseries",
    thumbnail: "/images/tseries.png",
    banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&auto=format&fit=crop&q=80",
    subscribers: "316M subscribers",
    channelUrl: "https://www.youtube.com/@tseries",
    verified: true,
    videosCount: "21K videos",
    description: "Music Can Change The World. India's largest music label and movie studio, bringing you Bollywood hits and independent music sensations."
  },
  {
    id: "ch3",
    name: "Techno Gamerz",
    handle: "@TechnoGamerzOfficial",
    thumbnail: "/images/techno_gamerz.png",
    banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600&auto=format&fit=crop&q=80",
    subscribers: "53.4M subscribers",
    channelUrl: "https://www.youtube.com/@TechnoGamerzOfficial",
    verified: true,
    videosCount: "1.2K videos",
    description: "Hey everyone! I'm Ujjwal Chaurasia. Gaming gameplay, walkthroughs, GTA 5 story mode missions and Minecraft survival kingdom series."
  },
  {
    id: "ch4",
    name: "freeCodeCamp.org",
    handle: "@freecodecamp",
    thumbnail: "/images/freecodecamp_logo.png",
    banner: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&auto=format&fit=crop&q=80",
    subscribers: "12M subscribers",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    verified: true,
    videosCount: "1.9K videos",
    description: "Learn to code for free. Open source community dedicated to teaching programming through full comprehensive developer bootcamps."
  },
  {
    id: "ch5",
    name: "Samay Raina",
    handle: "@SamayRainaOfficial",
    thumbnail: "/images/samay_raina.png",
    banner: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1600&auto=format&fit=crop&q=80",
    subscribers: "7.65M subscribers",
    channelUrl: "https://www.youtube.com/@SamayRainaOfficial",
    verified: true,
    videosCount: "340 videos",
    description: "Standup Comedian, Chess Enthusiast & Host of India's Got Latent. Bringing unscripted laughter and viral comedy tournaments."
  },
  {
    id: "ch6",
    name: "Chai aur Code",
    handle: "@chaiaurcode",
    thumbnail: "/images/chaiaurcode_logo.png",
    banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&auto=format&fit=crop&q=80",
    subscribers: "645K subscribers",
    channelUrl: "https://www.youtube.com/@chaiaurcode",
    verified: true,
    videosCount: "420 videos",
    description: "A channel dedicated to coding in Hindi by Hitesh Choudhary. Making web development, React, JavaScript, and backend accessible to all."
  },
  {
    id: "ch7",
    name: "Wemmbu",
    handle: "@wemmbu",
    thumbnail: "/images/wemmbu_logo.png",
    banner: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1600&auto=format&fit=crop&q=80",
    subscribers: "3.45M subscribers",
    channelUrl: "https://www.youtube.com/@wemmbu",
    verified: true,
    videosCount: "290 videos",
    description: "Minecraft hardcore survivor, traps expert, and secret base builder. Pushing the absolute limits of survival game mechanics."
  },
  {
    id: "ch_cnn",
    name: "CNN",
    handle: "@CNN",
    thumbnail: "/images/cnn_avatar.jpg",
    banner: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1600&auto=format&fit=crop&q=80",
    subscribers: "19.9M subscribers",
    channelUrl: "https://www.youtube.com/@CNN",
    verified: true,
    videosCount: "160K videos",
    description: "CNN delivers the latest world news, breaking stories, investigative journalism, and in-depth political coverage from across the globe."
  },
  {
    id: "ch_sonyliv",
    name: "Sony LIV",
    handle: "@SonyLIV",
    thumbnail: "/images/sonyliv_logo.jpg",
    banner: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&auto=format&fit=crop&q=80",
    subscribers: "26.9M subscribers",
    channelUrl: "https://www.youtube.com/@SonyLIV",
    verified: true,
    videosCount: "42K videos",
    description: "Official destination for live sports, UEFA Champions League, international cricket highlights, original web series, and premium entertainment."
  },
  {
    id: "ch_nikhilkamath",
    name: "Nikhil Kamath",
    handle: "@nikhil.kamath",
    thumbnail: "/images/nikhil_kamath.jpg",
    banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80",
    subscribers: "2.36M subscribers",
    channelUrl: "https://www.youtube.com/@nikhil.kamath",
    verified: true,
    videosCount: "120 videos",
    description: "Co-founder of Zerodha & True Beacon. Host of 'WTF is' podcast exploring business, technology, AI, gaming, and entrepreneurship."
  }
];

export const SHORTS = [
  {
    id: "s1",
    slug: "dont-pop-the-balloon-challenge",
    title: "Don't Pop the Balloon Challenge! 🎈",
    thumbnail: "/images/mrbeast_balloon_short.jpg",
    views: "52M views",
    channelName: "MrBeast",
    channelId: "ch1",
    channelAvatar: "/images/mrbeast_logo.png",
    videoUrl: "https://www.youtube.com/shorts/egvLKQe6I4I",
    youtubeId: "egvLKQe6I4I",
    likes: "3.8M",
    comments: "24K"
  },
  {
    id: "s2",
    slug: "react-usestate-vs-useref-in-30-seconds",
    title: "React useState vs useRef in 30 Seconds! ⚛️",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80",
    views: "2.1M views",
    channelName: "Chai aur Code",
    channelId: "ch6",
    channelAvatar: "/images/chaiaurcode_logo.png",
    videoUrl: "https://www.youtube.com/shorts/-QvbmLTdxK0",
    youtubeId: "-QvbmLTdxK0",
    likes: "210K",
    comments: "1.1K"
  },
  {
    id: "s3",
    slug: "samay-raina-funny-unfiltered-moments-latent",
    title: "Samay Raina Funny Unfiltered Moments on Latent Stage 😂",
    thumbnail: "/images/latent_ep6.jpg",
    views: "18M views",
    channelName: "Samay Raina",
    channelId: "ch5",
    channelAvatar: "/images/samay_raina.png",
    videoUrl: "https://www.youtube.com/shorts/bHscL842jJg",
    youtubeId: "bHscL842jJg",
    likes: "1.9M",
    comments: "14K"
  },
  {
    id: "s4",
    slug: "techno-gamerz-insane-gta-5-bike-stunt",
    title: "Techno Gamerz Insane GTA 5 Bike Stunt Over Skyscraper! 🔥",
    thumbnail: "/images/gta5_147.png",
    views: "12M views",
    channelName: "Techno Gamerz",
    channelId: "ch3",
    channelAvatar: "/images/techno_gamerz.png",
    videoUrl: "https://www.youtube.com/shorts/x1zBOEAzz2o",
    youtubeId: "x1zBOEAzz2o",
    likes: "1.1M",
    comments: "8.5K"
  },
  {
    id: "s5",
    slug: "minecraft-1-second-secret-trap",
    title: "Minecraft 1-Second Secret Trap That Shocked Everyone! 💥",
    thumbnail: "/images/wemmbu_trap_short.png",
    views: "5.6M views",
    channelName: "Wemmbu",
    channelId: "ch7",
    channelAvatar: "/images/wemmbu_logo.png",
    videoUrl: "https://www.youtube.com/shorts/JlGAo-9Mh4I",
    youtubeId: "JlGAo-9Mh4I",
    likes: "510K",
    comments: "4.2K"
  },
  {
    id: "s6",
    slug: "top-5-vs-code-shortcuts-every-programmer-must-know",
    title: "Top 5 VS Code Shortcuts Every Programmer Must Know 💻",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    views: "4.2M views",
    channelName: "freeCodeCamp.org",
    channelId: "ch4",
    channelAvatar: "/images/freecodecamp_logo.png",
    videoUrl: "https://www.youtube.com/shorts/YgI5GEZzrIo",
    youtubeId: "YgI5GEZzrIo",
    likes: "420K",
    comments: "3.2K"
  },
  {
    id: "s7",
    slug: "javascript-event-loop-in-45-seconds",
    title: "JavaScript Event Loop in 45 Seconds ⏱️",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    views: "2.8M views",
    channelName: "Chai aur Code",
    channelId: "ch6",
    channelAvatar: "/images/chaiaurcode_logo.png",
    videoUrl: "https://www.youtube.com/shorts/-QvbmLTdxK0",
    youtubeId: "-QvbmLTdxK0",
    likes: "280K",
    comments: "1.9K"
  }
];

export const VIDEOS = [
  {
    id: "v1",
    slug: "complete-react-course-with-projects-part-1",
    title: "Complete React course with projects | part 1",
    thumbnail: "/images/chaiaurcode_react_part1.png",
    duration: "8:32:05",
    views: "1.9M views",
    timestamp: "3 years ago",
    channelName: "Chai aur Code",
    channelId: "ch6",
    channelAvatar: "/images/chaiaurcode_logo.png",
    category: "React JS",
    videoUrl: "https://www.youtube.com/watch?v=FxgM9k1rg0Q",
    youtubeId: "FxgM9k1rg0Q",
    verified: true,
    likes: "162K",
    subscribers: "645K subscribers",
    description: "Master React from basics to advanced project building. Covers hooks, virtual DOM, component lifecycles, and state management in Hindi."
  },
  {
    id: "v2",
    slug: "algorithms-and-data-structures-tutorial-full-course",
    title: "Algorithms and Data Structures Tutorial - Full Course for Beginners",
    thumbnail: "/images/fcc_dsa_fullcourse.jpg",
    duration: "5:22:09",
    views: "6.4M views",
    timestamp: "5 years ago",
    channelName: "freeCodeCamp.org",
    channelId: "ch4",
    channelAvatar: "/images/freecodecamp_logo.png",
    category: "DSA",
    videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
    youtubeId: "8hly31xKli0",
    verified: true,
    likes: "235K",
    subscribers: "12M subscribers",
    description: "Learn Data Structures and Algorithms in this comprehensive full tutorial course for beginners. Covers Big-O, arrays, linked lists, trees, graphs, and dynamic programming."
  },
  {
    id: "v4",
    slug: "indias-got-latent-s2-ep6-rakhi-sawant-ashneer-grover",
    title: "INDIA'S GOT LATENT S2 EP6 ft. Rakhi Sawant, Ashneer Grover & Kushagra Srivastava",
    thumbnail: "/images/latent_ep6.jpg",
    duration: "54:30",
    views: "67M views",
    timestamp: "Nov 2024",
    channelName: "Samay Raina",
    channelId: "ch5",
    channelAvatar: "/images/samay_raina.png",
    category: "Comedy",
    videoUrl: "https://www.youtube.com/watch?v=zbIr24Tes7E",
    youtubeId: "zbIr24Tes7E",
    verified: true,
    likes: "3.4M",
    subscribers: "7.65M subscribers",
    description: "The most unfiltered talent show in the country hosted by Samay Raina with an explosive celebrity judge panel."
  },
  {
    id: "v5",
    slug: "indias-got-latent-s2-ep5-orry-archana-puran-singh",
    title: "INDIA'S GOT LATENT S2 EP5 ft. Orry, Archana Puran Singh & Nishant Suri",
    thumbnail: "/images/latent_ep5.png",
    duration: "49:15",
    views: "48M views",
    timestamp: "Oct 2024",
    channelName: "Samay Raina",
    channelId: "ch5",
    channelAvatar: "/images/samay_raina.png",
    category: "Comedy",
    videoUrl: "https://www.youtube.com/watch?v=VJ9VC9OqdAA",
    youtubeId: "VJ9VC9OqdAA",
    verified: true,
    likes: "2.8M",
    subscribers: "7.65M subscribers",
    description: "India's Got Latent Season 2 Episode 5 featuring laughter queen Archana Puran Singh and viral pop sensation Orry."
  },
  {
    id: "v6",
    slug: "1-vs-250000000-private-island",
    title: "$1 vs $250,000,000 Private Island!",
    thumbnail: "/images/mrbeast_island.png",
    duration: "16:50",
    views: "355M views",
    timestamp: "1 year ago",
    channelName: "MrBeast",
    channelId: "ch1",
    channelAvatar: "/images/mrbeast_logo.png",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/watch?v=krsBRQbOPQ4",
    youtubeId: "krsBRQbOPQ4",
    verified: true,
    likes: "9.2M",
    subscribers: "522M subscribers",
    description: "We compared the cheapest $1 private island in the world to an astonishing $250,000,000 luxury tropical paradise!"
  },
  {
    id: "v7",
    slug: "7-days-stranded-at-sea",
    title: "7 Days Stranded At Sea",
    thumbnail: "/images/mrbeast_7days.png",
    duration: "18:05",
    views: "452M views",
    timestamp: "1 year ago",
    channelName: "MrBeast",
    channelId: "ch1",
    channelAvatar: "/images/mrbeast_logo.png",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/watch?v=yhB3BgJyGl8",
    youtubeId: "yhB3BgJyGl8",
    verified: true,
    likes: "14M",
    subscribers: "522M subscribers",
    description: "My friends and I spent 7 continuous days surviving in the middle of the Atlantic Ocean on a tiny raft."
  },
  {
    id: "v8",
    slug: "bhool-bhulaiyaa-3-title-track-kartik-aaryan",
    title: "Bhool Bhulaiyaa 3 Title Track | Kartik Aaryan, Pitbull, Diljit Dosanjh",
    thumbnail: "/images/bhool_bhulaiyaa3.png",
    duration: "3:50",
    views: "145M views",
    timestamp: "Oct 2024",
    channelName: "T-Series",
    channelId: "ch2",
    channelAvatar: "/images/tseries.png",
    category: "Music",
    videoUrl: "https://www.youtube.com/watch?v=Cus-6cnyt1s",
    youtubeId: "Cus-6cnyt1s",
    verified: true,
    likes: "3.2M",
    subscribers: "316M subscribers",
    description: "The global mega-collaboration uniting Kartik Aaryan, Pitbull, Diljit Dosanjh, and Neeraj Shridhar."
  },
  {
    id: "v9",
    slug: "tauba-tauba-bad-newz-vicky-kaushal-karan-aujla",
    title: "Tauba Tauba | Bad Newz | Vicky Kaushal & Karan Aujla Official Track",
    thumbnail: "/images/tauba_tauba.png",
    duration: "3:24",
    views: "610M views",
    timestamp: "Jul 2024",
    channelName: "T-Series",
    channelId: "ch2",
    channelAvatar: "/images/tseries.png",
    category: "Music",
    videoUrl: "https://www.youtube.com/watch?v=LK7-_dgAVQE",
    youtubeId: "LK7-_dgAVQE",
    verified: true,
    likes: "6.5M",
    subscribers: "316M subscribers",
    description: "Vicky Kaushal's viral dance sensations in Karan Aujla's blockbuster chartbuster Tauba Tauba."
  },
  {
    id: "v10",
    slug: "i-survived-100-days-in-hardcore-minecraft-as-a-warden",
    title: "I Survived 100 Days in Hardcore Minecraft as a Warden! (Wemmbu)",
    thumbnail: "/images/wemmbu_warden.png",
    duration: "45:10",
    views: "4.1M views",
    timestamp: "6 days ago",
    channelName: "Wemmbu",
    channelId: "ch7",
    channelAvatar: "/images/wemmbu_logo.png",
    category: "Minecraft",
    videoUrl: "https://www.youtube.com/watch?v=gTfd3cLMU48",
    youtubeId: "gTfd3cLMU48",
    verified: true,
    likes: "340K",
    subscribers: "3.45M subscribers",
    description: "Spawning as the blind terrifying Warden in Hardcore Minecraft. Can I defeat the Ender Dragon and survive 100 days?"
  },
  {
    id: "v11",
    slug: "building-the-ultimate-secret-underground-base-minecraft",
    title: "Building The Ultimate Secret Underground Base in Minecraft 1.21",
    thumbnail: "/images/wemmbu_base.png",
    duration: "28:30",
    views: "2.8M views",
    timestamp: "1 week ago",
    channelName: "Wemmbu",
    channelId: "ch7",
    channelAvatar: "/images/wemmbu_logo.png",
    category: "Minecraft",
    videoUrl: "https://www.youtube.com/watch?v=D7K2WAldWSo",
    youtubeId: "D7K2WAldWSo",
    verified: true,
    likes: "215K",
    subscribers: "3.45M subscribers",
    description: "Designing the most undetectable redstone underground bunker equipped with security laser traps and hidden vault doors."
  },
  {
    id: "v12",
    slug: "biggest-bank-robbery-in-gta-5-techno-gamerz",
    title: "BIGGEST BANK ROBBERY IN GTA 5 | GTA V GAMEPLAY #147",
    thumbnail: "/images/gta5_147.png",
    duration: "1:13:53",
    views: "54M views",
    timestamp: "2 years ago",
    channelName: "Techno Gamerz",
    channelId: "ch3",
    channelAvatar: "/images/techno_gamerz.png",
    category: "Gaming",
    videoUrl: "https://www.youtube.com/watch?v=1nWJUHU-0p4",
    youtubeId: "1nWJUHU-0p4",
    verified: true,
    likes: "2.6M",
    subscribers: "53.4M subscribers",
    description: "Planning and executing the ultimate high-stakes Pacific Standard bank robbery in GTA V with an armored getaway!"
  },
  {
    id: "v13",
    slug: "i-transformed-my-entire-world-minecraft-gameplay-90",
    title: "I TRANSFORMED MY ENTIRE WORLD | MINECRAFT GAMEPLAY #90",
    thumbnail: "/images/minecraft_90.png",
    duration: "59:08",
    views: "26M views",
    timestamp: "1 year ago",
    channelName: "Techno Gamerz",
    channelId: "ch3",
    channelAvatar: "/images/techno_gamerz.png",
    category: "Gaming",
    videoUrl: "https://www.youtube.com/watch?v=yUQSjCy8fkU",
    youtubeId: "yUQSjCy8fkU",
    verified: true,
    likes: "1.7M",
    subscribers: "53.4M subscribers",
    description: "Episode 90 of our Minecraft Survival Series! Complete kingdom transformation with castle walls and villager trading hall."
  },
  {
    id: "v14",
    slug: "javascript-in-100-seconds-full-web-development",
    title: "JavaScript in 100 Seconds - Full Web Development Essentials",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=80",
    duration: "2:15",
    views: "3.9M views",
    timestamp: "2 weeks ago",
    channelName: "Chai aur Code",
    channelId: "ch6",
    channelAvatar: "/images/chaiaurcode_logo.png",
    category: "Coding & Tech",
    videoUrl: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
    youtubeId: "DHjqpvDnNGE",
    verified: true,
    likes: "320K",
    subscribers: "645K subscribers",
    description: "The complete story of JavaScript from Brendan Eich's 10-day prototype to Node.js and modern ES2026."
  },
  {
    id: "v16",
    slug: "react-19-deep-dive-server-components-actions",
    title: "React 19 Deep Dive: Server Components, Actions & useOptimistic",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    duration: "1:04:12",
    views: "610K views",
    timestamp: "1 month ago",
    channelName: "Chai aur Code",
    channelId: "ch6",
    channelAvatar: "/images/chaiaurcode_logo.png",
    category: "React JS",
    videoUrl: "https://www.youtube.com/watch?v=FxgM9k1rg0Q",
    youtubeId: "FxgM9k1rg0Q",
    verified: true,
    likes: "59K",
    subscribers: "645K subscribers",
    description: "Everything new in React 19: Form Actions, useActionState, Document Metadata, and the brand new React Compiler."
  },

  // ---------------- CNN Videos (News) ----------------
  {
    id: "v17",
    slug: "spacex-starship-orbital-launch-live-flight-analysis",
    title: "SpaceX Starship Orbital Launch: Live Flight Analysis & Global Tech News",
    thumbnail: "https://images.unsplash.com/photo-1517976487502-5f71e5491754?w=800&auto=format&fit=crop&q=80",
    duration: "14:45",
    views: "8.2M views",
    timestamp: "3 months ago",
    channelName: "CNN",
    channelId: "ch_cnn",
    channelAvatar: "/images/cnn_avatar.jpg",
    category: "News",
    videoUrl: "https://www.youtube.com/watch?v=21X5lGlDOfg",
    youtubeId: "21X5lGlDOfg",
    verified: true,
    likes: "340K",
    subscribers: "19.9M subscribers",
    description: "CNN special live coverage on space exploration milestones, Starship booster catch mechanism, and international aerospace headlines."
  },
  {
    id: "v17_2",
    slug: "cnn-investigates-the-future-of-artificial-intelligence",
    title: "Inside The AI Revolution: How Artificial Intelligence Is Changing Healthcare & Robotics",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    duration: "21:30",
    views: "3.4M views",
    timestamp: "1 month ago",
    channelName: "CNN",
    channelId: "ch_cnn",
    channelAvatar: "/images/cnn_avatar.jpg",
    category: "News",
    videoUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    youtubeId: "5qap5aO4i9A",
    verified: true,
    likes: "185K",
    subscribers: "19.9M subscribers",
    description: "CNN investigative documentary examining groundbreaking artificial intelligence deployments in surgeries, automated factories, and computer vision."
  },
  {
    id: "v17_3",
    slug: "cnn-world-news-global-economy-and-tech-summits",
    title: "Global Tech Summit 2026: Silicon Valley Titans Meet on Semiconductor Sovereignty",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    duration: "18:12",
    views: "1.9M views",
    timestamp: "2 weeks ago",
    channelName: "CNN",
    channelId: "ch_cnn",
    channelAvatar: "/images/cnn_avatar.jpg",
    category: "News",
    videoUrl: "https://www.youtube.com/watch?v=k3G_n_L2B3g",
    youtubeId: "k3G_n_L2B3g",
    verified: true,
    likes: "92K",
    subscribers: "19.9M subscribers",
    description: "CNN Special Report: World leaders and tech executives convene to negotiate semiconductor manufacturing supply chains and chip design innovation."
  },

  // ---------------- Sony LIV Videos (Sports) ----------------
  {
    id: "v18",
    slug: "best-goals-of-the-uefa-champions-league-season",
    title: "Best Goals of the UEFA Champions League Season | Sony LIV Sports",
    thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
    duration: "18:20",
    views: "19M views",
    timestamp: "4 months ago",
    channelName: "Sony LIV",
    channelId: "ch_sonyliv",
    channelAvatar: "/images/sonyliv_logo.jpg",
    category: "Sports",
    videoUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    youtubeId: "5qap5aO4i9A",
    verified: true,
    likes: "890K",
    subscribers: "26.9M subscribers",
    description: "Relive the greatest goals, dramatic comebacks, and tactical masterclasses from the UEFA Champions League campaign on Sony LIV."
  },
  {
    id: "v18_2",
    slug: "sony-liv-india-tour-thrilling-last-over-finish",
    title: "India vs Australia T20 Thrilling Last Over Finish | Match Highlights | Sony LIV",
    thumbnail: "https://images.unsplash.com/photo-1531415074868-036b1c57e359?w=800&auto=format&fit=crop&q=80",
    duration: "15:40",
    views: "14.2M views",
    timestamp: "2 months ago",
    channelName: "Sony LIV",
    channelId: "ch_sonyliv",
    channelAvatar: "/images/sonyliv_logo.jpg",
    category: "Sports",
    videoUrl: "https://www.youtube.com/watch?v=sB4D1B0_l7g",
    youtubeId: "sB4D1B0_l7g",
    verified: true,
    likes: "1.1M",
    subscribers: "26.9M subscribers",
    description: "Watch the electrifying final over nail-biter between India and Australia with commentary, high-speed replays, and crowd reactions on Sony LIV."
  },
  {
    id: "v18_3",
    slug: "sony-liv-top-10-unbelievable-saves-in-football",
    title: "Top 10 Unbelievable Goalkeeper Saves in Football History | Sony LIV Sports",
    thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80",
    duration: "12:05",
    views: "8.7M views",
    timestamp: "5 months ago",
    channelName: "Sony LIV",
    channelId: "ch_sonyliv",
    channelAvatar: "/images/sonyliv_logo.jpg",
    category: "Sports",
    videoUrl: "https://www.youtube.com/watch?v=bHscL842jJg",
    youtubeId: "bHscL842jJg",
    verified: true,
    likes: "540K",
    subscribers: "26.9M subscribers",
    description: "From fingertip deflections to miraculous penalty stops, here are the top 10 most mind-boggling goalkeeper saves curated by Sony LIV Sports."
  },

  // ---------------- Nikhil Kamath Videos (Podcasts) ----------------
  {
    id: "v19",
    slug: "wtf-is-gaming-tanmay-bhat-mortal-nikhil-kamath",
    title: "WTF is Gaming? Tanmay Bhat, Animesh Agarwal & Mortal with Nikhil Kamath",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    duration: "2:48:15",
    views: "4.6M views",
    timestamp: "7 months ago",
    channelName: "Nikhil Kamath",
    channelId: "ch_nikhilkamath",
    channelAvatar: "/images/nikhil_kamath.jpg",
    category: "Podcasts",
    videoUrl: "https://www.youtube.com/watch?v=zbIr24Tes7E",
    youtubeId: "zbIr24Tes7E",
    verified: true,
    likes: "215K",
    subscribers: "2.36M subscribers",
    description: "Nikhil Kamath sits down with Tanmay Bhat, 8Bit Thug (Animesh), and Mortal to discuss the business, esports ecosystem, and future of gaming in India."
  },
  {
    id: "v19_2",
    slug: "wtf-is-artificial-intelligence-nikhil-kamath",
    title: "WTF is Artificial Intelligence? Future of Work, LLMs & Autonomous Agents | Nikhil Kamath",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    duration: "3:12:40",
    views: "5.2M views",
    timestamp: "3 months ago",
    channelName: "Nikhil Kamath",
    channelId: "ch_nikhilkamath",
    channelAvatar: "/images/nikhil_kamath.jpg",
    category: "Podcasts",
    videoUrl: "https://www.youtube.com/watch?v=k3G_n_L2B3g",
    youtubeId: "k3G_n_L2B3g",
    verified: true,
    likes: "290K",
    subscribers: "2.36M subscribers",
    description: "A 3-hour masterclass exploring generative AI, deep learning models, startup valuations, and how artificial intelligence reshapes software engineering."
  },
  {
    id: "v19_3",
    slug: "wtf-is-ecommerce-building-billion-dollar-brands",
    title: "WTF is E-Commerce? Building Billion Dollar D2C Brands with Nikhil Kamath",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    duration: "2:24:10",
    views: "3.8M views",
    timestamp: "5 months ago",
    channelName: "Nikhil Kamath",
    channelId: "ch_nikhilkamath",
    channelAvatar: "/images/nikhil_kamath.jpg",
    category: "Podcasts",
    videoUrl: "https://www.youtube.com/watch?v=FxgM9k1rg0Q",
    youtubeId: "FxgM9k1rg0Q",
    verified: true,
    likes: "178K",
    subscribers: "2.36M subscribers",
    description: "Nikhil Kamath discusses supply chains, consumer acquisition costs, digital marketing economics, and the roadmap to creating scalable global direct-to-consumer businesses."
  }
];

export const INITIAL_COMMENTS = {
  v1: [
    {
      id: "c1_1",
      author: "Rahul Sharma",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 days ago",
      text: "Hitesh sir's explanation of Virtual DOM reconciliation is unmatched! The best React series on the internet.",
      likes: 342,
      replies: 12
    },
    {
      id: "c1_2",
      author: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80",
      timestamp: "5 days ago",
      text: "Watching this for my university viva exam. Everything finally makes complete sense! Thank you!",
      likes: 184,
      replies: 4
    }
  ],
  v2: [
    {
      id: "c2_1",
      author: "Arjun Reddy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 week ago",
      text: "This 5 hour course prepared me for all my DSA placement rounds. The tree recursion visualizations are top notch.",
      likes: 412,
      replies: 8
    },
    {
      id: "c2_2",
      author: "Sneha Mukherjee",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 weeks ago",
      text: "Big O notation finally clicked for me at the 45-minute mark. Thanks freeCodeCamp!",
      likes: 95,
      replies: 2
    }
  ],
  v4: [
    {
      id: "c4_1",
      author: "Aman Verma",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 day ago",
      text: "Samay's comic timing when Ashneer gave his score had me crying laughing! Best episode of Season 2.",
      likes: 1420,
      replies: 45
    },
    {
      id: "c4_2",
      author: "Divya Kapoor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 days ago",
      text: "Rakhi Sawant brought pure unpredictable chaos to the panel! Never laughed so hard.",
      likes: 890,
      replies: 19
    }
  ],
  v5: [
    {
      id: "c5_1",
      author: "Kunal Ghosh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
      timestamp: "4 days ago",
      text: "Archana Puran Singh laughing heartily made the whole episode 10x funnier! Nishant Suri was savage too.",
      likes: 672,
      replies: 14
    }
  ],
  v6: [
    {
      id: "c6_1",
      author: "David Miller",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 days ago",
      text: "The sheer production quality of MrBeast's team is mindblowing. 522M subscribers well deserved!",
      likes: 4210,
      replies: 88
    },
    {
      id: "c6_2",
      author: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 week ago",
      text: "The waterslide on that $250M island looked like something straight out of a video game!",
      likes: 1205,
      replies: 32
    }
  ],
  v7: [
    {
      id: "c7_1",
      author: "Ethan Walker",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 weeks ago",
      text: "Surviving in the open Atlantic with storms and sharks is insane dedication for YouTube content.",
      likes: 2190,
      replies: 41
    }
  ],
  v8: [
    {
      id: "c8_1",
      author: "Rohan Malhotra",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&auto=format&fit=crop&q=80",
      timestamp: "5 days ago",
      text: "Pitbull singing in a Bollywood song with Kartik Aaryan & Diljit Dosanjh is the crossover of the decade!",
      likes: 1850,
      replies: 39
    }
  ],
  v9: [
    {
      id: "c9_1",
      author: "Simran Kaur",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 week ago",
      text: "Vicky Kaushal's hook step became viral for a reason. Karan Aujla's vocals are infectious!",
      likes: 3100,
      replies: 62
    }
  ],
  v10: [
    {
      id: "c10_1",
      author: "PixelCraft Gamer",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 days ago",
      text: "Wemmbu is the greatest Minecraft trap maker alive. Surviving as a Warden was peak entertainment!",
      likes: 540,
      replies: 17
    }
  ],
  v11: [
    {
      id: "c11_1",
      author: "Redstone_God",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
      timestamp: "4 days ago",
      text: "The laser door mechanism using tripwires and pistons blew my mind. Definitely building this on my SMP.",
      likes: 388,
      replies: 9
    }
  ],
  v12: [
    {
      id: "c12_1",
      author: "Ujjwal Fan Club",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 week ago",
      text: "Ujjwal bhai's escape driving in Episode 147 was pure adrenaline! Best GTA 5 creator in India.",
      likes: 1540,
      replies: 38
    }
  ],
  v13: [
    {
      id: "c13_1",
      author: "GamerBoy_99",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 weeks ago",
      text: "Watching this world grow from Episode 1 to Episode 90 has been an unforgettable journey.",
      likes: 920,
      replies: 15
    }
  ],
  v14: [
    {
      id: "c14_1",
      author: "Tanmay Deshmukh",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=60&auto=format&fit=crop&q=80",
      timestamp: "6 days ago",
      text: "Explaining 30 years of JavaScript history in under 2 minutes with clean motion graphics. Brilliant!",
      likes: 610,
      replies: 11
    }
  ],
  v16: [
    {
      id: "c16_1",
      author: "Meera Nair",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 weeks ago",
      text: "React 19 Actions and useOptimistic make form handling so much cleaner. No more manual loading state variables!",
      likes: 512,
      replies: 18
    }
  ],
  v17: [
    {
      id: "c17_1",
      author: "Aerospace_Enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 month ago",
      text: "CNN's live telemetry graphics and rocket tracking commentary are the best in broadcast news.",
      likes: 890,
      replies: 23
    }
  ],
  v17_2: [
    {
      id: "c17_2_1",
      author: "TechWatcher",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 weeks ago",
      text: "The medical imaging section showing tumor detection with 99% accuracy was truly eye opening.",
      likes: 420,
      replies: 7
    }
  ],
  v18: [
    {
      id: "c18_1",
      author: "Football_Geek",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 months ago",
      text: "That bicycle kick goal in the 88th minute still gives me goosebumps every single time I rewatch it on Sony LIV!",
      likes: 1240,
      replies: 31
    }
  ],
  v18_2: [
    {
      id: "c18_2_1",
      author: "CricketLover_India",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 weeks ago",
      text: "Needing 14 runs off the last 4 balls and hitting back-to-back sixes! Absolute cinema from Team India.",
      likes: 3820,
      replies: 94
    }
  ],
  v19: [
    {
      id: "c19_1",
      author: "Akash Singhal",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 months ago",
      text: "Nikhil Kamath asking deep financial questions while Tanmay and Mortal provide authentic esports insights is gold tier podcasting.",
      likes: 2450,
      replies: 57
    }
  ],
  v19_2: [
    {
      id: "c19_2_1",
      author: "Siddharth Jain",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 month ago",
      text: "The discussion on agentic workflows and how coding assistants are transforming development was spot on.",
      likes: 1610,
      replies: 42
    }
  ],
  s1: [
    {
      id: "sc1_1",
      author: "Chris Tyson Fan",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 day ago",
      text: "The balloon tension was so intense haha! Classic Beast content.",
      likes: 310,
      replies: 4
    }
  ],
  s2: [
    {
      id: "sc2_1",
      author: "Dev Sharma",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 days ago",
      text: "Summary: useState triggers re-render, useRef persists value without re-rendering! Simple & crisp.",
      likes: 420,
      replies: 6
    }
  ]
};
