package dev.mesh.recruitment.dtos;// ProfileEditDto.java


import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProfileEditDTO {
    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    private String login;

    private String password;

}
