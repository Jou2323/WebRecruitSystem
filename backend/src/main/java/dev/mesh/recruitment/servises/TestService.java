package dev.mesh.recruitment.servises;


import dev.mesh.recruitment.models.Test;
import dev.mesh.recruitment.repositorys.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TestService {

    @Autowired
    TestRepository testRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Test createTest(Test test) {
        return mongoTemplate.insert(test);
    }

    public List<Test> getAllTests() {
        return testRepository.findAll();
    }

    public Test getTestById(String id) {
        Optional<Test> report = testRepository.findById(id);
        if (!report.isPresent()) {
            throw new ReportNotFoundException("Test not found with id: " + id);
        }
        return report.get();
    }

    public Test updateTest(String id, Test testDetails) {
        Test test = getTestById(id);

        test.setTitle(testDetails.getTitle());
        test.setLink(testDetails.getLink());
        test.setCount_test(testDetails.getCount_test());

        return testRepository.save(test);

    }

    public void deleteTest(String id) {
        Test test = getTestById(id);
        testRepository.delete(test);

    }
}
