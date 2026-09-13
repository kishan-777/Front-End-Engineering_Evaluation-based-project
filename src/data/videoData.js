// Curated video & shorts dataset with latest verified subscriber counts & real YouTube media
// Designed for Front End Engineering - II Project (YouTube-Style Platform)

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
  "Podcasts"
];

export const CHANNELS = [
  {
    id: "ch1",
    name: "MrBeast",
    thumbnail: "/images/mrbeast_logo.png",
    subscribers: "516M subscribers",
    channelUrl: "https://www.youtube.com/@MrBeast"
  },
  {
    id: "ch2",
    name: "T-Series",
    thumbnail: "/images/tseries.png",
    subscribers: "315M subscribers",
    channelUrl: "https://www.youtube.com/@tseries"
  },
  {
    id: "ch3",
    name: "Techno Gamerz",
    thumbnail: "/images/techno_gamerz.png",
    subscribers: "53M subscribers",
    channelUrl: "https://www.youtube.com/@TechnoGamerzOfficial"
  },
  {
    id: "ch4",
    name: "freeCodeCamp.org",
    thumbnail: "/images/freecodecamp_logo.png",
    subscribers: "11.9M subscribers",
    channelUrl: "https://www.youtube.com/@freecodecamp"
  },
  {
    id: "ch5",
    name: "Samay Raina (India's Got Latent)",
    thumbnail: "/images/samay_raina.png",
    subscribers: "11.4M subscribers",
    channelUrl: "https://www.youtube.com/@SamayRainaOfficial"
  },
  {
    id: "ch6",
    name: "Wemmbu",
    thumbnail: "/images/wemmbu_logo.png",
    subscribers: "4.52M subscribers",
    channelUrl: "https://www.youtube.com/@wemmbu"
  },
  {
    id: "ch7",
    name: "Chai aur Code",
    thumbnail: "/images/chaiaurcode_logo.png",
    subscribers: "930K subscribers",
    channelUrl: "https://www.youtube.com/@chaiaurcode"
  }
];

export const SHORTS = [
  {
    id: "s1",
    title: "MrBeast Gives $500,000 To Last Person To Leave Circle! 😱",
    thumbnail: "/images/mrbeast_island.png",
    views: "48M views",
    channelName: "MrBeast",
    channelAvatar: "/images/mrbeast_logo.png",
    videoUrl: "https://www.youtube.com/shorts/kX3nB4PpJko",
    likes: "3.4M",
    comments: "24K"
  },
  {
    id: "s2",
    title: "React useState vs useRef in 30 Seconds! ⚛️",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80",
    views: "1.8M views",
    channelName: "Chai aur Code",
    channelAvatar: "/images/chaiaurcode_logo.png",
    videoUrl: "https://www.youtube.com/shorts/vz1RlUyrc3w",
    likes: "185K",
    comments: "950"
  },
  {
    id: "s3",
    title: "Samay Raina Funny Unfiltered Moments on Latent Stage 😂",
    thumbnail: "/images/latent_ep6.jpg",
    views: "15M views",
    channelName: "Samay Raina (India's Got Latent)",
    channelAvatar: "/images/samay_raina.png",
    videoUrl: "https://www.youtube.com/shorts/bTqVqk7FSmY",
    likes: "1.6M",
    comments: "12K"
  },
  {
    id: "s4",
    title: "Techno Gamerz Insane GTA 5 Bike Stunt Over Skyscraper! 🔥",
    thumbnail: "/images/gta5_147.png",
    views: "9.8M views",
    channelName: "Techno Gamerz",
    channelAvatar: "/images/techno_gamerz.png",
    videoUrl: "https://www.youtube.com/shorts/7X8II6J-6mU",
    likes: "890K",
    comments: "7.2K"
  },
  {
    id: "s5",
    title: "Minecraft 1-Second Secret Trap That Shocked Everyone! 💥",
    thumbnail: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&auto=format&fit=crop&q=80",
    views: "4.8M views",
    channelName: "Wemmbu",
    channelAvatar: "/images/wemmbu_logo.png",
    videoUrl: "https://www.youtube.com/shorts/HGrLp58VqV4",
    likes: "420K",
    comments: "3.1K"
  },
  {
    id: "s6",
    title: "Top 5 VS Code Shortcuts Every Programmer Must Know 💻",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    views: "3.5M views",
    channelName: "freeCodeCamp.org",
    channelAvatar: "/images/freecodecamp_logo.png",
    videoUrl: "https://www.youtube.com/shorts/8hly31xKli0",
    likes: "340K",
    comments: "2.4K"
  }
];

export const VIDEOS = [
  {
    id: "v1",
    title: "Complete React course with projects | part 1",
    thumbnail: "/images/chaiaurcode_react_part1.png",
    duration: "8:32:05",
    views: "1.7M views",
    timestamp: "3 years ago",
    channelName: "Chai aur Code",
    channelAvatar: "/images/chaiaurcode_logo.png",
    category: "React JS",
    videoUrl: "https://www.youtube.com/watch?v=FxgM9k1rg0Q",
    verified: true,
    likes: "145K"
  },
  {
    id: "v2",
    title: "Algorithms and Data Structures Tutorial - Full Course for Beginners",
    thumbnail: "/images/fcc_dsa_fullcourse.jpg",
    duration: "5:22:09",
    views: "5.9M views",
    timestamp: "5 years ago",
    channelName: "freeCodeCamp.org",
    channelAvatar: "/images/freecodecamp_logo.png",
    category: "DSA",
    videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
    verified: true,
    likes: "210K"
  },
  {
    id: "v3",
    title: "Why The Best Software Engineers Focus On System Design",
    thumbnail: "/images/beyond_coding_sysdesign.jpg",
    duration: "46:02",
    views: "415K views",
    timestamp: "9 months ago",
    channelName: "Beyond Coding",
    channelAvatar: "/images/beyond_coding_logo.png",
    category: "Podcasts",
    videoUrl: "https://www.youtube.com/watch?v=LeUUxLRdvho",
    verified: true,
    likes: "32K"
  },
  {
    id: "v4",
    title: "INDIA'S GOT LATENT S2 EP6 ft. Rakhi Sawant, Ashneer Grover & Kushagra Srivastava",
    thumbnail: "/images/latent_ep6.jpg",
    duration: "54:30",
    views: "28M views",
    timestamp: "2 days ago",
    channelName: "Samay Raina (India's Got Latent)",
    channelAvatar: "/images/samay_raina.png",
    category: "Comedy",
    videoUrl: "https://www.youtube.com/watch?v=zbIr24Tes7E",
    verified: true,
    likes: "2.4M"
  },
  {
    id: "v5",
    title: "INDIA'S GOT LATENT S2 EP5 ft. Orry, Archana Puran Singh & Nishant Suri",
    thumbnail: "/images/latent_ep5.png",
    duration: "49:15",
    views: "24M views",
    timestamp: "1 week ago",
    channelName: "Samay Raina (India's Got Latent)",
    channelAvatar: "/images/samay_raina.png",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/watch?v=VJ9VC9OqdAA",
    verified: true,
    likes: "1.9M"
  },
  {
    id: "v6",
    title: "$1 vs $250,000,000 Private Island!",
    thumbnail: "/images/mrbeast_island.png",
    duration: "16:50",
    views: "310M views",
    timestamp: "7 months ago",
    channelName: "MrBeast",
    channelAvatar: "/images/mrbeast_logo.png",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/watch?v=kYvH57-W28E",
    verified: true,
    likes: "8.4M"
  },
  {
    id: "v7",
    title: "7 Days Stranded At Sea",
    thumbnail: "/images/mrbeast_7days.png",
    duration: "18:05",
    views: "484M views",
    timestamp: "1 year ago",
    channelName: "MrBeast",
    channelAvatar: "/images/mrbeast_logo.png",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/watch?v=yhB3BgJyGl8",
    verified: true,
    likes: "12M"
  },
  {
    id: "v8",
    title: "Bhool Bhulaiyaa 3 Title Track | Kartik Aaryan, Pitbull, Diljit Dosanjh",
    thumbnail: "/images/bhool_bhulaiyaa3.png",
    duration: "3:50",
    views: "72M views",
    timestamp: "2 weeks ago",
    channelName: "T-Series",
    channelAvatar: "/images/tseries.png",
    category: "Music",
    videoUrl: "https://www.youtube.com/watch?v=d_kQ0FvE_m4",
    verified: true,
    likes: "2.1M"
  },
  {
    id: "v9",
    title: "Tauba Tauba | Bad Newz | Vicky Kaushal & Karan Aujla Official Track",
    thumbnail: "/images/tauba_tauba.png",
    duration: "3:24",
    views: "215M views",
    timestamp: "1 month ago",
    channelName: "T-Series",
    channelAvatar: "/images/tseries.png",
    category: "Music",
    videoUrl: "https://www.youtube.com/watch?v=LK7-_dgAVQE",
    verified: true,
    likes: "4.5M"
  },
  {
    id: "v10",
    title: "I Survived 100 Days in Hardcore Minecraft as a Warden! (Wemmbu)",
    thumbnail: "/images/wemmbu_warden.png",
    duration: "45:10",
    views: "3.4M views",
    timestamp: "6 days ago",
    channelName: "Wemmbu",
    channelAvatar: "/images/wemmbu_logo.png",
    category: "Minecraft",
    videoUrl: "https://www.youtube.com/watch?v=HGrLp58VqV4",
    verified: true,
    likes: "290K"
  },
  {
    id: "v11",
    title: "Building The Ultimate Secret Underground Base in Minecraft 1.21",
    thumbnail: "/images/wemmbu_base.png",
    duration: "28:30",
    views: "2.1M views",
    timestamp: "1 week ago",
    channelName: "Wemmbu",
    channelAvatar: "/images/wemmbu_logo.png",
    category: "Minecraft",
    videoUrl: "https://www.youtube.com/watch?v=q76bCsAek8s",
    verified: true,
    likes: "180K"
  },
  {
    id: "v12",
    title: "BIGGEST BANK ROBBERY IN GTA 5 | GTA V GAMEPLAY #147",
    thumbnail: "/images/gta5_147.png",
    duration: "1:13:53",
    views: "48M views",
    timestamp: "2 years ago",
    channelName: "Techno Gamerz",
    channelAvatar: "/images/techno_gamerz.png",
    category: "Gaming",
    videoUrl: "https://www.youtube.com/watch?v=FqS7u1kO69s",
    verified: true,
    likes: "2.2M"
  },
  {
    id: "v13",
    title: "I TRANSFORMED MY ENTIRE WORLD | MINECRAFT GAMEPLAY #90",
    thumbnail: "/images/minecraft_90.png",
    duration: "59:08",
    views: "23M views",
    timestamp: "1 year ago",
    channelName: "Techno Gamerz",
    channelAvatar: "/images/techno_gamerz.png",
    category: "Gaming",
    videoUrl: "https://www.youtube.com/watch?v=k4U-3yLd4f8",
    verified: true,
    likes: "1.4M"
  },
  {
    id: "v14",
    title: "JavaScript in 100 Seconds - Full Web Development Essentials",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=80",
    duration: "2:15",
    views: "3.4M views",
    timestamp: "2 weeks ago",
    channelName: "Chai aur Code",
    channelAvatar: "/images/chaiaurcode_logo.png",
    category: "Coding & Tech",
    videoUrl: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
    verified: true,
    likes: "280K"
  }
];
