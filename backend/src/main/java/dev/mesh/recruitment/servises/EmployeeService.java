package dev.mesh.recruitment.servises;


import dev.mesh.recruitment.Employee;
import dev.mesh.recruitment.Position;
import dev.mesh.recruitment.repositorys.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(String id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new VacancyNotFoundException(id));
    }

    public Employee createEmployee(Employee employee) {

        return mongoTemplate.insert(employee);
    }
    public Employee updateEmployee(String id, Employee employeeDetails) {
        Employee employee = getEmployeeById(id);


        employee.setEmail(employeeDetails.getEmail());
        employee.setDomain_gmail(employeeDetails.getDomain_gmail());
        employee.setPhone(employeeDetails.getPhone());
        employee.setPosition(employeeDetails.getPosition());
        employee.setNickname(employeeDetails.getNickname());
        employee.setStartDate(employeeDetails.getStartDate());
        employee.setStatus(employeeDetails.getStatus());
        employee.setName(employeeDetails.getName());
        return employeeRepository.save(employee);

    }
    public void deleteEmployee(String id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if (employee.isPresent()) {
            employeeRepository.delete(employee.get());
        } else {
            throw new EmployeeNotFoundException("Employee not found with id " + id);
        }
    }

}
