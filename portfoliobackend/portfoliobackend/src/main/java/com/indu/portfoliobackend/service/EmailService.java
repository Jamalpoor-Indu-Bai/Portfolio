package com.indu.portfoliobackend.service;

import com.indu.portfoliobackend.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;
    public void sendEmail(ContactRequest request){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setTo("indujamalpur16@gmail.com");
        message.setSubject("New Portfolio Contact Form"+request.getName());
        message.setText(
                "Name: " + request.getName()
                        + "\n\nEmail: " + request.getEmail()
                        + "\n\nMessage:\n\n"
                        + request.getMessage()
        );
        mailSender.send(message);
    }
}
