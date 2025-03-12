package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Wishlist;
import com.example.demo.service.WishlistService;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @PostMapping("/add")
    public ResponseEntity<Wishlist> addToWishlist(@RequestBody Wishlist wishlist, @RequestHeader("Authorization") String token) {
        int userId = getUserIdFromToken(token); // Extract user ID from token
        Wishlist savedWishlist = wishlistService.addToWishlist(wishlist, userId);
        return ResponseEntity.ok(savedWishlist);
    }

    @GetMapping
    public ResponseEntity<List<Wishlist>> getUserWishlist(@RequestHeader("Authorization") String token) {
        int userId = getUserIdFromToken(token);
        
        System.out.println(userId);
        return ResponseEntity.ok(wishlistService.getUserWishlist(userId));
    }

    @DeleteMapping("/remove/{wishlistId}")
    public ResponseEntity<String> removeFromWishlist(@PathVariable int wishlistId) {
        wishlistService.removeFromWishlist(wishlistId);
        return ResponseEntity.ok("Item removed from wishlist");
    }

   
    private int getUserIdFromToken(String token) {
        // Implement JWT decoding logic here
        return 1; // Dummy user ID, replace with actual logic
    }
}
