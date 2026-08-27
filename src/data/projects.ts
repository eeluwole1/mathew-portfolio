import type { Project } from "../types/Project"; 

export const projects: Project[] = [
  {
    id: "finance-api",
    title: "Finance API",
    tagline: "Enterprise-style financial services backend built with Java and Spring Boot.",
    status: "completed",
    stack: ["Java", "Spring Boot", "Maven", "REST API"],
    repo: "https://github.com/eeluwole1/finance-api",
    demo: "",
    category: "api",
    highlights: [
      "Layered architecture with dedicated controller, service, repository, and DTO layers",
      "Separate modules for accounts, authentication, beneficiaries, claims, clients, and payments",
      "Built following Spring Boot best practices for maintainable, testable financial services"
    ]
  },
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
    status: "completed",
    stack: ["React", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/eeluwole1/royalwolesax-web",
    demo: "https://www.royalwolesax.com/",
    category: "web",
    highlights: [
      "Represents the Royal WoleSax music and technology brand",
      "Responsive design optimized for desktop and mobile",
      "Consumes the royalwolesax-api backend for content and authentication"
    ]
  },
  {
    id: "royalwolesax-api",
    title: "Royal WoleSax API",
    tagline: "Backend API powering www.royalwolesax.com — content, media, and auth.",
    status: "completed",
    stack: ["Node.js", "TypeScript", "Prisma", "PostgreSQL (Neon)", "JWT"],
    repo: "https://github.com/eeluwole1/royalwolesax-api",
    demo: "",
    category: "api",
    highlights: [
      "JWT-based authentication with login, logout, and session (getMe) endpoints",
      "Prisma ORM against a Neon PostgreSQL database",
      "Schema-validated endpoints for events, tickets, media, music, bookings, and testimonials"
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
