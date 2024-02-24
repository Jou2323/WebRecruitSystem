package dev.mesh.recruitment.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.time.LocalDate;

public class Employee {
    @Id
    private String id;
    private String name;
    private String email;
    private String domain_gmail;

    private String phone;
    @DBRef
    private Position positionest;
    private String position;
    private String nickname;

    private String status;
    private LocalDate StartDate;

    public Employee(){

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Position getPositionest() {
        return positionest;
    }

    public void setPositionest(Position positionest) {
        this.positionest = positionest;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDomain_gmail() {
        return domain_gmail;
    }

    public void setDomain_gmail(String domain_gmail) {
        this.domain_gmail = domain_gmail;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public LocalDate getStartDate() {
        return StartDate;
    }

    public void setStartDate(LocalDate startDate) {
        StartDate = startDate;
    }
}
