// Mock data for the portfolio website

export const portfolioData = {
  personal: {
    name: "Nirmal raj",
    title: "Software Developer",
    bio: "I'm a passionate software developer with 3+ years of experience building web applications. I love creating elegant solutions to complex problems and turning ideas into reality through code.",
    email: "nirmalraj@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  
  skills: [
    { name: "JavaScript", level: "Expert", color: "mid-yellow" },
    { name: "React", level: "Expert", color: "mid-blue" },
    { name: "Node.js", level: "Advanced", color: "mid-green" },
    { name: "Python", level: "Advanced", color: "mid-purple" },
    { name: "TypeScript", level: "Intermediate", color: "dark-blue" },
    { name: "MongoDB", level: "Intermediate", color: "dark-green" },
    { name: "AWS", level: "Intermediate", color: "mid-orange" },
    { name: "Docker", level: "Intermediate", color: "light-blue" }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "https://ecommerce-demo.example.com",
      github: "https://github.com/nirmalraj/ecommerce-platform",
      bgColor: "light-pink",
      textColor: "black"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveDemo: "https://taskmanager-demo.example.com",
      github: "https://github.com/nirmalraj/task-manager",
      bgColor: "mid-purple",
      textColor: "white"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design for all devices.",
      technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
      liveDemo: "https://weather-dashboard.example.com",
      github: "https://github.com/nirmalraj/weather-dashboard",
      bgColor: "light-yellow",
      textColor: "black"
    },
    {
      id: 4,
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support, SEO optimization, and admin dashboard for content creation.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      liveDemo: "https://blog-cms.example.com",
      github: "https://github.com/nirmalraj/blog-cms",
      bgColor: "mid-blue",
      textColor: "white"
    },
    {
      id: 5,
      title: "AI Chat Assistant",
      description: "Intelligent chat assistant powered by OpenAI API with conversation history, context awareness, and customizable responses.",
      technologies: ["Python", "Flask", "OpenAI API", "React"],
      liveDemo: "https://ai-chat.example.com",
      github: "https://github.com/nirmalraj/ai-chat-assistant",
      bgColor: "mid-green",
      textColor: "white"
    }
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/nirmalraj",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nirmalraj",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nirmalraj",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:nirmalraj@example.com",
      icon: "mail"
    }
  ]
};

export const formSubmission = {
  submitContactForm: async (formData) => {
    // Mock form submission - returns success after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Mock form submission:', formData);
        resolve({
          success: true,
          message: 'Thank you for your message! I will get back to you soon.'
        });
      }, 1000);
    });
  }
};