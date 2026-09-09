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
    id: "ledgerapp-web",
    title: "LedgerApp",
    tagline: "Personal finance tracker for tracking income and expenses, built with Angular and ASP.NET Core.",
    status: "completed",
    stack: ["Angular", "TypeScript", "TailwindCSS", "Azure Static Web Apps"],
    repo: "https://github.com/eeluwole1/LedgerClient",
    demo: "https://gentle-grass-0df38ee10.3.azurestaticapps.net",
    category: "web",
    highlights: [
      "Zoneless Angular 21 app — all async state (HTTP responses, form validation) flows through signals",
      "Reusable component library: buttons, cards, confirm dialogs, and global toast notifications",
      "JWT auth with a functional remember-me toggle (localStorage vs sessionStorage) and route guards"
    ]
  },
  {
    id: "ledgerapp-api",
    title: "LedgerApp API",
    tagline: "Backend API powering LedgerApp — authentication, transactions, and per-user data isolation.",
    status: "completed",
    stack: ["C#", "ASP.NET Core", "Entity Framework Core", "Azure SQL", "JWT"],
    repo: "https://github.com/eeluwole1/LedgerApp",
    demo: "https://ledgerapp-demo-bgaqbpadbzfjhegh.canadacentral-01.azurewebsites.net/swagger",
    category: "api",
    highlights: [
      "Ownership checks on every query (ID + UserId) prevent IDOR access to other users' records, beyond just [Authorize]",
      "Paginated endpoints plus a separately-aggregated summary endpoint, so dashboard totals stay accurate independent of the current page",
      "JWT Bearer auth and EF Core migrations against Azure SQL, with CORS restricted to the deployed frontend's origin"
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
