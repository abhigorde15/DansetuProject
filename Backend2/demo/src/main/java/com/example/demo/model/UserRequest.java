package com.example.demo.model;

import org.springframework.web.multipart.MultipartFile;

public class UserRequest {
    private String username;
    private String email;
    private String password;
    private MultipartFile profileImage; // For profile image upload
    private String role; // Added role field

    // Getters and Setters
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public MultipartFile getProfileImage() { return profileImage; }
    public void setProfileImage(MultipartFile profileImage) { this.profileImage = profileImage; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
}
