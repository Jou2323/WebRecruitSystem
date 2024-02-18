package dev.mesh.recruitment.repositorys;

import dev.mesh.recruitment.Candidate;
import dev.mesh.recruitment.Vacancy;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CandidateRepository extends MongoRepository<Candidate, String> {
    List<Candidate> findAllById(List<Candidate> candidateIds);
    Optional<Candidate> findCandidateByVacancyId(Vacancy vacancyId);

    List<Candidate> findByStatus(String pending);

    List<Candidate> findByVacancyId(Vacancy vacancyId);


}

