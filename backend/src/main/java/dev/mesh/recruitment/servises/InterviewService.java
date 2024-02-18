package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.Interview;
import dev.mesh.recruitment.Test;
import dev.mesh.recruitment.Vacancy;
import dev.mesh.recruitment.repositorys.CandidateRepository;
import dev.mesh.recruitment.repositorys.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
public class InterviewService {

    @Autowired
    private InterviewRepository interviewRepository;

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private ReportService reportService;
    public List<Interview> getAllInterviews() {
        return interviewRepository.findAll();
    }
    @Autowired
    private MongoTemplate mongoTemplate;
    public Interview getInterviewById(String id) {
        return interviewRepository.findById(id)
                .orElseThrow(() -> new VacancyNotFoundException(id));
    }
    public Interview createInterview(Interview interview) {
        return mongoTemplate.insert(interview);
    }

    public Interview updateInterview(String id, Interview interviewDetail) {
        Interview interview = getInterviewById(id);

        interview.setTitle(interviewDetail.getTitle());
        interview.setEmail(interviewDetail.getEmail());
        interview.setRecruiterId(interviewDetail.getRecruiterId());
        interview.setCandidateId(interviewDetail.getCandidateId());
        interview.setStatus(interviewDetail.getStatus());
        interview.setEventLink(interviewDetail.getEventLink());
        interview.setId(interviewDetail.getId());
        interview.setDateAndTime(interviewDetail.getDateAndTime());
        return interviewRepository.save(interview);

    }

    public void deleteInterview(String id) {
        Optional<Interview> interview = interviewRepository.findById(id);

        if (interview.isPresent()) {
            interviewRepository.deleteById(id);
        } else {
            throw new InterviewNotFoundException("Interview not found with id " + id);
        }
    }




}
