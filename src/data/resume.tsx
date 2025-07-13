import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Prathamesh Kothalkar",
  initials: "Pro",
  url: "https://www.prathamesh-kothalkar.vercel.app",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Developer | Full Stack Engineer | Student ",
  summary:"I’m a third-year IT Engineering student at SPPU with practical experience in full-stack and backend development. As a Software Developer Intern at Arevei, I contributed to building scalable e-commerce solutions using React, Next.js, Node.js, and MongoDB. I’ve developed and deployed several real-world applications and solved 200+ DSA problems, demonstrating strong problem-solving skills and algorithmic thinking. I’m passionate about system design, distributed systems, and building efficient, user-centric products. Currently, I’m exploring blockchain and cloud-native development, with a long-term goal of joining a high-impact engineering team at a company like Google, where innovation, scale, and learning never stop.",
  avatarUrl: "https://i.ibb.co/QksNKnW/prathamesh.jpg",
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "C++",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "Docker",
    "Android",
    "Redis"
  ],
  codingProfiles:[
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/prathamesh_kothalkar/",
      icon: Icons.globe,
      badges: [
        {
          title: "200+ problems solved",
          variant: "secondary",
        },
      ],
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/prathameshkotha4",
      icon: Icons.globe,
      badges: [
        {
          title: "100+ problems solved",
          variant: "secondary",
        },
      ],
    },
    {
      name: "GitHub",
      url: "https://github.com/Prathamesh-Kothalkar",
      icon: Icons.globe,
      badges: [
        {
          title: "Projects and Contributions",
          variant: "secondary",
        },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prathameshkothalkar9021@gmail.com",
    tel: "+91 9021023183",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Prathamesh-Kothalkar",
        icon: Icons.github,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "./Prathamesh_Resume_2027_SDE.pdf",
        icon: Icons.googleDrive,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prathamesh-kothalkar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Prathamesh_Koth",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:prathameshkothalkar9021@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Arevei",
      href: "https://arevei.com",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/arevei.png",
      start: "Aug 2024",
      end: "May 2025",
      description:
        "Contributing to the development of an e-commerce platform. Building frontend pages using React and Tailwind CSS. Developing backend functionalities using Node.js and MongoDB including cart, order, and payment systems. Implemented Razorpay integration and admin panel with dynamic slide management.",
    },
    {
      company: "Google Developer Group on Campus",
      href: "https://gdg.community.dev/gdg-on-campus-zcoer/",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Core Team Member (WEB)",
      logoUrl: "/gdg.svg",
      start: "Oct 2024",
      end: "Present",
      description:
        "Currently developing the official website for GDG on Campus ZCOER. Responsible for building frontend pages using Nextjs and Tailwind CSS and developing backend services with Node.js and MongoDB. Features include event listings, team showcase, and admin tools for dynamic content management. Also contributed to payment integration and secure form handling.",
    },    
    {
      company: "Passion Softwares",
      badges: [],
      href: "https://www.linkedin.com/company/passion-softwares/",
      location: "Remote",
      title: "Full Stack Java Trainee",
      logoUrl: "/passion.jpg",
      start: "Jan 2024",
      end: "Mar 2024",
      description:
        "Built full-stack web applications using Java, Spring Boot, and MySQL. Gained experience in MVC architecture and RESTful API development. Worked on several hands-on assignments and completed final assessment with top feedback.",
    },
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "https://unipune.ac.in",
      degree: "B.E in Information Technology",
      logoUrl: "./sppu.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "MSBTE - Government Polytechnic Jalgaon",
      href: "https://gpjalgaon.ac.in/AboutInstitute.html",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/diploma.jpg",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
     {
      title: "College Recommendation System with GEN AI",
      href: "https://www.guessmycollege.in/",
      dates: "May 2025",
      active: true,
     description:
  "An AI-powered college recommendation platform for MHT-CET aspirants. Leveraging GenAI (Gemini) for real-time college summaries and Redis for fast caching of summary results. Integrated with ProgramerAPI to fetch live college data. Within 4 days of launch, it crossed 2K+ visitors, 13K+ page views, and 1.1K+ form submissions.",
      technologies: [
        "TypeScript",
        "Next.js (ts)",
        "Node.js (ts)",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "GenAI (Gemini)",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Prathamesh-Kothalkar/rankwise",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://www.guessmycollege.in/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/gmc.png",
    },
     {
      title: "Collaborative Real-Time Whiteboard Application",
      href: "https://github.com/Prathamesh-Kothalkar/realtime-whiteboard",
      dates: "May 2025",
      active: true,
      description:
        "Designed and developed a fully responsive real-time collaborative whiteboard application using React and Fabric.js, enabling multiple users to draw, annotate, and interact simultaneously.",
      technologies: [
        "TypeScript",
        "React.js (ts)",
        "Node.js (ts)",
        "fabric.js",
        "Socket.io",
        "Bootstrap",
        "Keycloak",
        
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Prathamesh-Kothalkar/realtime-whiteboard",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Video",
          href: "https://github.com/user-attachments/assets/b2e1bbb1-ab7b-4b99-88fc-e77f687d71d5",
          icon: <Icons.youtube className="size-3" />,
        }
      ],
      image: "/whiteboard.gif",
    },
    {
      title: "Support Desk",
      href: "https://support-desk-student.vercel.app/",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
        "A student-focused support ticketing system built to streamline communication with staff members. Students can raise tickets, view ticket status, and get real-time updates. Designed with an intuitive UI and secure authentication.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Mongoose",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Prathamesh-Kothalkar/Support-Desk-Student",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://support-desk-student.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Student.png",
    },
    {
      title: "Support Desk (Admin)",
      href: "https://support-desk-staff.vercel.app/",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
        "An admin dashboard for managing student support tickets. Enables staff to view, respond to, and resolve tickets efficiently. Includes role-based access, ticket assignment, and system insights for improved support management.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Mongoose",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Prathamesh-Kothalkar/Support-Desk-Staff",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://support-desk-staff.vercel.app/dashboard",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Admin.png",
    },
    
    ,{
      title: "E-Commerce Web App",
      href: "https://github.com/Prathamesh-Kothalkar/Shooppey",
      dates: "Jul 2023 - Jul 203",
      active: true,
      description:
        "Developed a e-commerce frontend using React.js Where user allows to add or remove product from Cart. As well as Used react toastify for notifiying user also create a Bill Board component which calculate item and prices.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Razorpay",
        "Tailwind CSS",
        "Mongoose",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Prathamesh-Kothalkar/Shooppey",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href:"https://shoppei.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/ecom.png",
      video: "",
    },
    {
      title: "Full Stack Wallet App",
      href: "https://github.com/Prathamesh-Kothalkar/paytm-app",
      dates: "Sep 2024",
      active: false,
      description:
        "Developed a full stack app Where user can send and recive money. While developing project understand the ' Session in MongoDb' ,Sessions enable causal consistency for a group of operations or allow you to execute operations in an ACID transaction.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      links: [
        {
          type:"Github",
          href: "https://github.com/Prathamesh-Kothalkar/paytm-app",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/paytm.gif",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Intra-College Hackathon 2024",
      dates: "March 2024",
      location: "Pune, Maharashtra",
      description:
        "Built a utility app with my teammate as part of a 2-member team. I handled the complete backend and system design, including notifications and database integration.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
