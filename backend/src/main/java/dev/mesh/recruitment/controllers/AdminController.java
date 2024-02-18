package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.*;
import dev.mesh.recruitment.servises.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final VacancyService vacancyService;
    private final CandidateService candidateService;
    private final InterviewService interviewService;
    private final ReportService reportService;
    private final PositionService positionService;

    public AdminController(VacancyService vacancyService,
                           CandidateService candidateService, InterviewService interviewService,
                           ReportService reportService, PositionService positionService) {

        this.vacancyService = vacancyService;
        this.candidateService = candidateService;
        this.interviewService = interviewService;
        this.reportService = reportService;
        this.positionService = positionService;
    }


    @PostMapping("/reports")
    public ResponseEntity<Report> createReport(@RequestBody Report report) {
        Report newReport = reportService.createReport(report);
        return new ResponseEntity<>(newReport, HttpStatus.CREATED);
    }

    @PutMapping("/reports/{id}")
    public ResponseEntity<Report> updateReport(@PathVariable String id, @RequestBody Report report) {
        Report updatedReport = reportService.updateReport(id, report);
        return new ResponseEntity<>(updatedReport, HttpStatus.OK);
    }

    @DeleteMapping("/reports/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable String id) {
        reportService.deleteReport(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/candidates")
    public ResponseEntity<Candidate> madeApplication(@RequestBody Candidate candidate) throws IOException {
        Candidate newCandidate = candidateService.madeApplication(candidate);
        return new ResponseEntity<>(newCandidate, HttpStatus.CREATED);
    }

    @PutMapping("/candidates/{id}")
    public ResponseEntity<Candidate> updateCandidate(@PathVariable String id, @RequestBody Candidate candidate) {
        Candidate updatedCandidate = candidateService.updateCandidate(id, candidate);
        return new ResponseEntity<>(updatedCandidate, HttpStatus.OK);
    }

    @DeleteMapping("/candidates/{id}")
    public ResponseEntity<Void> deleteCandidate(@PathVariable String id) {
        candidateService.deleteCandidate(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/positions")
    public ResponseEntity<Position> createCandidate(@RequestBody Position position) {
        Position newPosition = positionService.createPosition(position);
        return new ResponseEntity<>(newPosition, HttpStatus.CREATED);
    }

    @PutMapping("/positions/{id}")
    public ResponseEntity<Position> updateCandidate(@PathVariable String id, @RequestBody Position position) {
        Position updatedPosition = positionService.updatePosition(id, position);
        return new ResponseEntity<>(updatedPosition, HttpStatus.OK);
    }

    @DeleteMapping("/positions/{id}")
    public ResponseEntity<Void> deletePosition(@PathVariable String id) {
        positionService.deletePosition(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/interviews")
    public ResponseEntity<Interview> createInterview(@RequestBody Interview interview) {
        Interview newInterview = interviewService.createInterview(interview);
        return new ResponseEntity<>(newInterview, HttpStatus.CREATED);
    }

    @PutMapping("/interviews/{id}")
    public ResponseEntity<Interview> updateInterview(@PathVariable String id, @RequestBody Interview interview) {
        Interview updatedInterview = interviewService.updateInterview(id, interview);
        return new ResponseEntity<>(updatedInterview, HttpStatus.OK);
    }

    @DeleteMapping("/interviews/{id}")
    public ResponseEntity<Void> deleteInterview(@PathVariable String id) {
        interviewService.deleteInterview(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/vacancies/addvacancy")
    public ResponseEntity<Vacancy> createVacancy(@RequestBody Vacancy vacancy) {
        Vacancy newVacancy = vacancyService.createVacancy(vacancy);
        return new ResponseEntity<>(newVacancy, HttpStatus.CREATED);
    }

    @PutMapping("/vacancies/{id}")
    public ResponseEntity<Vacancy> updateVacancy(@PathVariable String id, @RequestBody Vacancy vacancy) {
        Vacancy updatedVacancy = vacancyService.updateVacancy(id, vacancy);
        return new ResponseEntity<>(updatedVacancy, HttpStatus.OK);
    }

    @DeleteMapping("/vacancies/{id}")
    public ResponseEntity<Void> deleteVacancy(@PathVariable String id) {
        vacancyService.deleteVacancy(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
