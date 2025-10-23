import type { Project } from "../types/Project"; 

export const projects: Project[] = [
  {
    id: "capstone-project",
    title: "Music Event Management API",
    tagline: "Comprehensive backend for managing music events, artists, and tickets with Firebase integration.",
    status: "completed",
    stack: ["Node.js", "TypeScript", "Express", "Firebase Firestore", "OpenAPI", "Jest", "GitHub Actions"],
    repo: "https://github.com/eeluwole1/Capstone-Project",
    demo: "https://eeluwole1.github.io/Music-Events-Deployment/",
    category: "api",
    highlights: [
      "Implements secure authentication and role-based authorization with Firebase",
      "Supports CRUD operations for users, events, artists, and tickets",
      "Includes PDF ticket generation, email notifications, and Joi validation",
      "Comprehensive test coverage using Jest and automated CI/CD pipelines via GitHub Actions",
      "Deployed live API documentation with OpenAPI and Redoc"
    ]
  },
  {
    id: "smartbank-app",
    title: "SmartBank App",
    tagline: "Full-stack banking system demo with OOP and user interface.",
    status: "completed",
    stack: ["Python", "OOP", "CLI", "Unit Tests"],
    repo: "https://github.com/eeluwole1/SmartBankApp",
    demo: "",
    category: "school",
    highlights: [
      "Implements real-world banking operations using object-oriented programming principles",
      "Encapsulation, inheritance, and polymorphism applied to simulate ATM and account management",
      "Demonstrates modular and reusable Python class structures"
    ]
  },
  {
    id: "music-events-api",
    title: "Music Events Management API v1.0.0",
    tagline: "REST-ful API for managing music events with live OpenAPI documentation.",
    status: "completed",
    stack: ["Node.js", "Express", "OpenAPI (Swagger)", "REST API"],
    demo: "https://eeluwole1.github.io/Music-Events-Deployment/",
    repo: "https://github.com/eeluwole1/Music-Events-Deployment",
    category: "api",
    highlights: [
      "Designed and documented a REST API for managing artists, events, and tickets",
      "Integrated OpenAPI/Swagger UI for seamless API visualization",
      "Deployed live documentation using GitHub Pages"
    ]
  },
  {
    id: "community-support-tracker",
    title: "Community Support Tracker",
    tagline: "Web app to track and manage community support initiatives.",
    status: "completed",
    stack: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    repo: "https://github.com/eeluwole1/Community-Support-Tracker",
    demo: "",
    category: "web",
    highlights: [
      "Tracks donations, volunteer hours, and event signups in real time",
      "Implements responsive design with TailwindCSS",
      "Collaborative project showcasing front-end development and Firebase integration"
    ]
  },
  {
    id: "royalwolesax-web",
    title: "Royal WoleSax Website",
    tagline: "Personal portfolio and music brand website built with React and Tailwind CSS.",
    status: "in-progress",
    stack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    repo: "https://github.com/eeluwole1/RoyalWolesax-Web",
    demo: "https://royalwolesax.com/",
    category: "web",
    highlights: [
      "Represents the Royal WoleSax music and technology brand",
      "Responsive design optimized for desktop and mobile",
      "Currently implementing backend for contact and portfolio pages"
    ]
  },
  {
    id: "mechat-app",
    title: "MeChat App",
    tagline: "Collaborative full-stack chat application with real-time messaging and user authentication.",
    status: "in-progress",
    stack: ["React", "TypeScript", "Firebase", "TailwindCSS", "Node.js"],
    repo: "https://github.com/eeluwole1/meChatApp",
    demo: "",
    category: "web",
    highlights: [
      "Developed with a 4-member team using GitHub Projects and branches for sprint collaboration",
      "Implements real-time chat and authentication using Firebase",
      "Focuses on clean UI/UX with modular, reusable React components"
    ]
  }
];
