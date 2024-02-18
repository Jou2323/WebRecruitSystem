package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.Candidate;
import dev.mesh.recruitment.repositorys.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class WaitingCandidatesService {

    private CandidateRepository candidateRepository;

    @Autowired
    public WaitingCandidatesService(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    @Scheduled(fixedDelay = 24 * 60 * 60 * 1000) // Check once a day
    public void checkWaitingCandidates() {
        List<Candidate> candidates = candidateRepository.findByStatus("Pending");
        for (Candidate candidate : candidates) {
            Date lastUpdated = candidate.getLastUpdated();
            Date currentDate = new Date();
            long timeDifference = currentDate.getTime() - lastUpdated.getTime();
            long daysDifference = TimeUnit.DAYS.convert(timeDifference, TimeUnit.MILLISECONDS);
            if (daysDifference >= 7) { // If it's been 7 days or more, update status to "Waiting"
                candidate.setStatus("Waiting");
                candidateRepository.save(candidate);
            }
        }
    }
}
