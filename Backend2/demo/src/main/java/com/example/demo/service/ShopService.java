package com.example.demo.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.config.JwtUtil;
import com.example.demo.model.Shop;
import com.example.demo.model.User;
import com.example.demo.repository.ShopRepository;
import com.example.demo.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class ShopService {

    @Autowired
    private JwtUtil jwtService;
   
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ShopRepository shopRepository;

   

    public ResponseEntity<?> addShop(Shop shop, String token) {
       
        String username = jwtService.extractUsername(token);
        if (username == null) {
            return ResponseEntity.status(401).body("Invalid token.");
        }

        
        if (shopRepository.existsByOwnerName(shop.getOwnerName())) {
            return ResponseEntity.badRequest().body("You have already listed a shop.");
        }

        // ✅ 3. Shop Save करा
        Shop savedShop = shopRepository.save(shop);
        return ResponseEntity.ok(savedShop);
    }



    public ResponseEntity<Shop> fetchShop(String token) {
        String username = jwtService.extractUsername(token);
        
        if (username == null) {
            return ResponseEntity.status(401).body(null);
        }
        Optional<User> optionalUser = userRepository.findByUsername(username);
        
        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        
        User user = optionalUser.get();
        Optional<Shop> optionalShop = shopRepository.findByEmail(user.getEmail());
        
        return optionalShop.map(ResponseEntity::ok)
                           .orElse(ResponseEntity.status(404).body(null));
    }
}
