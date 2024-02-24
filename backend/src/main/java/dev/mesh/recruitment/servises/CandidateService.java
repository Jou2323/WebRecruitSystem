package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.models.Candidate;
import dev.mesh.recruitment.models.Vacancy;
import dev.mesh.recruitment.repositorys.CandidateRepository;
import dev.mesh.recruitment.repositorys.VacancyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    private VacancyRepository vacancyRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    public Candidate getCandidateById(String id) {
        Optional<Candidate> candidate = candidateRepository.findById(id);
        if (candidate.isPresent()) {
            return candidate.get();
        } else {
            throw new CandidateNotFoundException("Candidate not found with id " + id);
        }
    }

    public Candidate madeApplication(Candidate candidate) {
        candidate.setStatus("Opened");
        candidate.setLastUpdated(Date.from(Instant.now()));
        return mongoTemplate.insert(candidate);
    }

    public Candidate updateCandidate(String id, Candidate candidateDetails) {
        Optional<Candidate> candidate = candidateRepository.findById(id);
        if (candidate.isPresent()) {
            candidate.get().setName(candidateDetails.getName());
            candidate.get().setEmail(candidateDetails.getEmail());
            candidate.get().setPhoneNumber(candidateDetails.getPhoneNumber());
            candidate.get().setFile(candidateDetails.getFile());
            candidate.get().setMotivationLetter(candidateDetails.getMotivationLetter());
            candidate.get().setStatus(candidateDetails.getStatus());
            candidate.get().setPosition(candidateDetails.getPosition());

            return candidateRepository.save(candidate.get());
        } else {
            throw new CandidateNotFoundException("Candidate not found with id " + id);
        }
    }

    public void deleteCandidate(String id) {
        Optional<Candidate> candidate = candidateRepository.findById(id);
        if (candidate.isPresent()) {
            candidateRepository.delete(candidate.get());
        } else {
            throw new CandidateNotFoundException("Candidate not found with id " + id);
        }
    }


    public List<Candidate> getCandidatesByVacancy(Vacancy vacancyId) {
        // Find the vacancy by ID
        Optional<Vacancy> vacancy = vacancyRepository.findById(vacancyId.getId());
        if (vacancy.isPresent()) {
            // Get the list of candidate IDs for the vacancy
            List<Candidate> candidateIds = vacancy.get().getCandidateIds();
            // Find the candidates by their IDs
            List<Candidate> candidates = candidateRepository.findAllById(candidateIds);
            return candidates;
        } else {
            throw new VacancyNotFoundException("Vacancy not found with ID: " + vacancyId);
        }
    }






}
