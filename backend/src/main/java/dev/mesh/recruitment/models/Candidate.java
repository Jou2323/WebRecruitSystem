package dev.mesh.recruitment.models;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Candidate {
    @Id
    private String  id;

    private String name;
    private String email;
    private String phoneNumber;

    private Integer yearsOfExperience;
    private String skills;
    private String file;
    private String motivationLetter;
    private String status;
    private String position;
    private Date lastUpdated;
    private Vacancy vacancyId;
    public Candidate() {

    }
    public Candidate(String name, String email, String phoneNumber, String file, String motivationLetter, String status,String position) {

        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.file = file;
        this.motivationLetter = motivationLetter;
        this.status = status;
        this.position = position;
    }

    public String getPosition() {
        return position;
    }



    public void setPosition(String position) {
        this.position = position;
    }


    public String  getId() {
        return id;
    }

    public void setId(String  id) {
        this.id = id;
    }

    public Vacancy getVacancyId() {
        return vacancyId;
    }

    public void setVacancyId(Vacancy vacancyId) {
        this.vacancyId = vacancyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    public String getMotivationLetter() {
        return motivationLetter;
    }

    public void setMotivationLetter(String motivationLetter) {
        this.motivationLetter = motivationLetter;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }




    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public Integer getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(Integer yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }
}
