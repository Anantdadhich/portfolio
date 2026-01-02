import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Anant Dadhich",
  initials: "AD",
  url: "https://anantdadhich.vercel.app/",
  location: "Jaipur, India",
  locationLink: "https://maps.app.goo.gl/qZCRZcNTVgXpEVFJA",
  description:
    "Hi, I am a Full Stack & Blockchain Developer.Currently building stuff where you just trust the code on solana .I am always eager to learn new things and open to freelance gigs. Feel free to contact me! ↓ ",
  summary:
    "I am  developer i love to code and whenever gets bored i turns into music currently focus on blockchain technologies .",
  skills: [
    "JavaScript",
    "TypeScript",
    "Rust",
    "Next JS",
    "React JS",
    "Node JS",
    "Express JS",
    "Hono JS",
    "Recoil",
    "Mongo DB",
    "PostgresSQL",
    "Prisma ORM",
    "Docker",
    "Git/GitHub",
    "Vite",
    "CloudFlare",
    "Turborepoes",
    "Redis",
    "Pub Sub",
    "WebSockets",
    "WebRTC",
    "GRPC",
    "OpenAPI",
    "SolanaWeb3.js",
    "Anchor Solana",
    "Testing",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material UI",
    "Shadcn UI",
    "GSAP"
  ],
  navbar: [{ href: "/#", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "anantdadhich66@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Anantdadhich",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anant-dadhich-b4aa02256/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/AnantDadhich6",
        icon: Icons.x,
        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "mailto:anantdadhich66@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  }
  ,


  projects: [
    {
      title: "Coursu.ai",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "An AI-powered platform that generates a structured course of YouTube videos based on the provided title and subtitle, including video summaries and quizzes derived from the content ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Next-Auth",
        "Framer Motion",
        "NextAuth",
        "GeminiAPI",
        "YoutubeAPI"
      ],
      links: [
        {
          type: "Live URL",
          href: "https://coursu-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/Coursu.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coursu.png",
    },
    {
      title: "NeuralTrader",
      href: "https://neuraltrader.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "An AI simulation platform on Solana where AI agents with different personalities trade a token in a simulated Solana environment. ",
      technologies: [
        "Next.js",
        "TypeScript",
        "Solana Agent Kit",
        "LangChain",
        "Ollama",
        "ASI",
        "SolanaWeb3.js",
        "Anchor",

      ],
      links: [
        {
          type: "Live URL",
          href: "https://codemuse-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/neural.png",
    },
    {
      title: "Devfinder",

      dates: "May 2024",
      active: true,
      description:
        "It is a platform where developers can create or join rooms to collaborate on fixing bugs in GitHub repos through live coding, screen sharing, and video calls. Rooms are tagged with relevant programming languages to make finding and solving issues easier ",
      technologies: [
        "Next.js",
        "Typescript",
        "Neontech",
        "Prisma",
        "TailwindCSS",
        "Stream.io",
        "Shadcn UI",
        "Next-Auth",

      ],
      links: [
        {
          type: "Live URL",
          href: "https://devfinder-coral.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }, {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/Bugfinder-paircode",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/devfinder.png",
    },

    {
      title: "Devtalk",
      href: "https://plinkoo-azure.vercel.app/",
      dates: "Sept 2024",
      active: true,
      description:
        "It is platform where developers connect with random dev just like omegle and share thier thoughts and ideas",
      technologies: [
        "React.js",
        "Typescript",
        "WebRTC",
        "Express.js",
        "TailwindCSS",
        "WebSockets",
        "Aceternity UI",

      ],
      links: [
        {
          type: "Live URL",
          href: "https://devtalk-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/devtalk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/devtalk.png",
    },
    {
      title: "Checkers",
      dates: "June 2024",
      active: true,
      description:
        "Checkers is an platform like chess.com where we can play the chess with real time communication. ",
      technologies: [
        "TurboRepoes",
        "React.js",
        "Typescript",
        "Docker",
        "Prisma",
        "TailwindCSS",
        "Express JS",
        "Web Sockets",
        "Shadcn UI",
        "Passport Js",
        "Node Js",
        "Redis",
        "PubSub"
      ],
      links: [
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/checkers",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "BrainyChain.ai",
      dates: "Nov 2024",
      active: true,
      description:
        "It is an AI-powered Telegram bot designed to guide you in creating a Solana wallet, generating tokens, and minting NFTs ",
      technologies: [
        "Telegraf",
        "Express.js",
        "Typescript",
        "Pinata IPFS",
        "Prisma",
        "SolanaWeb3.js",
        "Metaplex",
        "GeminiAPI"

      ],
      links: [

        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/Brainychain",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Codemuse",
      href: "https://codemuse-delta.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "It is AI-powered code inspiration engine where you get personalized project ideas based on your GitHub activity and tech preferences  ",
      technologies: [
        "tRPC",
        "Typescript",
        "Nextjs",
        "GeminiAPI"
      ],
      links: [
        {
          type: "Live URL",
          href: "https://codemuse-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
    },
    {
      title: "Fruity Slice",
      href: "https://fruityslice.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "It is a Fruity Slice token game on Solana, where players can slash fruits and earn SOL tokens based on their score",
      technologies: [
        "React JS",
        "SolanaWeb3.js",
        "TailwindCSS",
        "Express JS",
        "Node Js",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Live URL",
          href: "https://fruityslice.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/fruityslice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "FluidNFT",
      href: "https://web-tube-delta.vercel.app/",
      dates: "July 2024",
      active: true,
      description:
        "FluidNFT is a Solana-based platform that lets you instantly swap your SOL NFTs for any token with ease and speed.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "SolanaWeb3.js",
        "Metaplex",
      ],
      links: [
        {
          type: "Live URL",
          href: "https://fluidnft.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/fluidnft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    }
    ,
    {
      title: "Discode",
      href: "https://discode-xi.vercel.app/",
      dates: "June 2024",
      active: true,
      description:
        "Discode is an Discord inspired platfrom where user can create servers and channels ,chat with others with real time communication and video call,live screen sharing.  ",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "Sockets.io",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
        "Livekit.io",
      ],
      links: [
        {
          type: "Live URL",
          href: "https://discode-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/discode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },

    {
      title: "Snapgram",
      href: "https://social-media-app-blue-one.vercel.app",
      dates: "March 2024",
      active: true,
      description:
        "Snapgram is a platform where we can create posts and explore the others content and edit profils and save or like the posts",
      technologies: [
        "React.js",
        "Typescript",
        "Appwrite",
        "React Query",
        "TailwindCSS",

        "Shadcn UI",

      ],
      links: [
        {
          type: "Live URL",
          href: "https://social-media-app-blue-one.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/snapgram",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },

    {
      title: "Plinkoo",
      href: "https://plinkoo-azure.vercel.app/",
      dates: "Sept 2024",
      active: true,
      description:
        "Gambling website like plinko on stake platform",
      technologies: [
        "React.js",
        "Typescript",
        "Canvas",
        "Express.js",
        "TailwindCSS",

        "Aceternity UI",

      ],
      links: [
        {
          type: "Live URL",
          href: "https://plinkoo-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/plinkoo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Technoverse",
      href: "https://technoverse-two.vercel.app/",
      dates: "January 2024",
      active: true,
      description:
        "  Technoverse webpage for avatars which is made up of GSAP animations  ",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "GSAP",


      ],
      links: [
        {
          type: "Live URL",
          href: "https://technoverse-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/cyberfiction-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    }
  ]
  , work: [{
    company: "Ready Bytes",

    badges: [],
    location: "Bhilwara",
    title: "Full Stack Dev",
    logoUrl: "/ready-bytes-logo.png",
    start: "July 2024",
    end: "Aug 2024",

  },
  {
    company: "Comacks",
    badges: [],
    location: "Remote",
    title: "Fullstack AI Developer",
    logoUrl: "/comlogo.jpg",
    start: "Sept 2025",
    end: "Nov 2025",
    description: "Built fullstack application for clients with AI automation, RAG bots and all.",
  },
  {
    company: "Solana Turbin3",
    badges: [],
    location: "Remote",
    title: "Grad Builder Cohort 3",
    logoUrl: "/tur.ico",
    start: "Aug 2025",
    end: "Sept 2025",
    description: "Graduated Builder Cohort 3.",
  },
  ], hackathons: [
    {
      title: "Google Gen AI",
      dates: "September 20th - October 2th, 2024",
      location: "Virtual, Devfolio",
      description:
        "Built an AI-driven course creation platform during a hackathon using Next.js, Gemini API, and YouTube API to generate structured courses with video summaries and quizzes",


    }, {
      title: "HackIndia",
      dates: "October 3rd -  4th, 2024",
      location: "PIET,Jaipur",
      description:
        "Took part in a hackathon where I built an NFT music marketplace using Solidity — allowing artists to mint, list, and trade their music as NFTs.",


    }, {
      title: "100xDevs Solana Hackathon",
      dates: "May 2025",
      location: "Virtual, Superteam",
      description:
        "Won a $100 bounty and ranked among the top 40 projects in a hackathon held by 100xdevs SuperteamIn.",
    },
    {
      title: "ETHGlobal New Delhi",
      dates: "September 26th - 28th, 2025",
      location: "New Delhi",
      description:
        "Participated in the ETHGlobal New Delhi hackathon and built a project using zk-proofs",
    },
    {
      title: "Solana Cypherpunk Hackathon",
      dates: "October 2025",
      location: "Virtual",
      description:
        "Participated in the Solana Cypherpunk Hackathon and built a NeuralTrader AI simulation platform on Solana.",
    }


  ]

};
