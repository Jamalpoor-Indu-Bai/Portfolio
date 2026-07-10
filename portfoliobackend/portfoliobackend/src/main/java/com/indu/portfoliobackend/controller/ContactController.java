package com.indu.portfoliobackend.controller;

import com.indu.portfoliobackend.dto.ContactRequest;
import com.indu.portfoliobackend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "https://localhost:5173")
public class ContactController {
    @Autowired
    private EmailService emailService;
    public ResponseEntity<String> sendMessage(@RequestBody ContactRequest request){
        emailService.sendEmail(request);
        return ResponseEntity.ok("Message sent Successfully");
    }
}
