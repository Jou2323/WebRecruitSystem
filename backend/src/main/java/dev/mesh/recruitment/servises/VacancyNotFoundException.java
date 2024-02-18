package dev.mesh.recruitment.servises;

public class VacancyNotFoundException extends RuntimeException {
    public VacancyNotFoundException(String id) {
        super("Vacancy not found with ID: " + id);
    }

}

