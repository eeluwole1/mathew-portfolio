import type { Project } from "../types/Project"; 

export const projects: Project[] = [
  {
    id: "docsequence-api",
    title: "DocSequence API",
    tagline: "Concurrency-safe engineering document numbering: no two engineers ever get the same number.",
    status: "completed",
    stack: ["C#", "ASP.NET Core 10", "Entity Framework Core", "Azure SQL", "xUnit", "Testcontainers", "Azure App Service", "GitHub Actions"],
    repo: "https://github.com/eeluwole1/DocSequence-Api",
    demo: "https://docsequence-api-fkdxawc9c0gjeqcc.canadacentral-01.azurewebsites.net/swagger",
    category: "api",
    highlights: [
      "Atomic UPDATE…OUTPUT per-type counter: 100 parallel requests get 100 distinct, gap-free numbers",
      "Idempotent retries with a client request key, race-safe through a unique constraint",
      "Named database constraints as the final safeguard; failed requests roll back and consume no number",
      "48 automated tests against a real SQL Server in Docker; deploys to Azure only after CI passes"
    ]
  },
  {
    id: "docsequence-web",
    title: "DocSequence",
    tagline: "Angular app that replaces a paper numbering ledger: generate, copy and trace document identifiers.",
    status: "completed",
    stack: ["Angular 21", "TypeScript", "TailwindCSS", "Signals", "Vitest", "Azure Static Web Apps"],
    repo: "https://github.com/eeluwole1/DocSequence-Client",
    demo: "https://purple-flower-04ffe8110.2.azurestaticapps.net",
    category: "web",
    highlights: [
      "Retry-safe Generate flow: the same request key is reused after a failure, so no number is wasted",
      "Filterable, paged allocation history with local times and UTC tooltips",
      "Requirements-first: built from a written SRS with 23 acceptance criteria mapped to tests"
    ]
  },
  {
    id: "finance-api",
    title: "Priscilla Trust Insurance API",
    tagline: "Insurance and wealth-management backend, scoped entirely to the client who owns it.",
    status: "completed",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Swagger/OpenAPI", "Azure App Service", "GitHub Actions"],
    repo: "https://github.com/eeluwole1/finance-api",
    demo: "https://priscillatrust-api-erhqgkcygqakd9g4.canadacentral-01.azurewebsites.net/swagger-ui/index.html",
    category: "api",
    highlights: [
      "Ownership guard on every domain prevents IDOR access beyond role-based auth alone",
      "Money modeled as BigDecimal, not Double, avoiding floating-point drift in balances",
      "JWT Bearer auth documented in Swagger UI with a working Authorize flow",
      "Deployed to Azure App Service via GitHub Actions CI/CD, on managed PostgreSQL"
    ]
  },
  {
    id: "capstone-project",
    title: "Music Event Management API",
    tagline: "Backend for managing music events, artists, and tickets, built on Firebase.",
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
      "Applies encapsulation, inheritance, and polymorphism to ATM logic",
      "Demonstrates modular and reusable Python class structures"
    ]
  },
  {
    id: "royalwolesax-web",
    title: "Royal WoleSax Website",
    tagline: "Full-stack platform for the Royal WoleSax brand - Next.js and a custom Node.js API.",
    status: "completed",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "PostgreSQL"],
    repo: "https://github.com/eeluwole1/royalwolesax-web",
    demo: "https://www.royalwolesax.com/",
    category: "web",
    highlights: [
      "Next.js frontend with a responsive design optimized for desktop and mobile",
      "Custom Node.js/Express API (private) handles bookings, RSVP tickets, and events",
      "JWT-authenticated admin access on the API, backed by PostgreSQL (Neon)"
    ]
  },
  {
    id: "ledgerapp-web",
    title: "LedgerApp",
    tagline: "Personal finance tracker built with Angular and ASP.NET Core.",
    status: "completed",
    stack: ["Angular", "TypeScript", "TailwindCSS", "Azure Static Web Apps"],
    repo: "https://github.com/eeluwole1/LedgerClient",
    demo: "https://gentle-grass-0df38ee10.3.azurestaticapps.net",
    category: "web",
    highlights: [
      "Zoneless Angular 21 app - all async state flows through signals",
      "Reusable component library: buttons, cards, dialogs, and toast notifications",
      "JWT auth with a remember-me toggle and route guards"
    ]
  },
  {
    id: "ledgerapp-api",
    title: "LedgerApp API",
    tagline: "Backend API powering LedgerApp - auth, transactions, and per-user data isolation.",
    status: "completed",
    stack: ["C#", "ASP.NET Core", "Entity Framework Core", "Azure SQL", "JWT"],
    repo: "https://github.com/eeluwole1/LedgerApp",
    demo: "https://ledgerapp-demo-bgaqbpadbzfjhegh.canadacentral-01.azurewebsites.net/swagger",
    category: "api",
    highlights: [
      "Ownership checks on every query prevent IDOR access beyond just [Authorize]",
      "Paginated endpoints plus a separate summary endpoint keep dashboard totals accurate",
      "JWT Bearer auth and EF Core migrations against Azure SQL, CORS-restricted"
    ]
  }
];
