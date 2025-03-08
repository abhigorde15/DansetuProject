package com.example.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.config.JwtUtil;
import com.example.demo.model.User;
import com.example.demo.model.UserRequest;
import com.example.demo.repository.UserRepository;

import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {
	@Autowired
	private  CloudinaryService cloudinaryService;
	@Autowired
    private UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public String register(UserRequest userRequest) {
        User user = new User();
        user.setUsername(userRequest.getUsername());
        user.setEmail(userRequest.getEmail());
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        // Assign role from request
        user.setRole(userRequest.getRole());

        // Handle profile image upload
        if (userRequest.getProfileImage() != null && !userRequest.getProfileImage().isEmpty()) {
            try {
                String imageUrl = cloudinaryService.uploadImage(userRequest.getProfileImage());
                user.setProfilePhoto(imageUrl);
            } catch (Exception e) {
                return "Failed to upload profile image!";
            }
        }

        userRepository.save(user);
        return "User registered successfully!";
    }


    public Map<String, String> login(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getUsername()); // Generate JWT token

        // Return both token and role
        return Map.of("token", token, "role", user.getRole());
    }

}

