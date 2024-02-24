package dev.mesh.recruitment.repositorys;

import dev.mesh.recruitment.models.Interview;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterviewRepository extends MongoRepository<Interview, String> {

    
}