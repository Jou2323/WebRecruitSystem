package dev.mesh.recruitment.repositorys;


import dev.mesh.recruitment.models.Message;
import jakarta.mail.MessagingException;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.io.UnsupportedEncodingException;

@Repository
public interface MessageRepository extends MongoRepository<Message, String> {
    default void sendMail(Message saveMessage) throws MessagingException, UnsupportedEncodingException, jakarta.mail.MessagingException {

    }
}
