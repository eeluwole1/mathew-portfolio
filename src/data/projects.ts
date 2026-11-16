import type { Project } from "../types/Project";

/** In display order: the strongest, most recent work first. */
export const projects: Project[] = [
  {
    id: "advisorflow-crm",
    title: "AdvisorFlow CRM",
    tagline: "Advisory CRM on Salesforce, with an ASP.NET Core API and an Angular app.",
    status: "in-progress",
    stack: [
      "Salesforce",
      "Apex",
      "Flow",
      "LWC",
      "SOQL",
      "ASP.NET Core",
      "Angular",
      "Microsoft Entra ID",
      "Azure",
      "GitHub Actions"
    ],
    categories: ["salesforce", "web", "api"],
    highlights: [
      "A stage change in the app triggers a Salesforce Flow; Apex tests incl. bulk",
      "Microsoft Entra sign-in: only Advisors can edit, and every edit is audited",
      "CI runs all Apex tests as a least-privilege user before each Azure deploy"
    ],
    links: [
      { label: "Live demo", url: "https://zealous-pebble-02abce610.4.azurestaticapps.net", kind: "demo" },
      { label: "Web code", url: "https://github.com/eeluwole1/advisorflow-web", kind: "code" },
      { label: "API code", url: "https://github.com/eeluwole1/advisorflow-api", kind: "code" }
    ]
  },
  {
    id: "ledgerapp",
    title: "LedgerApp",
    tagline: "Full-stack personal finance tracker: Angular front end and ASP.NET Core API on Azure.",
    status: "completed",
    stack: ["Angular", "TypeScript", "C#", "ASP.NET Core", "Entity Framework Core", "Azure SQL", "JWT", "Azure"],
    categories: ["web", "api"],
    highlights: [
      "Ownership checks on every query prevent IDOR access beyond [Authorize]",
      "Zoneless Angular app on signals, with a reusable component library",
      "Azure Static Web Apps and App Service, deployed by GitHub Actions"
    ],
    links: [
      { label: "Live demo", url: "https://gentle-grass-0df38ee10.3.azurestaticapps.net", kind: "demo" },
      { label: "Web code", url: "https://github.com/eeluwole1/LedgerClient", kind: "code" },
      { label: "API code", url: "https://github.com/eeluwole1/LedgerApp", kind: "code" }
    ]
  },
  {
    id: "royalwolesax-web",
    title: "Royal WoleSax Website",
    tagline: "Full-stack platform for the Royal WoleSax brand: Next.js and a custom Node.js API.",
    status: "completed",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "PostgreSQL"],
    categories: ["web"],
    highlights: [
      "Next.js front end with a responsive design for desktop and mobile",
      "Custom Node.js/Express API (private) handles bookings, RSVP tickets and events",
      "JWT-authenticated admin access on the API, backed by PostgreSQL (Neon)"
    ],
    links: [
      { label: "Live site", url: "https://www.royalwolesax.com/", kind: "demo" },
      { label: "GitHub", url: "https://github.com/eeluwole1/royalwolesax-web", kind: "code" }
    ]
  },
  {
    id: "finance-api",
    title: "Priscilla Trust Insurance API",
    tagline: "Insurance and wealth-management backend, scoped entirely to the client who owns it.",
    status: "completed",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Swagger/OpenAPI", "Azure App Service", "GitHub Actions"],
    categories: ["api"],
    highlights: [
      "Ownership guard on every domain prevents IDOR access beyond role-based auth alone",
      "Money modeled as BigDecimal, not Double, avoiding floating-point drift in balances",
      "Deployed to Azure App Service via GitHub Actions CI/CD, on managed PostgreSQL"
    ],
    links: [
      {
        label: "API docs",
        url: "https://priscillatrust-api-erhqgkcygqakd9g4.canadacentral-01.azurewebsites.net/swagger-ui/index.html",
        kind: "demo"
      },
      { label: "GitHub", url: "https://github.com/eeluwole1/finance-api", kind: "code" }
    ]
  },
  {
    id: "capstone-project",
    title: "Music Event Management API",
    tagline: "Backend for managing music events, artists and tickets, built on Firebase.",
    status: "completed",
    stack: ["Node.js", "TypeScript", "Express", "Firebase Firestore", "OpenAPI", "Jest", "GitHub Actions"],
    categories: ["api", "school"],
    highlights: [
      "Secure authentication and role-based authorization with Firebase",
      "PDF ticket generation, email notifications and Joi validation",
      "Jest test coverage and CI/CD with GitHub Actions; live OpenAPI docs"
    ],
    links: [
      { label: "API docs", url: "https://eeluwole1.github.io/Music-Events-Deployment/", kind: "demo" },
      { label: "GitHub", url: "https://github.com/eeluwole1/Capstone-Project", kind: "code" }
    ]
  },
  {
    id: "smartbank-app",
    title: "SmartBank App",
    tagline: "Command-line banking simulator in Python, built around object-oriented design.",
    status: "completed",
    stack: ["Python", "OOP", "CLI", "Unit Tests"],
    categories: ["school"],
    highlights: [
      "Models real-world banking operations with object-oriented principles",
      "Applies encapsulation, inheritance and polymorphism to ATM logic",
      "Modular, reusable class structure covered by unit tests"
    ],
    links: [{ label: "GitHub", url: "https://github.com/eeluwole1/SmartBankApp", kind: "code" }]
  }
];
