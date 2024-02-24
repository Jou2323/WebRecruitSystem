package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.config.UserAuthenticationProvider;
import dev.mesh.recruitment.dtos.CredentialsDto;
import dev.mesh.recruitment.dtos.ProfileEditDTO;
import dev.mesh.recruitment.dtos.SignUpDto;
import dev.mesh.recruitment.dtos.UserDto;
import dev.mesh.recruitment.servises.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserService userService;
    private final UserAuthenticationProvider userAuthenticationProvider;

    @PostMapping("login")
    public ResponseEntity<UserDto> login(@RequestBody @Valid CredentialsDto credentialsDto) {
        UserDto userDto = userService.login(credentialsDto);
        userDto.setToken(userAuthenticationProvider.createToken(userDto));
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<UserDto> register(@RequestBody @Valid SignUpDto user) {
        UserDto createdUser = userService.register(user);
        createdUser.setToken(userAuthenticationProvider.createToken(createdUser));
        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(createdUser);
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDto> getProfile(HttpServletRequest request) {
        String login = userAuthenticationProvider.getLoginFromToken(request.getHeader(HttpHeaders.AUTHORIZATION));
        UserDto userDto = userService.findByLogin(login);
        return ResponseEntity.ok(userDto);
    }
    @PutMapping("/edit")
    public ResponseEntity<UserDto> editProfile(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader,
            @RequestBody @Valid ProfileEditDTO profileEditDTO) {
        // Отримати логін користувача з токена
        String login = userAuthenticationProvider.getLoginFromToken(authorizationHeader);

        // Редагувати профіль користувача
        UserDto updatedUser = userService.editProfile(login, profileEditDTO);

        return ResponseEntity.ok(updatedUser);
    }
    @PostMapping("/uploadIcon")
    public ResponseEntity<UserDto> uploadIcon(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader,
            @RequestParam("file") MultipartFile iconFile) {
        String login = userAuthenticationProvider.getLoginFromToken(authorizationHeader);
        UserDto updatedUser = userService.uploadProfileIcon(login, iconFile);
        return ResponseEntity.ok(updatedUser);
    }

}


