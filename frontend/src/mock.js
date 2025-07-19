// Mock data for the portfolio website

export const portfolioData = {
  personal: {
    name: "Nirmal raj",
    title: "Software Developer",
    bio: "I'm a passionate software developer with 1+ years of experience building web applications. I love creating elegant solutions to complex problems and turning ideas into reality through code.",
    email: "nirmalrajm2971@gmail.com",
    phone: "+91 6369502140",
    location: "Neyveli",
    profileImage: "/12.jpeg",
  },

  skills: [
    { name: "JavaScript", level: "Expert", color: "mid-yellow" },
    { name: "React", level: "Expert", color: "mid-blue" },
    { name: "Node.js", level: "Advanced", color: "mid-green" },
    { name: "Python", level: "Advanced", color: "mid-purple" },
    { name: "TypeScript", level: "Intermediate", color: "dark-blue" },
    { name: "MongoDB", level: "Intermediate", color: "dark-green" },
    { name: "AWS", level: "Beginner", color: "mid-orange" },
    { name: "Docker", level: "Beginner", color: "light-blue" },
  ],

  projects: [
    {
      id: 1,
      title: "Feedback Internal System",
      description:
        "Internal feedback sharing platform enabling employees and managers to exchange structured feedback, track performance over time, and visualize sentiment trends through interactive dashboards.",
      technologies: [
        "React",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "HTML/CSS",
        "Docker",
        "Javascript",
      ],
      liveDemo: "https://feedback-tool-backend.vercel.app/",
      github: "https://github.com/nirmal2971/Feedback-tool-backend",
      bgColor: "mid-purple",
      textColor: "white",
    },

    {
      id: 2,
      title: "Admin Panel",
      description:
        "Full-featured admin panel built with the MERN stack, offering secure authentication, user and data management, and interactive dashboard visualizations. Includes role-based access, modular UI components, and optimized CRUD operations.",
      technologies: ["Express", "TypeScript", "Mongodb", "React", "Node.js"],
      liveDemo: "https://github.com/nirmal2971/admin_panel",
      github: "https://github.com/nirmal2971/admin_panel",
      bgColor: "mid-blue",
      textColor: "white",
    },
    {
      id: 3,
      title: " PubMed Paper Fetcher",
      description:
        "Research analytics tool that integrates with PubMed to evaluate publication metrics, author influence, and citation patterns. Enables keyword-based search, impact factor insights, and intuitive data visualizations to assist academic researchers and analysts.",
      technologies: ["Python"],
      liveDemo: "https://github.com/nirmal2971/Paper_fetcher",
      github: "https://github.com/nirmal2971/Paper_fetcher",
      bgColor: "mid-green",
      textColor: "white",
    },
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/nirmal2971",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nirmal-raj-47b620249/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:nirmalrajm2971@gmail.com",
      icon: "mail",
    },
  ],
};

export const formSubmission = {
  submitContactForm: async (formData) => {
    // Mock form submission - returns success after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock form submission:", formData);
        resolve({
          success: true,
          message: "Thank you for your message! I will get back to you soon.",
        });
      }, 1000);
    });
  },
};
