package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.Candidate;
import dev.mesh.recruitment.servises.*;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/candidates")
public class CandidateController {
    @Autowired
    private ReportService reportService;


    @Autowired
    private CandidateService candidateService;

    @Autowired
    private VacancyService vacancyService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Candidate> getCandidateById(@PathVariable String id) {
        Candidate candidate = candidateService.getCandidateById(id);
        return ResponseEntity.ok().body(candidate);
    }

    @PostMapping("/appresume")
    public ResponseEntity<Candidate> madeApplication(@RequestBody Candidate candidate) {
        Candidate madeApplication = candidateService.madeApplication(candidate);
        return ResponseEntity.created(URI.create("/candidates/" + madeApplication.getId())).body(madeApplication);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Candidate> updateCandidate(@PathVariable String id, @RequestBody Candidate candidateDetails) {
        Candidate updatedCandidate = candidateService.updateCandidate(id, candidateDetails);
        return ResponseEntity.ok().body(updatedCandidate);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCandidate(@PathVariable String id) {
        candidateService.deleteCandidate(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/candidatesall")
    public ResponseEntity<List<Candidate>> getAllCandidates() {
        List<Candidate> candidates = candidateService.getAllCandidates();
        return ResponseEntity.ok(candidates);
    }




}
