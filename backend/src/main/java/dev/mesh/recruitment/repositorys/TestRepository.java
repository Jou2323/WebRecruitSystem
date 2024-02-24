package dev.mesh.recruitment.repositorys;


import dev.mesh.recruitment.models.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends MongoRepository<Test, String> {
}