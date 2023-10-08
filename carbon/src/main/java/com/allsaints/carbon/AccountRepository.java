package com.allsaints.carbon;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface AccountRepository extends MongoRepository<Account, String> {
    @Query ("{'email': ?0}")
    Account findByEmail(String email);
    public long count();
}
