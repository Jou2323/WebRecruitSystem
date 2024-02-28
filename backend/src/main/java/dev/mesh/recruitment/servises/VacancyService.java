package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.entites.User;
import dev.mesh.recruitment.models.Vacancy;
import dev.mesh.recruitment.repositorys.VacancyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VacancyService {

    @Autowired
    private VacancyRepository vacancyRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Vacancy> getAllVacancies() {
        return vacancyRepository.findAll();
    }

    public Vacancy getVacancyById(String id) {
        return vacancyRepository.findById(id)
                .orElseThrow(() -> new VacancyNotFoundException(id));
    }
    public Vacancy getVacancyByTitle(String title) {
        return vacancyRepository.findByTitle(title)
                .orElseThrow(() -> new VacancyNotFoundException(title));
    }
    public Vacancy createVacancy(Vacancy vacancy) {
        return mongoTemplate.insert(vacancy);
    }
    private List<User> retrieveRecruiterIds() {
        return new ArrayList<>();
    }

    public Vacancy updateVacancy(String id, Vacancy vacancyDetails) {
        Vacancy vacancy = getVacancyById(id);

        vacancy.setTitle(vacancyDetails.getTitle());
        vacancy.setDescription(vacancyDetails.getDescription());
        vacancy.setLocation(vacancyDetails.getLocation());
        vacancy.setCost(vacancyDetails.getCost());
        vacancy.setYear_exp(vacancyDetails.getYear_exp());
        vacancy.setWork_table(vacancyDetails.getWork_table());
        vacancy.setRequirements(vacancyDetails.getRequirements());
        vacancy.setResponsibilities(vacancyDetails.getResponsibilities());
        vacancy.setStatus(vacancyDetails.getStatus());

        return vacancyRepository.save(vacancy);

    }

    public void deleteVacancy(String id) {
        Optional<Vacancy> vacancy = vacancyRepository.findById(id);
        if (vacancy.isPresent()) {
            vacancyRepository.delete(vacancy.get());
        } else {
            throw new CandidateNotFoundException("Candidate not found with id " + id);
        }
    }
}
