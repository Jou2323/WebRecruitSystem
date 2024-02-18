package dev.mesh.recruitment;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import javax.swing.text.html.Option;
import java.util.Date;

public class Interview {

    @Id
    private String  id;
    private String title;
    private Date dateAndTime;

    private String email;
    private String status;

    private String candidateId;

    private String recruiterId;

    private String eventLink;

    public Interview(String id, String title, Date dateAndTime, String email, String status, String candidateId, String recruiterId, String eventLink) {
        this.id = id;
        this.title = title;
        this.dateAndTime = dateAndTime;
        this.email = email;
        this.status = status;
        this.candidateId = candidateId;
        this.recruiterId = recruiterId;
        this.eventLink = eventLink;
    }


// getters and setters


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDateAndTime() {
        return dateAndTime;
    }

    public void setDateAndTime(Date dateAndTime) {
        this.dateAndTime = dateAndTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String  getId() {
        return id;
    }

    public void setId(String  id) {
        this.id = id;
    }

    public String getEventLink() {
        return eventLink;
    }

    public void setEventLink(String eventLink) {
        this.eventLink = eventLink;
    }


    public String getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(String candidateId) {
        this.candidateId = candidateId;
    }

    public String getRecruiterId() {
        return recruiterId;
    }

    public void setRecruiterId(String recruiterId) {
        this.recruiterId = recruiterId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
