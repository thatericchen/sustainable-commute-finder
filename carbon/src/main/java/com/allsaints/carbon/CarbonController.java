package com.allsaints.carbon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge = 3600)
@RestController
@EnableMongoRepositories
public class CarbonController {

	@Autowired
	private AccountRepository repository;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Account account) {
        if (repository.findByEmail(account.email) != null) {
            return ResponseEntity.badRequest().body("User already exists");
        }
        repository.save(account);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Account loginRequest) {
        Account account = repository.findByEmail(loginRequest.email);
        if (account == null || !account.password.equals(loginRequest.password)) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }

        return ResponseEntity.ok("Login successful");
    }
}
