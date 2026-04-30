package com.myportfolio.portfolio.model;

import java.util.List;
import java.util.Locale;

public class Project {
    private String title;
    private String description;      // Short recruiter-friendly overview
    private String impact;           // What value it provides / real-world impact
    private List<String> highlights; // Key features / bullet points
    private List<String> techStack;  // Skills / technologies used
    private String image;            // URL or path to project image
    private String githubUrl;        // Optional GitHub repository link
    private String type;             // mobile, web, desktop, etc.

    public Project() {}

    public Project(String title, String description, String impact, List<String> highlights, List<String> techStack, String image) {
        this(title, description, impact, highlights, techStack, image, null, "other");
    }

    public Project(String title, String description, String impact, List<String> highlights, List<String> techStack, String image, String githubUrl) {
        this(title, description, impact, highlights, techStack, image, githubUrl, "other");
    }

    public Project(String title, String description, String impact, List<String> highlights, List<String> techStack, String image, String githubUrl, String type) {
        this.title = title;
        this.description = description;
        this.impact = impact;
        this.highlights = highlights;
        this.techStack = techStack;
        this.image = image;
        this.githubUrl = githubUrl;
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImpact() {
        return impact;
    }

    public void setImpact(String impact) {
        this.impact = impact;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }

    public List<String> getTechStack() {
        return techStack;
    }

    public void setTechStack(List<String> techStack) {
        this.techStack = techStack;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSlug() {
        if (title == null) {
            return "";
        }

        String normalized = title.toLowerCase(Locale.ROOT)
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("^-+|-+$", "");
        return normalized;
    }
}
