package dev.mesh.recruitment.servises;

public class InterviewNotFoundException extends RuntimeException {
    public InterviewNotFoundException(String id) {
        super("Interview not found with ID: " + id);
    }
}
