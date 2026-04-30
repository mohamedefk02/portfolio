package com.myportfolio.portfolio.controller;

import com.myportfolio.portfolio.model.Project;
import com.myportfolio.portfolio.service.PortfolioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Controller
public class HomeController {

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    private final PortfolioService portfolioService;
    private final JavaMailSender mailSender;

    @Value("${contact.to:melfankari@gmail.com}")
    private String contactRecipient;

    @Autowired
    public HomeController(PortfolioService portfolioService, Optional<JavaMailSender> mailSender) {
        this.portfolioService = portfolioService;
        this.mailSender = mailSender.orElse(null);
    }

    @GetMapping("/")
    public String home(Model model, @RequestParam(value = "sent", required = false) String sent) {
        model.addAttribute("skillCategories", portfolioService.getSkillCategories());
        model.addAttribute("projects", portfolioService.getProjects());
        if (sent != null) model.addAttribute("contactStatus", "Message sent — thank you!");
        logger.info("Home page requested — projects count={}", portfolioService.getProjects().size());
        return "index";
    }

    @GetMapping("/projects/{slug}")
    public String projectDetails(@PathVariable String slug, Model model) {
        Project project = portfolioService.getProjectBySlug(slug)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND));
        model.addAttribute("project", project);
        model.addAttribute("pageTitle", project.getTitle() + " | Mohamed El Fankari");
        return "project-detail";
    }

    @PostMapping("/api/skills")
    @ResponseBody
    public ResponseEntity<?> addSkill(@RequestParam String category,
                                      @RequestParam String skill,
                                      @RequestParam(required = false) String icon) {
        portfolioService.addSkill(category, skill, icon);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/api/skills")
    @ResponseBody
    public ResponseEntity<?> removeSkill(@RequestParam String category, @RequestParam String skill) {
        boolean removed = portfolioService.removeSkill(category, skill);
        return removed ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }

    @PostMapping("/api/contact")
    @ResponseBody
    public ResponseEntity<?> submitContact(@RequestParam String name, @RequestParam String email, @RequestParam String message) {
        logger.info("Contact submission received via API — name={}, email={}, message={}", name, email, message);
        if (mailSender != null) {
            try {
                SimpleMailMessage msg = new SimpleMailMessage();
                msg.setTo(contactRecipient);
                msg.setSubject("Portfolio contact from " + name);
                msg.setText("From: " + name + " <" + email + ">\n\n" + message);
                mailSender.send(msg);
                return ResponseEntity.ok().build();
            } catch (Exception ex) {
                logger.warn("Failed to send contact email: {}", ex.getMessage());
                return ResponseEntity.status(500).body("Failed to send message");
            }
        }
        return ResponseEntity.ok().build();
    }

    @PostMapping("/contact")
    public String handleContactForm(@RequestParam String name, @RequestParam String email, @RequestParam String message) {
        logger.info("Contact submission via form — name={}, email={}, message={}", name, email, message);
        if (mailSender != null) {
            try {
                SimpleMailMessage msg = new SimpleMailMessage();
                msg.setTo(contactRecipient);
                msg.setSubject("Portfolio contact from " + name);
                msg.setText("From: " + name + " <" + email + ">\n\n" + message);
                mailSender.send(msg);
            } catch (Exception ex) {
                logger.warn("Failed to send contact email: {}", ex.getMessage());
                // continue; we still redirect with sent flag so user sees message
            }
        }
        return "redirect:/?sent=true#contact";
    }

    @PostMapping("/addProject")
public ResponseEntity<?> addProject(
        @RequestParam String title,
        @RequestParam String description,
        @RequestParam String image,
        @RequestParam(required = false) String githubUrl) {

    Project p = new Project(
            title,
            description,
            "",                      // impact (default empty)
            List.of(),               // highlights (default empty)
            List.of(),               // techStack (default empty)
            image,
            githubUrl
    );

    portfolioService.addProject(p);
    return ResponseEntity.ok().build();
}

    @DeleteMapping("/api/projects")
    @ResponseBody
    public ResponseEntity<?> removeProject(@RequestParam String title) {
        boolean removed = portfolioService.removeProjectByTitle(title);
        return removed ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }
}
