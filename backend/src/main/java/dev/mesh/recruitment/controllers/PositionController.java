package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.Candidate;
import dev.mesh.recruitment.Employee;
import dev.mesh.recruitment.Position;
import dev.mesh.recruitment.Test;
import dev.mesh.recruitment.servises.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/positions")
public class PositionController {

    @Autowired
    private PositionService positionService;

    @Autowired
    private CandidateService candidateService;


    private EmployeeService employeeService;

    @Autowired
    public PositionController(PositionService positionService) {
        this.positionService = positionService;
    }


    @GetMapping("/allposition")
    public ResponseEntity<List<Position>> getAllPositions() {
        List<Position> positions = positionService.getAllPositions();
        return ResponseEntity.ok().body(positions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Position> getPositionById(@PathVariable String id) throws PositionNotFoundException {
        Position position = positionService.getPositionById(id);
        return ResponseEntity.ok().body(position);
    }

    @PostMapping("/create_position")
    public ResponseEntity<Position> createPosition(@RequestBody Position position) {
        Position newPosition = positionService.createPosition(position);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPosition);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Position> updatePosition(@PathVariable String id, @RequestBody Position positionDetails) throws PositionNotFoundException {
        Position updatedPosition = positionService.updatePosition(id, positionDetails);
        return ResponseEntity.ok(updatedPosition);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePosition(@PathVariable String id) throws PositionNotFoundException {
        positionService.deletePosition(id);
        return ResponseEntity.ok().body("Position with id: " + id + " was deleted successfully");
    }


    @PutMapping("/{positionId}/employees/{employeeId}")
    public ResponseEntity<Position> assignEmployeeToPosition(@PathVariable String positionId, @PathVariable String employeeId) {
        Position updatedPosition = positionService.assignEmployeeToPosition(positionId, employeeId);
        return ResponseEntity.ok(updatedPosition);
    }

}
