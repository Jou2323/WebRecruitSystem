package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.Recruiter;
import dev.mesh.recruitment.servises.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/recruiters")
public class RecruiterController {
    @Autowired
    private final RecruiterService recruiterService;

    @Autowired
    public RecruiterController(RecruiterService recruiterService) {
        this.recruiterService = recruiterService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Recruiter recruiter) {
        try {
             Recruiter registered = recruiterService.register(recruiter);
            return ResponseEntity.ok("Recruiter registered successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/all_recruiter")
    public ResponseEntity<List<Recruiter>> getAllRecruiters() {
        List<Recruiter> recruiters = recruiterService.getAllRecruiters();
        return ResponseEntity.ok(recruiters);
    }
    @PostMapping("/addrecruiter")
    public ResponseEntity<Recruiter> createRecruiter(@RequestBody Recruiter recruiter) {
        Recruiter recruiter1 = recruiterService.createRecruiter(recruiter);
        return ResponseEntity.status(HttpStatus.CREATED).body(recruiter1);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        boolean isValid = recruiterService.login(email, password);
        if (isValid) {
            return ResponseEntity.ok("Recruiter login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @PutMapping("/edit")
    public ResponseEntity<?> updateRecruiterProfile(@RequestBody Recruiter updatedRecruiter) {
        try {
            // Update recruiter profile in the database
            Recruiter savedRecruiter = recruiterService.editRecruiter(updatedRecruiter);
            return new ResponseEntity<>(savedRecruiter, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
