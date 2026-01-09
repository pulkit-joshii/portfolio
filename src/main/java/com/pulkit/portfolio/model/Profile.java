package com.pulkit.portfolio.model;

public class Profile {
    private String name;
    private String title;
    private String bio;
    private String location;
    private String email;
    private String phone;

    public Profile(String name, String title, String bio, String location, String email, String phone) {
        this.name = name;
        this.title = title;
        this.bio = bio;
        this.location = location;
        this.email = email;
        this.phone = phone;
    }

    public String getName() { return name; }
    public String getTitle() { return title; }
    public String getBio() { return bio; }
    public String getLocation() { return location; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
}
