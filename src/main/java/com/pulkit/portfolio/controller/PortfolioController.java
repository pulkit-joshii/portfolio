package com.pulkit.portfolio.controller;

import com.pulkit.portfolio.model.Experience;
import com.pulkit.portfolio.model.Profile;
import com.pulkit.portfolio.model.Project;
import com.pulkit.portfolio.model.Education;
import com.pulkit.portfolio.model.Skill;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*") // Allows your React frontend on GitHub Pages to access this
public class PortfolioController {

    // --- ENDPOINTS ---

    @GetMapping("/profile")
    public Profile getProfile() {
        return new Profile(
            "Pulkit Joshi",
            "Senior Applications Engineer",
            "Full-stack engineer specializing in AI Agents, Oracle Fusion Cloud, and Scalable Backend Systems.",
            "Bengaluru, KA, India",
            "pulkitthegameioshi@gmail.com",
            "+91 7895506505"
        );
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return List.of(
            new Experience(
                "Oracle India Private Limited",
                "Senior Applications Engineer - Oracle Fusion Cloud",
                "Aug 2023 - Present",
                List.of(
                    "Leading the development of AI agents for Oracle HCM Fusion, integrating agentic AI capabilities for 6,000+ enterprise clients.",
                    "Spearheaded backend development for Talent Touchpoints & Goals using JAVA/ADF, enhancing core HR functionalities.",
                    "Designed UI for Touchpoints Dashboard using Oracle Visual Builder, improving interaction efficiency by 30%.",
                    "Automated manifest merge process via Shell/Python scripts, reducing process time by 66%.",
                    "Optimized REST API performance via session-level caching (JMeter), slashing page load times by 42%."
                )
            ),
            new Experience(
                "Infrrd",
                "Software Developer",
                "July 2019 - April 2020",
                List.of(
                    "Engineered REST APIs in Python to automate OCR text retrieval, processing 10,000+ documents monthly.",
                    "Built dynamic processing service (Tesseract/Google/Azure OCR), increasing data extraction accuracy by 15%.",
                    "Implemented preprocessing scripts with OpenCV, reducing character error rate by 25%."
                )
            )
        );
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return List.of(
            new Project(
                "Visual Question Answering on Chart Images (Research)",
                "Research Publication - IEEE Open Journal",
                "Aug 2021 - June 2023",
                List.of(
                    "Formulated extraction pipeline using Mask-RCNN, achieving 95.04% bar detection accuracy.",
                    "Enhanced Google TAPAS model to TAPAS++, boosting QA accuracy from 55.1% to 67.2%.",
                    "Published in IEEE Open Journal of the Computer Society (Vol 4, Oct 2023)."
                ),
                "https://ieeexplore.ieee.org/..."
            ),
            new Project(
                "Cryptographic Hash Using SHA-256",
                "Security / Systems Programming",
                "Jan 2022",
                List.of(
                    "Implemented SHA-256 algorithm from scratch in C++ without external libraries.",
                    "Engineered solution to process text files of any size into fixed 256-bit hash values.",
                    "Validated against standard test vectors to guarantee collision-resistant hashing."
                ),
                "https://github.com/..."
            )
        );
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return List.of(
            new Skill("Languages", List.of("Java", "C++", "Python", "JavaScript", "HTML/CSS")),
            new Skill("Core", List.of("Algorithms", "Data Structures", "Object-Oriented Design")),
            new Skill("Cloud & DevOps", List.of("AWS (EC2, S3, DynamoDB, IAM)", "Docker", "CI/CD")),
            new Skill("Tools & Frameworks", List.of("Spring Boot", "MySQL", "Elasticsearch", "Apache JMeter", "Oracle Visual Builder"))
        );
    }

}