package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.models.Candidate;
import dev.mesh.recruitment.models.Vacancy;
import dev.mesh.recruitment.servises.CandidateService;
import dev.mesh.recruitment.servises.VacancyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vacancies")
@CrossOrigin("http://localhost:3000")
public class VacancyController {

    @Autowired
    private VacancyService vacancyService;
    @Autowired
    private CandidateService candidateService;

    @GetMapping("/{id}")
    public ResponseEntity<Vacancy> getVacancyById(@PathVariable String id) {
        Vacancy vacancy = vacancyService.getVacancyById(id);
        return ResponseEntity.ok(vacancy);
    }

    @GetMapping("/search")
    public ResponseEntity<Vacancy> getVacancyByTitle(@PathVariable String title) {
        Vacancy vacancy = vacancyService.getVacancyByTitle(title);
        return ResponseEntity.ok(vacancy);
    }

    @PostMapping("/addvacancy")
    public ResponseEntity<Vacancy> createVacancy(@RequestBody Vacancy vacancy) {
        Vacancy createdVacancy = vacancyService.createVacancy(vacancy);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVacancy);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vacancy> updateVacancy(@PathVariable String id, @RequestBody Vacancy vacancyDetails) {
        Vacancy updatedVacancy = vacancyService.updateVacancy(id, vacancyDetails);
        return ResponseEntity.ok(updatedVacancy);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVacancy(@PathVariable String id) {
        vacancyService.deleteVacancy(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/vacancys")
    public ResponseEntity<List<Vacancy>> getAllVacancies() {
        List<Vacancy> vacancies = vacancyService.getAllVacancies();
        return ResponseEntity.ok(vacancies);
    }

    @GetMapping("/vacancies/{id}/candidates")
    public List<Candidate> getCandidatesByVacancyId(@PathVariable String id) {
        Vacancy vacancy = vacancyService.getVacancyById(id);
        return candidateService.getCandidatesByVacancy(vacancy);
    }



}
