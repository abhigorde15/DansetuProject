package com.example.demo.controller;
import com.example.demo.model.Orders;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.PaymentService;
import com.razorpay.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import org.json.JSONObject;

@RestController
@RequestMapping("/api")
public class PaymentController {
	@Autowired
    private PaymentService paymentService;
    @PostMapping("/payment")
    public String createOrder(@RequestBody Map<String,Object> data, @RequestHeader("Authorization") String token) throws RazorpayException {
        int amount = Integer.parseInt(data.get("amount").toString());

        var client = new RazorpayClient("rzp_test_PiojQYNNG4ToiB", "Nx8X87SmRTv30KdhmdFaShdK");

        JSONObject jsonObj = new JSONObject();
        jsonObj.put("amount", amount * 100);
        jsonObj.put("currency", "INR");
        jsonObj.put("receipt", "txn_23560");

        Order order = client.orders.create(jsonObj);
        paymentService.saveOrder(order, token); // ✅ Pass token here
        
        return "Saved Successfully";
    }
    @GetMapping("/user/orders")
    public ResponseEntity<?> getUserOrder(@RequestHeader("Authorization") String token) {
    	return paymentService.getUserOrder(token);
    }

}
