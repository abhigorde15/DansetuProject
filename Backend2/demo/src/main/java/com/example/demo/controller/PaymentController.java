package com.example.demo.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.razorpay.*;
@RestController
@RequestMapping("/api")
public class PaymentController {
	@PostMapping("/payment")
    public String createOrder(@RequestBody Map<String,Object>data) throws RazorpayException {
        int amount = Integer.parseInt(data.get("amount").toString());
    	
        var client =  new RazorpayClient("rzp_test_PiojQYNNG4ToiB", "Nx8X87SmRTv30KdhmdFaShdK");
        
    	JSONObject jsonObj = new JSONObject();
    	jsonObj.put("amount", amount*100);
    	jsonObj.put("currency", "INR");
    	jsonObj.put("receipt", "txn_23560");
    	
    	Order order = client.orders.create(jsonObj);
    	System.out.println("Orders"+order);
    	
    	return order.toString();
    }
}
