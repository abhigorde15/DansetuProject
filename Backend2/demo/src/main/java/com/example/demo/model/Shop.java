package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shop_id;

    private String shopName;
    private String ownerName;
    private String email;
    private String phone;
    private String address;
    private String openingHours;
    private String categories; // Can be stored as JSON string
    private String image;
    
//    public MultipartFile getImage() {
//		return image;
//	}
//
//	public void setImage(MultipartFile image) {
//		this.image = image;
//	}

	private String description;

   
    

	public Shop() {}

    public Shop(Long id, String shopName, String ownerName, String email, String phone, String address,
                String openingHours, String categories, String imageUrl, String description) {
        this.shop_id = id;
        this.shopName = shopName;
        this.ownerName = ownerName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.openingHours = openingHours;
        this.categories = categories;
        this.image = imageUrl;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() {
        return shop_id;
    }

    public void setId(Long id) {
        this.shop_id = id;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public String getCategories() {
        return categories;
    }

    public void setCategories(String categories) {
        this.categories = categories;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String imageUrl) {
        this.image = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

   
}
