package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.dtos.CredentialsDto;
import dev.mesh.recruitment.dtos.ProfileEditDTO;
import dev.mesh.recruitment.dtos.SignUpDto;
import dev.mesh.recruitment.dtos.UserDto;
import dev.mesh.recruitment.entites.User;
import dev.mesh.recruitment.exceptions.AppException;
import dev.mesh.recruitment.mappers.UserMapper;
import dev.mesh.recruitment.repositorys.UserRepository;
import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.CharBuffer;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserMapper userMapper;

    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByLogin(credentialsDto.login())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()), user.getPassword())) {
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto) {
        Optional<User> optionalUser = userRepository.findByLogin(userDto.login());

        if (optionalUser.isPresent()) {
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signUpToUser(userDto);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.password())));

        User savedUser = userRepository.save(user);

        return userMapper.toUserDto(savedUser);
    }

    public UserDto findByLogin(String login) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }
    // Add this method to UserService

    public UserDto editProfile(String login, ProfileEditDTO profileEditDTO) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        // Оновити дані профілю
        user.setFirstName(profileEditDTO.getFirstName());
        user.setLastName(profileEditDTO.getLastName());
        user.setLogin(profileEditDTO.getLogin());
        user.setPassword(passwordEncoder.encode(profileEditDTO.getPassword()));

        User savedUser = userRepository.save(user);

        return userMapper.toUserDto(savedUser);
    }

    public UserDto uploadProfileIcon(String login, MultipartFile iconFile) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Користувача не знайдено"));

        try {
            user.setProfileIcon(iconFile.getBytes());
            user.setIconMimeType(iconFile.getContentType());
            userRepository.save(user);
            return userMapper.toUserDto(user);
        } catch (IOException e) {
            throw new RuntimeException("Помилка при зчитуванні іконки");
        } catch (java.io.IOException e) {
            throw new RuntimeException(e);
        }
    }

}





