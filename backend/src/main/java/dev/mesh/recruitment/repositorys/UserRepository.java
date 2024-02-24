package dev.mesh.recruitment.repositorys;

import dev.mesh.recruitment.entites.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

// Update UserRepository to extend UserCustomRepository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByLogin(String login);

}

