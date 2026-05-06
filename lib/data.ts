import type { Project, SkillCategory } from "@/lib/types";

const seededProjects: Project[] = [
  {
    id: "quiz-master",
    title: "Quiz Master - AI Quiz App with Interactive Learning Features",
    description:
      "Quiz Master is a full-stack Flutter and Django quiz application that generates quizzes from text prompts and PDFs, manages user data, and tracks quiz progress. My contribution focused on the quiz-taking experience by building the interactive session flow, post-quiz review, results feedback, and local JSON-based quiz import.",
    impact:
      "It combines AI-powered quiz generation with a polished user-facing learning experience that supports feedback, review, and offline-ready content.",
    highlights: [
      "Worked on the Flutter quiz experience by designing an interactive interface with dynamic questions, a countdown timer, and real-time scoring.",
      "Implemented a dedicated review screen so users can revisit questions and inspect their submitted answers after finishing a quiz.",
      "Built result summary screens that provide immediate feedback on quiz performance and completion outcomes.",
      "Added support for importing quizzes from local JSON files to enable offline usage and flexible content updates.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Django",
      "Django REST framework",
      "Firebase Authentication",
      "Cloud Firestore",
      "Google Gemini API",
      "PyMuPDF",
      "JSON",
    ],
    image: "/images/QuizApp.png",
    githubUrl: "https://github.com/Ay0u8dev/quiz_master.git",
    type: "mobile",
  },
  {
    id: "association-website",
    title: "Association Website - Event Management and Admin Operations",
    description:
      "A full-stack web platform for a community association, with my contribution focused on the upcoming events experience, the interactive map, and the internal admin workflows. As team leader, I also drove coordination while implementing the event listing and detail flows plus the admin panels for volunteers, participants, and events.",
    impact:
      "It helped the association present upcoming activities clearly and manage registrations and volunteer operations from one centralized interface.",
    highlights: [
      "Led the project as team leader while owning the upcoming events section of the public website.",
      "Built the event details and registration flow, including participant submission and event-specific volunteer application paths.",
      "Implemented the admin panels for volunteers, participants, and events, with approval, decline, create, update, and delete workflows.",
      "Added event occupancy tracking in the admin and public views using registered-versus-capacity data from the backend.",
      "Integrated the map section into the public site to support location-oriented presentation of the association.",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Docker"],
    image: "/images/aspivot.png",
    githubUrl: null,
    isInDevelopment: true,
    type: "web",
  },
  {
    id: "smartshop",
    title: "SmartShop - Mobile E-Commerce Catalog and Inventory Manager",
    description:
      "SmartShop is a Flutter mobile app for browsing a product catalog, viewing product details, managing a cart, and saving favorites. It combines bundled JSON product data, on-device SQLite persistence, and HTTP-based CRUD flows for managing remote inventory from the same interface.",
    impact:
      "The app centralizes catalog browsing, local user state, and remote stock management into a single mobile shopping workflow.",
    highlights: [
      "Loads a typed product catalog from bundled JSON assets and filters inventory by category on the home screen.",
      "Implements remote product management with HTTP GET, POST, PUT, and DELETE requests against a local REST API.",
      "Persists favorites in on-device SQLite using sqflite, including add, remove, and query operations.",
      "Provides product detail, cart, and search flows with in-memory state and action history tracking.",
      "Applies app-wide dark mode and dynamic text sizing through ValueNotifier-driven theme settings.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Material 3",
      "sqflite",
      "SQLite",
      "HTTP",
      "Express.js",
      "Sequelize",
    ],
    image: "/images/Smartshop.png",
    githubUrl: "https://github.com/mohamedefk02/SmartShop-app.git",
    type: "mobile",
  },
  {
    id: "simple-ecommerce",
    title: "Simple E-Commerce Platform",
    description:
      "A full-stack e-commerce application featuring a React-based storefront and an Express REST API with PostgreSQL. It supports product browsing, a shopping cart, checkout processing, and a JWT-secured admin panel for inventory and order management.",
    impact:
      "Enables small-scale retail operations to establish a digital presence with robust inventory tracking, secure administrative controls, and a responsive customer experience.",
    highlights: [
      "JWT-Protected Admin Dashboard: Secure administrative interface for real-time inventory updates, product CRUD, and order status tracking.",
      "Relational Data Management: PostgreSQL implementation with complex queries for product filtering, pagination, and transactional order processing.",
      "Modular React Architecture: Client-side state management using Context API for authentication and shopping cart persistence across sessions.",
      "Robust Backend Services: RESTful API design with Express, including image upload handling via Multer and request validation using express-validator.",
      "Automated Seeding & Deployment: Integrated scripts for database schema initialization, admin user creation, and sample data population.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Vite",
      "JWT",
      "Multer",
      "React Router",
      "Bcrypt.js",
      "Express Validator",
      "Context API",
      "CSS",
    ],
    image: "/images/ecom.png",
    githubUrl: null,
    type: "web",
  },
  {
    id: "atlas-guardian",
    title: "Atlas Guardian - Earthquake Alert and Evacuation Assistant",
    description:
      "Atlas Guardian is a Flutter emergency-response app focused on earthquake readiness and evacuation. It combines provider-managed alert state, Mapbox-based crisis mapping, and audio/vibration notifications to simulate imminent quake warnings, guide users out of danger zones, and surface preparedness and damage-priority information.",
    impact:
      "It helps users react faster during earthquake scenarios by combining alerts, evacuation routing, and safety education in a single mobile experience.",
    highlights: [
      "Built a provider-backed earthquake state service that transitions between normal, imminent, and post-disaster states and drives the UI across the app.",
      "Implemented a full-screen emergency overlay with device vibration and looping siren playback using just_audio and vibration for high-visibility alerts.",
      "Integrated Mapbox Maps to render crisis zones, safe hubs, live user markers, and evacuation paths with polygon, polyline, and point annotations.",
      "Connected to the Mapbox Directions API over HTTP to fetch walking routes from the user's position to a calculated safe hub outside the red zone.",
      "Added geospatial danger-state detection and movement guards that warn users when they attempt to enter restricted crisis areas.",
      "Included preparedness learning modules and a satellite-style damage-priority screen with color-coded rescue zones and triage lists.",
    ],
    techStack: [
      "Dart",
      "Flutter",
      "Provider",
      "Mapbox Maps SDK for Flutter",
      "HTTP",
      "just_audio",
      "vibration",
      "geolocator",
      "intl",
    ],
    image: "/images/AtlasGuardian.png",
    githubUrl: "https://github.com/mohamedefk02/atlas_guardian_final.git",
    type: "mobile",
  },
  {
    id: "snapshot-tool",
    title: "Snapshot Tool - System Process Capture and Restoration",
    description:
      "A cross-platform desktop application that captures detailed snapshots of running processes, memory usage, and network connections. It utilizes the psutil library to record system state and provides a PyQt5 interface for managing and restoring workspace environments from JSON-based archives.",
    impact:
      "Enables users to preserve and rapidly reconstruct complex application environments, significantly reducing manual setup time after system restarts.",
    highlights: [
      "Implemented system-wide process tracking and resource monitoring using the psutil library",
      "Developed a cross-platform GUI with PyQt5 featuring dynamic directory management for Windows and Unix environments",
      "Engineered an automated state-capture system with user-configurable intervals using QTimer",
      "Integrated JSON-based data persistence for portable and human-readable system state storage",
    ],
    techStack: ["Python", "PyQt5", "psutil", "JSON"],
    image: "/images/sptool.png",
    githubUrl: "https://github.com/mohamedefk02/Snapshot_Recover",
    type: "desktop",
  },
  {
    id: "weball-v2",
    title: "WeBall Match Organizer Android App",
    description:
      "A native Android app for creating basketball matches, joining games, chatting with participants, and managing player profiles. It uses Firebase services for authentication, data storage, messaging, and media upload.",
    impact:
      "Helps players organize local matches and coordinate participation from one mobile app instead of using separate messaging and booking tools.",
    highlights: [
      "Email/password registration and login with Firebase Authentication",
      "Match creation with date, time, location, skill level, and match type",
      "Join-request flow for players who want to enter a match",
      "Group chat tied to each match",
      "Profile editing with avatar upload to Firebase Storage",
      "Google Maps integration via Android manifest API key setup",
    ],
    techStack: [
      "Java",
      "Android SDK",
      "AppCompat",
      "Material Components",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Firebase Firestore",
      "Firebase Storage",
      "Firebase Cloud Messaging",
      "Glide",
      "Google Maps SDK for Android",
    ],
    image: "/images/WeBall_V2.png",
    githubUrl: "https://github.com/mohamedefk02/weball-v2",
    type: "mobile",
  },
  {
    id: "weball-v1",
    title: "WeBall Sports Booking Android App",
    description:
      "A native Android app for discovering sports events and reserving courts for basketball, football, and volleyball. It includes Firebase-backed authentication, booking persistence, tournament detail screens, and a user profile area.",
    impact:
      "Helps players find sports activities and reserve facilities from one mobile app instead of handling bookings manually.",
    highlights: [
      "Firebase email/password registration and login flow",
      "Bottom-navigation app structure with Home, Events, and Profile screens",
      "Court booking flows for basketball, football, and volleyball using CalendarView",
      "Reservation data stored in Firebase Realtime Database",
      "Profile screen with uploaded avatar support via Firebase Storage and Glide",
      "Tournament detail pages for 3x3 basketball, 5x5 basketball, football, and volleyball",
    ],
    techStack: [
      "Java",
      "Android SDK / AppCompat",
      "Material Components",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Firebase Storage",
      "Glide",
    ],
    image: "/images/WeBall_V1.png",
    githubUrl: "https://github.com/mohamedefk02/weball-v1",
    type: "mobile",
  },
  {
    id: "pfa",
    title: "Automated Code Due Diligence & Quality Analysis Platform",
    description:
      "A distributed microservices platform (year-end capstone project) that automates software due diligence by cloning private GitHub repositories, running static and security analysis, and aggregating results into structured reports. It uses Java Spring Boot for orchestration and Python FastAPI for analysis services, with Docker-based isolation and RabbitMQ-driven workflows for asynchronous processing.",
    impact:
      "Provides automated technical due diligence by transforming raw repositories into structured insights on code quality, security, and maintainability. It reduces manual review effort by centralizing cloning, analysis, and reporting into an event-driven pipeline with reproducible results.",
    highlights: [
      "Implemented secure cloning of private GitHub repositories using installation tokens, storing each repository inside a Docker Volume uniquely named by job ID for full traceability.",
      "Generated a structured File Manifest JSON per repository, capturing file paths, extensions, sizes, and last modified timestamps for downstream analysis.",
      "Designed and integrated job lifecycle tracking in PostgreSQL with state transitions (pending → running → complete) ensuring reliable workflow observability.",
      "Extended SonarQube metrics collection layer to include bugs, vulnerabilities, complexity, cognitive complexity, code smells, duplication rate, and quality gate status.",
      "Integrated Code Quality Service into RabbitMQ event flow, consuming job_ready messages and publishing enriched job_result payloads after analysis.",
      "Orchestrated dynamic SonarScanner execution via Docker, mounting repository volumes and retrieving analysis results through SonarQube REST API.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Python",
      "FastAPI",
      "RabbitMQ",
      "PostgreSQL",
      "Docker",
      "SonarQube",
      "SonarScanner",
      "GitHub API",
      "JWT",
      "Tree-sitter",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flyway",
    ],
    image: "/images/PFA.png",
    githubUrl: null,
    isInDevelopment: true,
    type: "fullstack",
  },
];

const seededSkillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    items: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Spring", icon: "devicon-spring-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored" },
      { name: "Entity Framework Core", icon: "devicon-visualstudio-plain colored" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "Oracle Database", icon: "devicon-oracle-original colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "SQLite", icon: "devicon-sqlite-plain colored" },
      { name: "Microsoft SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
    ],
  },
  {
    name: "Tools & Technologies",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "Android Studio", icon: "devicon-android-plain colored" },
    ],
  },
];

export function createSeededProjects() {
  return seededProjects.map((project) => ({
    ...project,
    highlights: [...project.highlights],
    techStack: [...project.techStack],
  }));
}

export function createSeededSkillCategories() {
  return seededSkillCategories.map((category) => ({
    ...category,
    items: category.items.map((item) => ({ ...item })),
  }));
}
