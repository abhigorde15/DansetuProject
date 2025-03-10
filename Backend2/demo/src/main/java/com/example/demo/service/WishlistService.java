package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.model.Wishlist;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WishlistRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    @Autowired
    private UserRepository userRepository; // Assuming you already have UserRepository

    public Wishlist addToWishlist(Wishlist wishlist, int userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        wishlist.setUser(user);
        return wishlistRepository.save(wishlist);
    }

    public List<Wishlist> getUserWishlist(int userId) {
    	
        return wishlistRepository.findByUserId(userId);
    }

    public void removeFromWishlist(int wishlistId) {
        wishlistRepository.deleteById(wishlistId);
    }
}

