package dev.mesh.recruitment.repositorys;

import dev.mesh.recruitment.Vacancy;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;


public interface VacancyRepository extends MongoRepository<Vacancy, String> {


    Optional<Vacancy> findById(Vacancy vacancyId);
    Optional<Vacancy> findByTitle(String title);
}
