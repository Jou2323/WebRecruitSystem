package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.models.Candidate;
import dev.mesh.recruitment.servises.CandidateService;
import dev.mesh.recruitment.servises.ReportService;
import dev.mesh.recruitment.servises.VacancyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public ResponseEntity<Candidate> madeApplication(
            @RequestParam("resumeFile") MultipartFile resumeFile,
            @ModelAttribute Candidate candidate) {
        Candidate madeApplication = candidateService.madeApplication(candidate, resumeFile);
        return ResponseEntity.created(URI.create("/candidates/" + madeApplication.getId())).body(madeApplication);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Candidate> updateCandidate(
            @PathVariable String id,
            @RequestParam(name = "resumeFile", required = false) MultipartFile resumeFile,
            @ModelAttribute Candidate candidateDetails) {
        Candidate updatedCandidate;

        if (resumeFile != null) {
            updatedCandidate = candidateService.updateCandidateWithFile(id, candidateDetails, resumeFile);
        } else {
            updatedCandidate = candidateService.updateCandidate(id, candidateDetails);
        }

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
    @GetMapping("/downloadFile/{id}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String id) {
        byte[] fileContent = candidateService.getResumeFile(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF); // Adjust the content type based on your file type

        return new ResponseEntity<>(fileContent, headers, HttpStatus.OK);
    }




}
