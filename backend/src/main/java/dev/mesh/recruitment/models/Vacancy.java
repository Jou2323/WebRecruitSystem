package dev.mesh.recruitment.models;

import dev.mesh.recruitment.entites.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

public class Vacancy {
    @Id
    private String id;
    private String title;
    private String description;
    private String location;
    private String cost;
    private String work_table;
    private String year_exp;
    private String requirements;
    private String responsibilities;
    private String status;
    @DBRef
    private List<Candidate> candidatesIds;
    @DBRef
    private User recruiterIds;
    public Vacancy() {
        // Default constructor
    }
    public Vacancy(String title, String description, String location, String cost, String work_table, String year_exp,  String requirements, String responsibilities, String status) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.cost = cost;
        this.work_table = work_table;
        this.year_exp = year_exp;
        this.requirements = requirements;
        this.responsibilities = responsibilities;
        this.status = status;
    }

    public void setRecruiterIds(User recruiterIds) {
        this.recruiterIds = recruiterIds;
    }
    public String getCost() {
        return cost;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public void setCost(String cost) {
        this.cost = cost;
    }
    public String getYear_exp() {
        return year_exp;
    }
    public void setYear_exp(String year_exp) {
        this.year_exp = year_exp;
    }
    public String getWork_table() {
        return work_table;
    }
    public void setWork_table(String work_table) {
        this.work_table = work_table;
    }

    // Getters and setters for all attributes
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
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getRequirements() {
        return requirements;
    }
    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }
    public String getResponsibilities() {
        return responsibilities;
    }
    public void setResponsibilities(String responsibilities) {
        this.responsibilities = responsibilities;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public List<Candidate> getCandidateIds() {
        return candidatesIds;
    }
    public List<Candidate> getCandidatesIds() {
        return candidatesIds;
    }
    public User getRecruiterIds() {
        return recruiterIds;
    }
    public void setCandidatesIds(List<Candidate> candidatesIds) {
        this.candidatesIds = candidatesIds;
    }
}
