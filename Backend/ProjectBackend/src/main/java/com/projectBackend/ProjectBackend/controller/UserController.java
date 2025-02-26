package com.projectBackend.ProjectBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectBackend.ProjectBackend.entity.User;
import com.projectBackend.ProjectBackend.request.LoginRequest;
import com.projectBackend.ProjectBackend.service.UserService;

@RestController
public class UserController {
	@Autowired
	UserService service;
   @PostMapping("/adduser")
   public User addUser(@RequestBody User user) {
	   return service.addUser(user);
   }
   @PostMapping("/loginuser")
   public boolean loginUser(@RequestBody LoginRequest loginRequest) {
	   return service.loginUser(loginRequest);
   }
}
