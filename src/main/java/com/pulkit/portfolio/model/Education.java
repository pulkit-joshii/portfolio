package com.pulkit.portfolio.model;

public class Education {
    private String institution;
    private String degree;
    private String duration;
    private String score;

    public Education(String institution, String degree, String duration, String score) {
        this.institution = institution;
        this.degree = degree;
        this.duration = duration;
        this.score = score;
    }

    public String getInstitution() { return institution; }
    public String getDegree() { return degree; }
    public String getDuration() { return duration; }
    public String getScore() { return score; }
}
