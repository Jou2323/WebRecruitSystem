package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.Candidate;
import dev.mesh.recruitment.Report;
import dev.mesh.recruitment.servises.ReportNotFoundException;
import dev.mesh.recruitment.servises.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;


    @GetMapping
    public List<Report> getAllReports() {
        return reportService.getAllReports();
    }

    // Create a new report
    @PostMapping
    public Report createReport(@RequestBody Report report) {
        return reportService.createReport(report);
    }

    // Get a report by ID
    @GetMapping("/{id}")
    public Report getReportById(@PathVariable("id") String id) throws ReportNotFoundException {
        return reportService.getReportById(id);
    }

    // Update a report by ID
    @PutMapping("/{id}")
    public Report updateReport(@PathVariable("id") String id, @RequestBody Report reportDetails) throws ReportNotFoundException {
        return reportService.updateReport(id, reportDetails);
    }

    // Delete a report by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReport(@PathVariable("id") String id) throws ReportNotFoundException {
        reportService.deleteReport(id);
        return ResponseEntity.ok().build();
    }

}

