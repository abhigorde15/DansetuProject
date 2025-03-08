package com.example.demo.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.config.JwtUtil;
import com.example.demo.model.DonationRequest;
import com.example.demo.model.User;
import com.example.demo.repository.DonationRequestRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
    private DonationRequestRepository donationReqRepo;
	@Autowired
    private UserRepository userRepository;
	@Autowired
	private JwtUtil jwtService;
	public DonationRequest addRequest(DonationRequest request,String token) {
		String username = jwtService.extractUsername(token);
    	User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    	request.setUser(user);
		return donationReqRepo.save(request);
		
	}
	public List<DonationRequest> getRequest(String token) {
		String username = jwtService.extractUsername(token);
    	User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    	
		return donationReqRepo.findByUser_Id(user.getId());
	}
	public List<DonationRequest> deleteRequest(String token, int id) {
		String username = jwtService.extractUsername(token);
    	
		User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

    	DonationRequest request = donationReqRepo.findByReqId(id)
                .orElseThrow(() -> new RuntimeException("Request not found"));

        // Ensure that the request belongs to the logged-in user
        if (!(request.getUser().getId() == user.getId())) {
            throw new RuntimeException("Unauthorized: You can only delete your own requests.");
        }

        // Delete the request
        donationReqRepo.delete(request);

        // Return the updated list of requests
        return donationReqRepo.findByUser_Id(user.getId());
	}
	public List<Map<String, String>> findAllInstitutes() {
	    List<User> users = userRepository.findAll();
	    List<DonationRequest> donationRequests = donationReqRepo.findAll();

	    List<Map<String, String>> responseList = new ArrayList<>();

	    for (DonationRequest request : donationRequests) {
	        // Find the corresponding institute (User) for this request
	        User institute = request.getUser(); // Assuming DonationRequest has a getUser() method
            System.out.println(institute);
	        if (institute != null) {
	            Map<String, String> data = new HashMap<>();
	            data.put("name", institute.getUsername());
	            data.put("email", institute.getEmail());
	            data.put("category", request.getCategory());
	            data.put("quantity", request.getQuantity());
	            data.put("image", institute.getProfilePhoto()); // Assuming the user has an image URL
	            
	            responseList.add(data);
	        }
	    }

	    return responseList;
	}

     
}
