package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.Candidate;
import dev.mesh.recruitment.Recruiter;
import dev.mesh.recruitment.Test;
import dev.mesh.recruitment.Vacancy;
import dev.mesh.recruitment.repositorys.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Optional;
import java.util.Properties;

@Service
public class RecruiterService {
    private final RecruiterRepository recruiterRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    public RecruiterService(RecruiterRepository recruiterRepository) {
        this.recruiterRepository = recruiterRepository;
    }

    public Recruiter register(Recruiter recruiter) {
        Recruiter existingRecruiter = recruiterRepository.findByEmail(recruiter.getEmail()).orElseThrow(() -> new IllegalArgumentException("Recruiter not found"));;
        if (existingRecruiter != null) {
            throw new IllegalArgumentException("Recruiter with this email already exists");
        }
        return recruiterRepository.save(recruiter);
    }

    public boolean login(String email, String password) {
        // Find the user by email
        Recruiter recruiter = recruiterRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("Recruiter not found"));;

        // Check if the user exists and the password matches
        return recruiter != null && recruiter.getPassword().equals(password);
    }
    public Recruiter createRecruiter(Recruiter recruiter) {
        return mongoTemplate.insert(recruiter);
    }
    public List<Recruiter> getAllRecruiters() {
        return recruiterRepository.findAll();
    }
    public Recruiter editRecruiter(Recruiter recruiter) {
        // Find the user by email (assuming email is unique)
        Recruiter updateRecruiter = recruiterRepository.findByEmail(recruiter.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Recruiter not found"));

        // Update the user information
        updateRecruiter.setFirstname(recruiter.getFirstname());
        updateRecruiter.setSecondname(recruiter.getSecondname());
        updateRecruiter.setDomain(recruiter.getDomain());
        updateRecruiter.setEmail(recruiter.getEmail());

        // Save the updated user
        return recruiterRepository.save(updateRecruiter);
    }


}
