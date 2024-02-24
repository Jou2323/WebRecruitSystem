package dev.mesh.recruitment.entites;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;



@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document(collection = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "firstname", nullable = false)

    private String firstName;

    @Column(name = "lastName", nullable = false)

    private String lastName;

    @Column(nullable = false)

    private String login;

    @Column(nullable = false)

    private String password;

    @Column(name = "profileIcon", nullable = true)
    private byte[] profileIcon;

    @Column(name = "iconMimeType", nullable = true)
    private String iconMimeType;
}
