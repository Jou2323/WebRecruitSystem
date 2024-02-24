package dev.mesh.recruitment.repositorys;

import dev.mesh.recruitment.models.Vacancy;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VacancyRepository extends MongoRepository<Vacancy, String> {


    Optional<Vacancy> findById(Vacancy vacancyId);
    Optional<Vacancy> findByTitle(String title);
}
