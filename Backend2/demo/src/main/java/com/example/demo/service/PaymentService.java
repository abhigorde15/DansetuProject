package com.example.demo.service;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.example.demo.config.JwtUtil;
import com.example.demo.model.*;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;

@Service
public class PaymentService {
	@Autowired
    private JwtUtil jwtService;
	@Autowired
    private UserRepository userRepository;
	@Autowired
	private OrderRepository orderRepository;
	
	public ResponseEntity<?> getUserOrder(String token) {
		String username = jwtService.extractUsername(token);
		if(username == null) {
			return ResponseEntity.notFound().build();

		}
		
		 User user = userRepository.findByUsername(username).orElse(null);
		 if (user == null) {
	            return ResponseEntity.notFound().build(); 
	        }
		
		 List<com.example.demo.model.Orders> orders = orderRepository.findByUser(user);
	        if (orders.isEmpty()) {
	            return ResponseEntity.status(404).body("No orders found for this user");
	        }

	        return ResponseEntity.ok(orders);
	
	}
	public Orders saveOrder(Order order, String token) {
	    // 🔹 1. Extract Username from JWT Token
	    String username = jwtService.extractUsername(token);
	    
	    if (username == null) {
	        throw new RuntimeException("Invalid token, user not found");
	    }

	    // 🔹 2. Fetch User from Database
	    User user = userRepository.findByUsername(username)
	                 .orElseThrow(() -> new RuntimeException("User not found"));

	    // 🔹 3. Map Razorpay Order to Database Order
	    Orders dbOrder = new Orders();
	    dbOrder.setOrderId(order.get("id"));
	    dbOrder.setAmount(order.get("amount"));
	    dbOrder.setCurrency(order.get("currency"));
	    dbOrder.setReceipt(order.get("receipt"));
	    dbOrder.setStatus(order.get("status"));
	    dbOrder.setUser(user); // ✅ Assign User here
	    
	    // 🔹 4. Save Order in Database
	    return orderRepository.save(dbOrder);
	}



}
