package dev.mesh.recruitment;

import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.persistence.*;


public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String title;
    private String email;
    private String description;
    @DBRef
    private String link;
    @DBRef
    private Test testId;
    @DBRef
    private String candidateId;
    @DBRef
    private Recruiter recruiterId;

    public String getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(String candidateId) {
        this.candidateId = candidateId;
    }

    public Recruiter getRecruiterId() {
        return recruiterId;
    }

    public void setRecruiterId(Recruiter recruiterId) {
        this.recruiterId = recruiterId;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Test getTestId() {
        return testId;
    }

    public void setTestId(Test testId) {
        this.testId = testId;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
