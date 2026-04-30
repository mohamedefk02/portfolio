package com.myportfolio.portfolio.model;

public class TechItem {
    private String name;
    private String icon; // relative path like "icons/python.png" or "images/1.jpg"

    public TechItem() {}

    public TechItem(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
