import type { Project } from "../types/Project"; 

export const projects: Project[] = [
  {
    id: "finance-api",
    title: "Priscilla Trust Insurance API",
    tagline: "Insurance and wealth-management backend — accounts, policies, claims, payments, loans, and rewards, all scoped to the client who owns them.",
    status: "completed",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Swagger/OpenAPI", "Azure App Service", "GitHub Actions"],
    repo: "https://github.com/eeluwole1/finance-api",
    demo: "https://priscillatrust-api-erhqgkcygqakd9g4.canadacentral-01.azurewebsites.net/swagger-ui/index.html",
    category: "api",
    highlights: [
      "Ownership guard on every domain (accounts, policies, claims, payments, loans, rewards) prevents IDOR access beyond role-based auth alone",
      "Money fields modeled as BigDecimal with fixed precision/scale instead of Double, avoiding floating-point drift in balances and premiums",
      "JWT Bearer auth documented in Swagger UI with a working Authorize flow, plus Bean Validation on every request DTO",
      "Deployed to Azure App Service via GitHub Actions CI/CD, backed by a managed PostgreSQL database"
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
    id: "royalwolesax-web",
    title: "Royal WoleSax Website",
    tagline: "Full-stack platform for the Royal WoleSax music brand — a Next.js site backed by a custom Node.js/Express API.",
    status: "completed",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "PostgreSQL"],
    repo: "https://github.com/eeluwole1/royalwolesax-web",
    demo: "https://www.royalwolesax.com/",
    category: "web",
    highlights: [
      "Next.js frontend with a responsive design optimized for desktop and mobile",
      "Custom Node.js/Express/Prisma API (private repo) handles bookings, RSVP ticketing with QR codes, event listings, and music/media",
      "JWT-authenticated admin access on the API, backed by PostgreSQL (Neon)"
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
  }
];
