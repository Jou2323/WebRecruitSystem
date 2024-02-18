package dev.mesh.recruitment.repositorys;


import dev.mesh.recruitment.Position;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionRepository extends MongoRepository<Position, String> {
}
