package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtUtil;
import com.example.demo.model.DonationRequest;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtService ;
    @GetMapping("/user/profile")
    public ResponseEntity<Map<String,String>> getProfileInfo(@RequestHeader("Authorization") String token){
    	String username = jwtService.extractUsername(token);
    	 User user = userRepository.findByUsername(username)
                 .orElseThrow(() -> new RuntimeException("User not found"));
    	 return ResponseEntity.ok(Map.of(
    	            "name", user.getUsername(),
    	            "email", user.getEmail(),
    	            "role", user.getRole(),
    	            "profilePhoto", user.getProfilePhoto() != null ? user.getProfilePhoto() : "https://via.placeholder.com/150"
    	    ));
    }
    @PostMapping("/donation/req")
    public ResponseEntity<Map<String,String>> addRequest(@RequestHeader("Authorization") String token,@RequestBody DonationRequest request){
        
    	DonationRequest savedReq = userService.addRequest(request,token);
    	return ResponseEntity.ok(Map.of(
    			"category",savedReq.getCategory(),
    			"quantity",savedReq.getQuantity()
    			));
    }
   
    @GetMapping("/donation/req")
    public ResponseEntity<List<DonationRequest>> addRequest(@RequestHeader("Authorization") String token){
    	
    	List<DonationRequest> savedReqs = userService.getRequest(token);
    	return ResponseEntity.ok(savedReqs);
    }
    @GetMapping("/institutes")
    public ResponseEntity<List<Map<String,String>>> fetchInstitutes(){
    	List<Map<String,String>> institutes = userService.findAllInstitutes();
    	return ResponseEntity.ok(institutes);
    }
    @DeleteMapping("/donation/req/{id}")
    public ResponseEntity<List<DonationRequest>> deleteRequest(@RequestHeader("Authorization") String token,@PathVariable("id") int id){
    	List<DonationRequest> deletedRequest = userService.deleteRequest(token,id);
    	return null;
    }
    
}
