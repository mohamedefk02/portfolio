package com.myportfolio.portfolio.model;

import java.util.List;

public class SkillCategory {
    private String name;
    private List<TechItem> items;

    public SkillCategory() {}

    public SkillCategory(String name, List<TechItem> items) {
        this.name = name;
        this.items = items;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TechItem> getItems() {
        return items;
    }

    public void setItems(List<TechItem> items) {
        this.items = items;
    }
}
