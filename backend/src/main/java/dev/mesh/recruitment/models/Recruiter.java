package dev.mesh.recruitment.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

public class Recruiter {
    @Id
    private String  id;
    private String firstname;
    private String secondname;
    private String email;
    private String domain;
    private String password;
    @DBRef
    private List<Vacancy> vacancyId;
    @DBRef
    private List<Position> positionId;

    // constructors, getters, and setters

    public Recruiter(String  id, String firstname,String secondname, String email,String domain, String password) {
        this.id = id;
        this.firstname = firstname;
        this.secondname = secondname;
        this.domain= domain;
        this.email = email;
        this.password = password;
    }

    public String getDomain() {
        return domain;
    }

    public List<Vacancy> getVacancyId() {
        return vacancyId;
    }

    public void setVacancyId(List<Vacancy> vacancyId) {
        this.vacancyId = vacancyId;
    }

    public List<Position> getPositionId() {
        return positionId;
    }

    public void setPositionId(List<Position> positionId) {
        this.positionId = positionId;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String  getId() {
        return id;
    }

    public void setId(String  id) {
        this.id = id;
    }


    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSecondname() {
        return secondname;
    }

    public void setSecondname(String secondname) {
        this.secondname = secondname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
