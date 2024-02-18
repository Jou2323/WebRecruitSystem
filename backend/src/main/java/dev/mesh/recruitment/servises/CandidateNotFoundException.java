package dev.mesh.recruitment.servises;

 public class CandidateNotFoundException extends RuntimeException {
        public CandidateNotFoundException(String id) {
            super("Candidate not found with ID: " + id);
        }
    }
