package dev.mesh.recruitment;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Admin {
    @Id
    private String id;
    private String username;
    private String password;


    // getters and setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
