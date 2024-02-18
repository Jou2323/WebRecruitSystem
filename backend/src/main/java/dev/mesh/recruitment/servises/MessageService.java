package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.Candidate;
import dev.mesh.recruitment.Test;
import dev.mesh.recruitment.Vacancy;
import dev.mesh.recruitment.repositorys.CandidateRepository;
import dev.mesh.recruitment.repositorys.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import dev.mesh.recruitment.Message;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Properties;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private MongoTemplate mongoTemplate;


    public Message addMessage(Message message) {
        return mongoTemplate.insert(message);

    }
    public List<Message> getAllMessage() {
        return messageRepository.findAll();
    }
}
