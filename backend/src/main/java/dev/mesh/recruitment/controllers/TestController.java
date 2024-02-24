package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.models.Test;
import dev.mesh.recruitment.servises.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test")
@CrossOrigin("http://localhost:3000")
public class TestController {

    @Autowired
    private TestService testService;


    @GetMapping("/{id}")
    public ResponseEntity<Test> getTestById(@PathVariable String id) {
        Test test = testService.getTestById(id);
        return ResponseEntity.ok(test);
    }

    @PostMapping("/addtest")
    public ResponseEntity<Test> createTest(@RequestBody Test test) {
        Test createdTest = testService.createTest(test);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Test> updateTest(@PathVariable String id, @RequestBody Test testDetail) {
        Test updatedTest = testService.updateTest(id, testDetail);
        return ResponseEntity.ok(updatedTest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVacancy(@PathVariable String id) {
        testService.deleteTest(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/tests")
    public ResponseEntity<List<Test>> getAllTests() {
        List<Test> tests = testService.getAllTests();
        return ResponseEntity.ok(tests);
    }


}
