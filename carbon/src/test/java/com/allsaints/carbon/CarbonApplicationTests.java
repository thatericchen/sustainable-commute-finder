package com.allsaints.carbon;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CarbonApplicationTests {

    @Autowired
    private AccountRepository repository;

	@Test
	void testFindByEmail() {
		// Generate a random email
		String email = UUID.randomUUID().toString() + "@example.com";

		// Create a new account
		Account account = new Account();
		account.email = email;
		account.password = "password";
		account.firstName = "John";
		account.lastName = "Doe";
		repository.save(account);

		// Test the findByEmail function
		Account foundAccount = repository.findByEmail(email);
		assertNotNull(foundAccount);
		assertEquals("John", foundAccount.firstName);
		assertEquals("Doe", foundAccount.lastName);
	}
}