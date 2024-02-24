package dev.mesh.recruitment.mappers;

import dev.mesh.recruitment.dtos.SignUpDto;
import dev.mesh.recruitment.dtos.UserDto;
import dev.mesh.recruitment.entites.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {


    UserDto toUserDto(User user);
    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
