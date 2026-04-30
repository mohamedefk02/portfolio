package com.myportfolio.portfolio.service;

import com.myportfolio.portfolio.model.Project;
import com.myportfolio.portfolio.model.SkillCategory;
import com.myportfolio.portfolio.model.TechItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
public class PortfolioService {

    private final List<SkillCategory> skillCategories = new ArrayList<>();
    private final List<Project> projects = new ArrayList<>();

    public PortfolioService() {
        init();
    }

    private void init() {
// Seed initial projects
projects.add(new Project(
    "Quiz Master – AI Quiz Mobile App",
    "AI-powered quiz app for creating, importing, and taking quizzes offline or online.",
    "Enables engaging learning experiences with dynamic question generation and scoring.",
    List.of(
        "AI-generated questions",
        "JSON import & offline use",
        "Real-time scoring with separate Quiz/Review/Result flows"
    ),
    List.of("Flutter", "AI integration", "Offline persistence", "JSON handling"),
    "images/5.jpg",
    "https://github.com/octocat/Hello-World",
    "mobile"
));

projects.add(new Project(
    "SmartShop – Stock & E-Commerce Management App",
    "Full-featured stock and e-commerce app with local persistence and backend integration.",
    "Streamlines inventory management and online sales for small businesses.",
    List.of(
        "Multi-mode catalog with filtering",
        "Intelligent search with activity logs",
        "Shopping cart with dynamic badge",
        "Admin API for product management",
        "Favorites system for offline use",
        "Dark/Light mode and responsive UI"
    ),
    List.of("Flutter (Dart)", "SQLite (sqflite)", "HTTP API", "JSON serialization", "Responsive UI", "Theming & Accessibility"),
    "images/6.jpg",
    null,
    "mobile"
));

projects.add(new Project(
    "Atlas Guardians – Crisis Awareness App",
    "Mobile app providing real-time natural disaster awareness and evacuation guidance.",
    "Guides users safely in high-risk zones with minimal stress and clear instructions.",
    List.of(
        "Risk zone visualization",
        "Automatic evacuation guidance",
        "Real-time location tracking"
    ),
    List.of("Flutter / Mobile", "Maps & Geolocation", "UX design under stress conditions"),
    "images/4.jpg",
    null,
    "mobile"
));

projects.add(new Project(
    "Snapshot Tool – System Process Capture and Restoration",
    "A cross-platform desktop application that captures detailed snapshots of running processes, memory usage, and network connections. It utilizes the psutil library to record system state and provides a PyQt5 interface for managing and restoring workspace environments from JSON-based archives.",
    "Enables users to preserve and rapidly reconstruct complex application environments, significantly reducing manual setup time after system restarts.",
    List.of(
        "Implemented system-wide process tracking and resource monitoring using the psutil library",
        "Developed a cross-platform GUI with PyQt5 featuring dynamic directory management for Windows and Unix environments",
        "Engineered an automated state-capture system with user-configurable intervals using QTimer",        "Integrated JSON-based data persistence for portable and human-readable system state storage"
    ),
    List.of("Python", "PyQt5", "psutil", "JSON"),
    "images/3.jpg",
    "https://github.com/mohamedefk02/Snapshot_Recover",
    "desktop"
));


projects.add(new Project(
    "WeBall Match Organizer Android App",
    "A native Android app for creating basketball matches, joining games, chatting with participants, and managing player profiles. It uses Firebase services for authentication, data storage, messaging, and media upload.",
    "Helps players organize local matches and coordinate participation from one mobile app instead of using separate messaging and booking tools.",
    List.of(
        "Email/password registration and login with Firebase Authentication",
        "Match creation with date, time, location, skill level, and match type",
        "Join-request flow for players who want to enter a match",
        "Group chat tied to each match",
        "Profile editing with avatar upload to Firebase Storage",
        "Google Maps integration via Android manifest API key setup"
    ),
    List.of(
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
        "Google Maps SDK for Android"
    ),
    "images/2.jpg",
    "https://github.com/mohamedefk02/weball-v2",
    "mobile"
));
projects.add(new Project(
    "WeBall Sports Booking Android App",
    "A native Android app for discovering sports events and reserving courts for basketball, football, and volleyball. It includes Firebase-backed authentication, booking persistence, tournament detail screens, and a user profile area.",
    "Helps players find sports activities and reserve facilities from one mobile app instead of handling bookings manually.",
    List.of(
        "Firebase email/password registration and login flow",
        "Bottom-navigation app structure with Home, Events, and Profile screens",
        "Court booking flows for basketball, football, and volleyball using CalendarView",
        "Reservation data stored in Firebase Realtime Database",
        "Profile screen with uploaded avatar support via Firebase Storage and Glide",
        "Tournament detail pages for 3x3 basketball, 5x5 basketball, football, and volleyball"
    ),
    List.of(
        "Java",
        "Android SDK / AppCompat",
        "Material Components",
        "Firebase Authentication",
        "Firebase Realtime Database",
        "Firebase Storage",
        "Glide"
    ),
    "images/1.jpg",
    "https://github.com/mohamedefk02/weball-v1",
    "mobile"
));


    // Programming Languages (use devicon classes)
    skillCategories.add(new SkillCategory("Programming Languages", List.of(
            new TechItem("Java", "devicon-java-plain colored"),
            new TechItem("Dart", "devicon-dart-plain colored"),
            new TechItem("C", "devicon-c-plain colored"),
            new TechItem("C++", "devicon-cplusplus-plain colored"),
            new TechItem("C#", "devicon-csharp-plain colored"),
            new TechItem("JavaScript", "devicon-javascript-plain colored"),
            new TechItem("Python", "devicon-python-plain colored"),
            new TechItem("PHP", "devicon-php-plain colored")
    )));

    // Frameworks & Libraries (devicon)
    skillCategories.add(new SkillCategory("Frameworks & Libraries", List.of(
            new TechItem("Flutter", "devicon-flutter-plain colored"),
            new TechItem("Spring", "devicon-spring-plain colored"),
            new TechItem("React", "devicon-react-original colored"),
            new TechItem("Laravel", "devicon-laravel-plain colored"),
            new TechItem("Bootstrap", "devicon-bootstrap-plain colored"),
            new TechItem("ASP.NET Core", "devicon-dotnetcore-plain colored"),
            new TechItem("Entity Framework Core", "devicon-visualstudio-plain colored")
            
    )));

    // Databases
    skillCategories.add(new SkillCategory("Databases", List.of(
            new TechItem("Oracle Database", "devicon-oracle-original colored"),
            new TechItem("MySQL", "devicon-mysql-plain colored"),
            new TechItem("Firebase", "devicon-firebase-plain colored"),
            new TechItem("SQLite", "devicon-sqlite-plain colored"),
            new TechItem("Microsoft SQL Server", "devicon-microsoftsqlserver-plain colored")
    )));

    // Tools & Technologies
    skillCategories.add(new SkillCategory("Tools & Technologies", List.of(
            new TechItem("Git", "devicon-git-plain colored"),
            new TechItem("Docker", "devicon-docker-plain colored"),
            new TechItem("Linux", "devicon-linux-plain colored"),
            new TechItem("VS Code", "devicon-vscode-plain colored"),
            new TechItem("Postman", "devicon-postman-plain colored"),
            new TechItem("Android Studio", "devicon-android-plain colored")
    )));
    
}


    public List<SkillCategory> getSkillCategories() {
        return skillCategories;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void addSkill(String categoryName, String skillName, String iconPath) {
        for (SkillCategory c: skillCategories) {
            if (c.getName().equalsIgnoreCase(categoryName)) {
                c.getItems().add(new TechItem(skillName, iconPath != null && !iconPath.isBlank() ? iconPath : defaultIconFor(skillName)));
                return;
            }
        }
        // create new category
        List<TechItem> items = new ArrayList<>();
        items.add(new TechItem(skillName, iconPath != null && !iconPath.isBlank() ? iconPath : defaultIconFor(skillName)));
        skillCategories.add(new SkillCategory(categoryName, items));
    }

    public boolean removeSkill(String categoryName, String skillName) {
        for (SkillCategory c: skillCategories) {
            if (c.getName().equalsIgnoreCase(categoryName)) {
                return c.getItems().removeIf(s -> s.getName().equalsIgnoreCase(skillName));
            }
        }
        return false;
    }

    private String defaultIconFor(String name) {
        String key = name.toLowerCase(Locale.ROOT).replace("+", "p").replace("#", "sharp").replaceAll("\\s+", "");
        return "icons/" + key + ".png";
    }

    public void addProject(Project project) {
        projects.add(project);
    }

    public boolean removeProjectByTitle(String title) {
        Iterator<Project> it = projects.iterator();
        while (it.hasNext()) {
            if (it.next().getTitle().equalsIgnoreCase(title)) {
                it.remove();
                return true;
            }
        }
        return false;
    }

    public Optional<Project> getProjectBySlug(String slug) {
        return projects.stream()
                .filter(project -> project.getSlug().equals(slug))
                .findFirst();
    }
}
