package com.example.demo.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.User;
import com.example.demo.model.UserRequest;
import com.example.demo.service.AuthService;

import java.awt.PageAttributes.MediaType;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping(value = "/register")
    public ResponseEntity<String> register(@ModelAttribute UserRequest userRequest) {
        return ResponseEntity.ok(authService.register(userRequest));
    }


    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        Map<String, String> response = authService.login(user.getUsername(), user.getPassword());
        return ResponseEntity.ok(response);
    }

}
