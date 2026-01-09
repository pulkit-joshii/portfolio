package com.pulkit.portfolio.model;

import java.util.List;

public class Experience {
    private String company;
    private String role;
    private String duration;
    private List<String> achievements;

    public Experience(String company, String role, String duration, List<String> achievements) {
        this.company = company;
        this.role = role;
        this.duration = duration;
        this.achievements = achievements;
    }

    public String getCompany() { return company; }
    public String getRole() { return role; }
    public String getDuration() { return duration; }
    public List<String> getAchievements() { return achievements; }
}
