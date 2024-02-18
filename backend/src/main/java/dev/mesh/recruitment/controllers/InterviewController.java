package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.*;
import dev.mesh.recruitment.servises.InterviewNotFoundException;
import dev.mesh.recruitment.servises.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/interviews")
public class InterviewController {
    private final InterviewService interviewService;

    @Autowired
    public InterviewController(InterviewService interviewService) {
        this.interviewService = interviewService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Interview> getInterviewById(@PathVariable String id) {
        Interview interview = interviewService.getInterviewById(id);
        return ResponseEntity.ok(interview);
    }

    @PostMapping("/addinterview")
    public ResponseEntity<Interview> createInterview(@RequestBody Interview interview) {
        Interview createInterview = interviewService.createInterview(interview);
        return ResponseEntity.status(HttpStatus.CREATED).body(createInterview);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Interview> updateInterview(@PathVariable String id, @RequestBody Interview interview) {
        Interview updatedInterview = interviewService.updateInterview(id, interview);
        return ResponseEntity.ok(updatedInterview);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteInterview(@PathVariable String id) {
        interviewService.deleteInterview(id);
        return ResponseEntity.ok().build();
    }




    @GetMapping("/interviewAll")
    public ResponseEntity<List<Interview>> getAllInterviews() {
        List<Interview> interviews = interviewService.getAllInterviews();
        return ResponseEntity.ok(interviews);
    }


}
