package dev.mesh.recruitment.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private String id;
    private String firstName;
    private String lastName;
    private String login;
    private String token;
    private String password;
    // Додане поле для зберігання Base64 строки
    private byte[] profileIcon;
    private String iconMimeType;
}
