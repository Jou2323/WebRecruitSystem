package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.models.Employee;
import dev.mesh.recruitment.models.Position;
import dev.mesh.recruitment.repositorys.EmployeeRepository;
import dev.mesh.recruitment.repositorys.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class PositionService {

    private final PositionRepository positionRepository;

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    public PositionService(PositionRepository positionRepository, EmployeeRepository employeeRepository) {
        this.positionRepository = positionRepository;
        this.employeeRepository = employeeRepository;
    }
    public Position createPosition(Position position) {
        position.setNick("1");
        position.setDomainemployeer("@gmail");
        return mongoTemplate.insert(position);
    }

    public List<Position> getAllPositions() {
        return positionRepository.findAll();
    }

    public Position getPositionById(String id) {
        Optional<Position> position = positionRepository.findById(id);
        if (position.isEmpty()) {
            throw new PositionNotFoundException("Position with id " + id + " does not exist");
        }
        return position.get();
    }

    public void deletePosition(String id) {
        if (!positionRepository.existsById(id)) {
            throw new PositionNotFoundException("Position with id " + id + " does not exist");
        }
        positionRepository.deleteById(id);
    }

    public Position updatePosition(String id, Position positionDetails) {
        Position position = getPositionById(id);

        position.setTitle(positionDetails.getTitle());
        position.setStart_work(positionDetails.getStart_work());
        position.setEnd_work(positionDetails.getEnd_work());
        position.setRequirements(positionDetails.getRequirements());
        position.setStatus(positionDetails.getStatus());
        position.setDomainemployeer(positionDetails.getDomainemployeer());
        position.setNick(positionDetails.getNick());

        return positionRepository.save(position);

    }


    public Position assignEmployeeToPosition(String positionId,String employeeId) throws PositionNotFoundException {
        // Get the position from the database
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new EntityNotFoundException("Employee not found"));

        Position position = positionRepository.findById(positionId)
                .orElseThrow(() -> new EntityNotFoundException("Position not found"));

        employee.setPositionest(position);
        employeeRepository.save(employee);

        position.getEmployees().add(employee);
        return positionRepository.save(position);
    }

}

