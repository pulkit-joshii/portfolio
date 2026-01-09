package com.pulkit.portfolio.model;

import java.util.List;

public class Project {
    private String title;
    private String type;
    private String duration;
    private List<String> details;
    private String link;

    public Project(String title, String type, String duration, List<String> details, String link) {
        this.title = title;
        this.type = type;
        this.duration = duration;
        this.details = details;
        this.link = link;
    }

    public String getTitle() { return title; }
    public String getType() { return type; }
    public String getDuration() { return duration; }
    public List<String> getDetails() { return details; }
    public String getLink() { return link; }
}
