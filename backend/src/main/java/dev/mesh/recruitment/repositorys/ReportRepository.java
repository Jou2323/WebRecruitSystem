package dev.mesh.recruitment.repositorys;

import dev.mesh.recruitment.Report;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends MongoRepository<Report, String> {
    Report save(Report report);

}
