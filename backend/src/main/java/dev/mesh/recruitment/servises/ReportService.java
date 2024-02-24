package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.models.Report;
import dev.mesh.recruitment.repositorys.ReportRepository;
import dev.mesh.recruitment.repositorys.CandidateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportService {


    @Autowired
    private CandidateRepository candidateRepository;


    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private PositionService positionService;



    public ReportService(ReportRepository reportRepository, CandidateRepository candidateRepository) {
        this.reportRepository = reportRepository;
        this.candidateRepository = candidateRepository;
    }
    public Report createReport(Report report) {
        return reportRepository.save(report);
    }

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    public Report getReportById(String id) {
        Optional<Report> report = reportRepository.findById(id);
        if (!report.isPresent()) {
            throw new ReportNotFoundException("Report not found with id: " + id);
        }
        return report.get();
    }

    public Report updateReport(String id, Report reportDetails) {
        Report report = getReportById(id);

        report.setTitle(reportDetails.getTitle());
        report.setFeedback(reportDetails.getFeedback());
        report.setEmail(reportDetails.getEmail());

        return reportRepository.save(report);

    }

    public void deleteReport(String id) {
        Report report = getReportById(id);
        reportRepository.delete(report);

    }




}

