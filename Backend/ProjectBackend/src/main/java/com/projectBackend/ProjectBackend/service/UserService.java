package com.projectBackend.ProjectBackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectBackend.ProjectBackend.entity.User;
import com.projectBackend.ProjectBackend.repository.UserRepository;
import com.projectBackend.ProjectBackend.request.LoginRequest;
@Service
public class UserService {
	@Autowired
	UserRepository repository;
     public User addUser(User user) {
    	return repository.save(user);
     }
     public boolean loginUser(LoginRequest loginRequest) {
    	 Optional<User> user = repository.findById(loginRequest.getUsername());
         if(user == null) {
        	 return false;
         }
         User user1 = user.get();
         if(!user1.getPassword().equals(loginRequest.getPassword())) {
        	 return false;
         }
         return true;
     }
}
