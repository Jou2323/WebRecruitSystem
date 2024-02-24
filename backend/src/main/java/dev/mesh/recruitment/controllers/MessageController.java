package dev.mesh.recruitment.controllers;

import dev.mesh.recruitment.models.Message;
import dev.mesh.recruitment.servises.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")

public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/send-email")
    public ResponseEntity<Message> sendEmail(@RequestBody Message message) {
        Message messageCreate = messageService.addMessage(message);
        return ResponseEntity.status(HttpStatus.CREATED).body(messageCreate);
    }
    @GetMapping("/messages")
    public ResponseEntity<List<Message>> getAllMessage() {
        List<Message> messages = messageService.getAllMessage();
        return ResponseEntity.ok(messages);
    }
}


