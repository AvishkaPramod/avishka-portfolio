export const projects = [
  {
    slug: "rochee-fashion",
    title: "ROCHEE Fashion",
    category: "Frontend",
    description: "Premium luxury fashion brand website",
    live: "https://rochee-fashion.vercel.app",
    github: "",
    stack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Vercel"],
    overview:
      "A modern, animated e-commerce showcase for a premium clothing brand — designed to feel elegant and high-end while remaining fast and fully responsive.",
    highlights: [
      "Multi-font design system (Inter, Playfair, Poppins)",
      "Full SEO metadata + OpenGraph",
      "Scroll progress + parallax animations",
      "Instagram gallery + newsletter integration",
    ],
  },
  {
    slug: "aknursingcare",
    title: "AKNursingCare",
    category: "Full Stack",
    description: "Nursing care platform with admin & user roles",
    live: "https://aknursingcare.azurewebsites.net",
    github: "",
    stack: [
      "ASP.NET Core MVC (.NET 8)",
      "C#",
      "MySQL",
      "EF Core",
      "BCrypt",
      "MailKit",
      "Azure",
      "GitHub Actions",
    ],
    overview:
      "A nursing care management platform built with clean architecture. Supports two roles — admin and user — with authentication, email notifications, and structured data handling via Entity Framework.",
    highlights: [
      "Clean architecture (business / contracts / entities / shared)",
      "Role-based access — admin + user",
      "GitHub Actions CI/CD pipeline",
      "BCrypt auth + MailKit email service",
    ],
  },
  {
    slug: "kingdom-of-english",
    title: "Kingdom of English",
    category: "Frontend",
    description: "Language institute website (IELTS · PTE · German Visa)",
    live: "https://kingdom-of-english.vercel.app",
    github: "",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    overview:
      "A modern website for a premier language institute offering IELTS, PTE, Spoken English, and German visa facilitation. Clean layout, custom royal/gold theme, and mobile-first design.",
    highlights: [
      "Custom royal/gold theme",
      "Layout + sections architecture",
      "Mobile menu + testimonials",
      "Course preview + visa CTA sections",
    ],
  },
  {
    slug: "earnpilot",
    title: "EarnPilot",
    category: "Static",
    description: "Online earning education platform",
    live: "https://earnpilotv1.netlify.app",
    github: "",
    stack: ["HTML5", "Modular CSS", "JavaScript", "Netlify"],
    overview:
      "A guide-based platform that walks beginners through online earning opportunities — step-by-step, with real platforms and structured guidance.",
    highlights: [
      "Component-based HTML (navbar/footer includes)",
      "CSS variable design system",
      "Multi-page structure",
      "Deployed via Netlify",
    ],
  },
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Static"];