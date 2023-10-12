package com.allsaints.carbon;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("accounts")
public class Account {
    @Id
    public String id;

    public String email;
    public String password;
    public String firstName;
    public String lastName;

    //Leaving empty constructor here but not sure if it should ever be used
    public Account() {}

    public Account(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
