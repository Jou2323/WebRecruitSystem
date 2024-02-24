package dev.mesh.recruitment.servises;

import dev.mesh.recruitment.repositorys.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import dev.mesh.recruitment.models.Message;

import java.util.List;

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
