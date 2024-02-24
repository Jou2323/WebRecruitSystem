package dev.mesh.recruitment.models;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Position {
    @Id
    private String id;
    private String title;
    private String start_work;
    private String end_work;
    private String requirements;
    private String status;
    private String domainemployeer;
    private String nick;
    private List<Employee> employees;
    public Position() {
        // Default constructor
    }
    private Position(String id, String title, String start_work, String end_work, String requirements, String status, String domainemployeer,  String nick) {
        this.id = id;
        this.title = title;
        this.start_work = start_work;
        this.end_work = end_work;
        this.requirements = requirements;
        this.status = status;
        this.domainemployeer = domainemployeer;
        this.nick = nick;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    public String getDomainemployeer() {
        return domainemployeer;
    }

    public void setDomainemployeer(String domainemployeer) {
        this.domainemployeer = domainemployeer;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStart_work() {
        return start_work;
    }

    public void setStart_work(String start_work) {
        this.start_work = start_work;
    }

    public String getEnd_work() {
        return end_work;
    }

    public void setEnd_work(String end_work) {
        this.end_work = end_work;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
