package com.pulkit.portfolio.model;

import java.util.List;

public class Skill {
    private String category;
    private List<String> items;

    public Skill(String category, List<String> items) {
        this.category = category;
        this.items = items;
    }

    public String getCategory() { return category; }
    public List<String> getItems() { return items; }
}
