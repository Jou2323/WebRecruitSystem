package dev.mesh.recruitment.controllers;
import org.springframework.mail.SimpleMailMessage;
import dev.mesh.recruitment.models.Candidate;
import dev.mesh.recruitment.models.Vacancy;
import dev.mesh.recruitment.repositorys.CandidateRepository;
import dev.mesh.recruitment.repositorys.VacancyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/apply")
public class JobApplicationController {

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private VacancyRepository vacancyRepository;

    @PostMapping("/{vacancyId}")
    public ResponseEntity<String> applyForJob(@PathVariable Vacancy vacancyId, @RequestBody Candidate candidate) {

        // Retrieve the vacancy
        Optional<Vacancy> vacancy = vacancyRepository.findById(vacancyId.getId());
        if (!vacancy.isPresent()) {
            return new ResponseEntity<>("Vacancy not found", HttpStatus.NOT_FOUND);
        }

        // Validate the candidate data
        if (!validateCandidateData(candidate)) {
            return new ResponseEntity<>("Invalid candidate data", HttpStatus.BAD_REQUEST);
        }

        // Save the candidate to the repository
        candidate.setStatus("Pending");
        candidateRepository.save(candidate);

        // Send confirmation email to the candidate
        sendConfirmationEmail(candidate);

        return new ResponseEntity<>("Job application submitted successfully", HttpStatus.OK);
    }

    private boolean validateCandidateData(Candidate candidate) {
        if (candidate.getName() == null || candidate.getName().isEmpty()) {
            return false;
        }
        if (candidate.getEmail() == null || candidate.getEmail().isEmpty()) {
            return false;
        }
        if (candidate.getPhoneNumber() == null || candidate.getPhoneNumber().isEmpty()) {
            return false;
        }
        if (candidate.getMotivationLetter() == null || candidate.getMotivationLetter().isEmpty()) {
            return false;
        }
        return true;
    }


    private void sendConfirmationEmail(Candidate candidate) {
        // create mail sender
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com"); // set your SMTP server host
        mailSender.setPort(587); // set your SMTP server port
        mailSender.setUsername("your_username@gmail.com"); // set your email username
        mailSender.setPassword("your_password"); // set your email password

        // create email message
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("your_username@gmail.com"); // set the email sender
        message.setTo(candidate.getEmail()); // set the email recipient
        message.setSubject("Confirmation Email"); // set the email subject
        message.setText("Dear " + candidate.getName() + ",\n\n"
                + "Thank you for applying for the " + candidate.getPosition()
                + " position. Your application has been received and is currently being reviewed. "
                + "We will contact you if your qualifications meet our requirements.\n\n"
                + "Best regards,\n"
                + "Recruitment Team");

        // send email message
        mailSender.send(message);
    }

}
