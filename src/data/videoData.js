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
    banner: "/images/mrbeast_island.png",
    bannerPosition: "left 35%",
    subscribers: "522M subscribers",
    channelUrl: "https://www.youtube.com/@MrBeast",
    verified: true,
    videosCount: "850 videos",
    description: "I want to make the world a better place before I die. Giving away private islands, high tech gear, and hosting extreme survival challenges!"
  },
  {
    id: "ch2",
    name: "T-Series",
    handle: "@tseries",
    thumbnail: "/images/tseries.png",
    banner: "/images/tseries_banner.jpg",
    subscribers: "316M subscribers",
    channelUrl: "https://www.youtube.com/@tseries",
    verified: true,
    videosCount: "22K videos",
    description: "Music Can Change The World. India's largest music label and movie studio, bringing you Bollywood hits and independent music sensations."
  },
  {
    id: "ch3",
    name: "Techno Gamerz",
    handle: "@TechnoGamerzOfficial",
    thumbnail: "/images/techno_gamerz.png",
    banner: "https://yt3.googleusercontent.com/0HhL8sA6Hoxhe14v80M3QvasKg_SUw0s4ZDu3N-wteoJ0gKtMmt8FmBqZDI-jCBccpuvVGHu=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "53.4M subscribers",
    channelUrl: "https://www.youtube.com/@TechnoGamerzOfficial",
    verified: true,
    videosCount: "1.1K videos",
    description: "Hey everyone! I'm Ujjwal Chaurasia. Gaming gameplay, walkthroughs, GTA 5 story mode missions and Minecraft survival kingdom series."
  },
  {
    id: "ch4",
    name: "freeCodeCamp.org",
    handle: "@freecodecamp",
    thumbnail: "/images/freecodecamp_logo.png",
    banner: "https://yt3.googleusercontent.com/_GxV-5nnBhGDO2bDgFtrpVypm6z8AC_tFg7W0zSsS9AGlw5xVg8zKLQ5tvTk6BwU1LzmWJb4YA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
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
    banner: "https://yt3.googleusercontent.com/efVBV551iq6Cl1yzF_N8vWgGRkUNXj5mX4qP0PF-RNTBS1hUKtg-4ZHxaXm1bBzivY14QA3SVA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "11.9M subscribers",
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
    banner: "https://yt3.googleusercontent.com/qMsGpWiU5QcUJToklKKAM4UDg1625urRwRy4yBxCvOsESoUbCAI9lM6puXiv_mAkGteSjY0A=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "946K subscribers",
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
    banner: "https://yt3.googleusercontent.com/wmYjiTTw2GL1_Dk5HfK7-1CG6tA-qM7G8HWPrsiEdoS9TquDDYd-dc44rAa19htZnf3kLGRGlRc=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "4.74M subscribers",
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
    banner: "https://yt3.googleusercontent.com/fNbhFTLrdzRoSA9I3FW7ZsaHulj5UN0y5gjn2xqI53-3szSUrlA5dV1GwFoE-AEIusYBTxBC=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
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
    banner: "https://yt3.googleusercontent.com/c_yREHXTsyi98qGGulzhDb6HlkZ3JJUtPnuqMnOGIWUSwqmJuxoP7_F9c_WqWI3TSrHgYaheeQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
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
    banner: "/images/nikhil_founders.jpg",
    bannerPosition: "center 70%",
    subscribers: "2.36M subscribers",
    channelUrl: "https://www.youtube.com/@nikhil.kamath",
    verified: true,
    videosCount: "140 videos",
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
    thumbnail: "/images/samay_short.jpg",
    views: "18M views",
    channelName: "Samay Raina",
    channelId: "ch5",
    channelAvatar: "/images/samay_raina.png",
    videoUrl: "https://www.youtube.com/shorts/K1N9D6kkvTI",
    youtubeId: "K1N9D6kkvTI",
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
    subscribers: "946K subscribers",
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
    duration: "52:26",
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
    subscribers: "11.9M subscribers",
    description: "The most unfiltered talent show in the country hosted by Samay Raina with an explosive celebrity judge panel."
  },
  {
    id: "v5",
    slug: "indias-got-latent-s2-ep5-orry-archana-puran-singh",
    title: "INDIA'S GOT LATENT S2 EP5 ft. Orry, Archana Puran Singh & Nishant Suri",
    thumbnail: "/images/latent_ep5.png",
    duration: "53:58",
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
    subscribers: "11.9M subscribers",
    description: "India's Got Latent Season 2 Episode 5 featuring laughter queen Archana Puran Singh and viral pop sensation Orry."
  },
  {
    id: "v6",
    slug: "1-vs-250000000-private-island",
    title: "$1 vs $250,000,000 Private Island!",
    thumbnail: "/images/mrbeast_island.png",
    duration: "15:24",
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
    duration: "4:00",
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
    duration: "3:42",
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
    duration: "23:17",
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
    subscribers: "4.74M subscribers",
    description: "Spawning as the blind terrifying Warden in Hardcore Minecraft. Can I defeat the Ender Dragon and survive 100 days?"
  },
  {
    id: "v11",
    slug: "building-the-ultimate-secret-underground-base-minecraft",
    title: "Building The Ultimate Secret Underground Base in Minecraft 1.21",
    thumbnail: "/images/wemmbu_base.png",
    duration: "33:51",
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
    subscribers: "4.74M subscribers",
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
    duration: "2:36",
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
    subscribers: "946K subscribers",
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
    subscribers: "946K subscribers",
    description: "Everything new in React 19: Form Actions, useActionState, Document Metadata, and the brand new React Compiler."
  },

  // ---------------- CNN Videos (News) - Official YouTube Streams & Real Thumbnails ----------------
  {
    id: "v17",
    slug: "cnn-ukraine-latest-1st-drone-rescue-world-news",
    title: "Ukraine latest: 1st drone rescue ever, WH intel denial & World News",
    thumbnail: "https://i.ytimg.com/vi/0vibG3S9u4Q/hqdefault.jpg",
    duration: "11:00",
    views: "1.8M views",
    timestamp: "1 month ago",
    channelName: "CNN",
    channelId: "ch_cnn",
    channelAvatar: "/images/cnn_avatar.jpg",
    category: "News",
    videoUrl: "https://www.youtube.com/watch?v=0vibG3S9u4Q",
    youtubeId: "0vibG3S9u4Q",
    verified: true,
    likes: "84K",
    subscribers: "19.9M subscribers",
    description: "CNN special report covering military drone technology breakthroughs, humanitarian logistics, and international diplomatic briefings."
  },
  {
    id: "v17_2",
    slug: "cnn-trump-vance-debate-global-trade-politics",
    title: "Trump & Vance Policy Debate on Global Trade & World Politics | CNN News",
    thumbnail: "https://i.ytimg.com/vi/KLAQxEyJ5C0/hqdefault.jpg",
    duration: "12:56",
    views: "2.4M views",
    timestamp: "2 months ago",
    channelName: "CNN",
    channelId: "ch_cnn",
    channelAvatar: "/images/cnn_avatar.jpg",
    category: "News",
    videoUrl: "https://www.youtube.com/watch?v=KLAQxEyJ5C0",
    youtubeId: "KLAQxEyJ5C0",
    verified: true,
    likes: "125K",
    subscribers: "19.9M subscribers",
    description: "CNN Live Analysis: Campaign trail political discussions, economic policy announcements, and key international defense updates."
  },
  {
    id: "v17_3",
    slug: "cnn-global-economic-policy-defense-briefing",
    title: "Global Economic Policy & Defense Briefing | CNN World News Tonight",
    thumbnail: "https://i.ytimg.com/vi/QX82CIW-ssI/hqdefault.jpg",
    duration: "57:44",
    views: "3.1M views",
    timestamp: "3 months ago",
    channelName: "CNN",
    channelId: "ch_cnn",
    channelAvatar: "/images/cnn_avatar.jpg",
    category: "News",
    videoUrl: "https://www.youtube.com/watch?v=QX82CIW-ssI",
    youtubeId: "QX82CIW-ssI",
    verified: true,
    likes: "160K",
    subscribers: "19.9M subscribers",
    description: "CNN World News special coverage on financial markets, international diplomacy, and breaking headlines from across the globe."
  },

  // ---------------- Sony LIV Videos (Sports) - Official YouTube Streams & Real Thumbnails ----------------
  {
    id: "v18",
    slug: "roma-vs-real-madrid-key-moments-uefa-champions-league",
    title: "Roma vs Real Madrid | Key Moments & Best Goals | UEFA Champions League",
    thumbnail: "https://i.ytimg.com/vi/wqxZhtwqCUc/hqdefault.jpg",
    duration: "9:54",
    views: "4.5M views",
    timestamp: "2 months ago",
    channelName: "Sony LIV",
    channelId: "ch_sonyliv",
    channelAvatar: "/images/sonyliv_logo.jpg",
    category: "Sports",
    videoUrl: "https://www.youtube.com/watch?v=wqxZhtwqCUc",
    youtubeId: "wqxZhtwqCUc",
    verified: true,
    likes: "210K",
    subscribers: "26.9M subscribers",
    description: "Relive every heart-stopping moment, stunning strike, and tactical masterclass from Roma vs Real Madrid in the UEFA Champions League on Sony LIV."
  },
  {
    id: "v18_2",
    slug: "manchester-city-vs-psg-key-moments-uefa-champions-league",
    title: "Manchester City vs PSG | Key Moments | UEFA Champions League Highlights",
    thumbnail: "https://i.ytimg.com/vi/2FhMf5_k6k0/hqdefault.jpg",
    duration: "10:04",
    views: "6.8M views",
    timestamp: "3 months ago",
    channelName: "Sony LIV",
    channelId: "ch_sonyliv",
    channelAvatar: "/images/sonyliv_logo.jpg",
    category: "Sports",
    videoUrl: "https://www.youtube.com/watch?v=2FhMf5_k6k0",
    youtubeId: "2FhMf5_k6k0",
    verified: true,
    likes: "390K",
    subscribers: "26.9M subscribers",
    description: "Two European heavyweights clash in an unforgettable Champions League showdown. Watch full match highlights on Sony LIV Sports."
  },
  {
    id: "v18_3",
    slug: "atletico-madrid-vs-manchester-united-highlights",
    title: "Atletico Madrid vs Manchester United | Dramatic Highlights | UEFA Champions League",
    thumbnail: "https://i.ytimg.com/vi/-2h8_h-ZloA/hqdefault.jpg",
    duration: "9:06",
    views: "5.2M views",
    timestamp: "4 months ago",
    channelName: "Sony LIV",
    channelId: "ch_sonyliv",
    channelAvatar: "/images/sonyliv_logo.jpg",
    category: "Sports",
    videoUrl: "https://www.youtube.com/watch?v=-2h8_h-ZloA",
    youtubeId: "-2h8_h-ZloA",
    verified: true,
    likes: "310K",
    subscribers: "26.9M subscribers",
    description: "Stoppage time drama, tactical brilliance, and breathtaking goals from Atletico Madrid vs Manchester United on Sony LIV."
  },

  // ---------------- Nikhil Kamath Videos (Podcasts) - Official YouTube Streams & Real Thumbnails ----------------
  {
    id: "v19",
    slug: "wtf-is-gaming-in-india-nikhil-kamath",
    title: "Ep# 17 | WTF is Gaming in India? | Career, Investment & Future | Nikhil Kamath",
    thumbnail: "https://i.ytimg.com/vi/VIlfHB7Jk2s/hqdefault.jpg",
    duration: "2:42:11",
    views: "3.8M views",
    timestamp: "2 months ago",
    channelName: "Nikhil Kamath",
    channelId: "ch_nikhilkamath",
    channelAvatar: "/images/nikhil_kamath.jpg",
    category: "Podcasts",
    videoUrl: "https://www.youtube.com/watch?v=VIlfHB7Jk2s",
    youtubeId: "VIlfHB7Jk2s",
    verified: true,
    likes: "185K",
    subscribers: "2.36M subscribers",
    description: "Nikhil Kamath sits down with top gaming founders: Nitish Mittersain (Nazara), Sean Hyunil Sohn (Krafton), Joseph Kim (Lila Games) and Animesh Agarwal (8Bit Thug) to explore the gaming industry."
  },
  {
    id: "v19_2",
    slug: "why-25-year-old-should-build-hotel-wtf-travel-nikhil-kamath",
    title: "Why A 25-Year-Old Should Build A Hotel, Not An App | MakeMyTrip x Taj | WTF is Travel?",
    thumbnail: "https://i.ytimg.com/vi/8RsrifYHZeI/hqdefault.jpg",
    duration: "3:21:51",
    views: "4.1M views",
    timestamp: "4 months ago",
    channelName: "Nikhil Kamath",
    channelId: "ch_nikhilkamath",
    channelAvatar: "/images/nikhil_kamath.jpg",
    category: "Podcasts",
    videoUrl: "https://www.youtube.com/watch?v=8RsrifYHZeI",
    youtubeId: "8RsrifYHZeI",
    verified: true,
    likes: "220K",
    subscribers: "2.36M subscribers",
    description: "Deep dive conversation with top hospitality titans: Deep Kalra (MakeMyTrip), Puneet Chhatwal (IHCL/Taj), and industry leaders discussing travel, real estate, and consumer brands."
  },
  {
    id: "v19_3",
    slug: "wtf-ep16-entrepreneur-character-flaws-nikhil-kamath",
    title: "WTF Ep# 16 | What character \"flaws\" make the best entrepreneurs? Nikhil ft. Ritesh & Ghazal",
    thumbnail: "https://i.ytimg.com/vi/FPV5fAkqyBs/hqdefault.jpg",
    duration: "4:14:42",
    views: "5.8M views",
    timestamp: "6 months ago",
    channelName: "Nikhil Kamath",
    channelId: "ch_nikhilkamath",
    channelAvatar: "/images/nikhil_kamath.jpg",
    category: "Podcasts",
    videoUrl: "https://www.youtube.com/watch?v=FPV5fAkqyBs",
    youtubeId: "FPV5fAkqyBs",
    verified: true,
    likes: "340K",
    subscribers: "2.36M subscribers",
    description: "Ritesh Agarwal (OYO), Ghazal Alagh (Mamaearth), and Manish Taneja (Purplle) join Nikhil Kamath to discuss founder psychology, resilience, and building iconic Indian enterprises."
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
      author: "GlobalNewsFan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 weeks ago",
      text: "The telemetry footage on the drone rescue operation was extraordinary. CNN investigative journalism at its best.",
      likes: 890,
      replies: 23
    }
  ],
  v17_2: [
    {
      id: "c17_2_1",
      author: "PolicyAnalyst",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 weeks ago",
      text: "Critical debate on international semiconductor manufacturing tariffs. Very informative report.",
      likes: 420,
      replies: 7
    }
  ],
  v18: [
    {
      id: "c18_1",
      author: "Madridista_Official",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
      timestamp: "1 month ago",
      text: "The curve on that outside-of-the-boot goal against Roma was pure magic! What a match on Sony LIV.",
      likes: 1240,
      replies: 31
    }
  ],
  v18_2: [
    {
      id: "c18_2_1",
      author: "UCL_Fanatic",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
      timestamp: "2 weeks ago",
      text: "City vs PSG matches never disappoint. The tactical battle between the midfields was insane.",
      likes: 980,
      replies: 24
    }
  ],
  v19: [
    {
      id: "c19_1",
      author: "Akash Singhal",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=60&auto=format&fit=crop&q=80",
      timestamp: "3 weeks ago",
      text: "San Francisco AI founders talking about agentic models and scaling laws with Nikhil Kamath is pure value.",
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
      text: "The perspective on building physical luxury hospitality assets vs pure digital software products is so refreshing.",
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
