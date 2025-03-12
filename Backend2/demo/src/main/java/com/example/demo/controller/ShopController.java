package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Shop;
import com.example.demo.repository.ShopRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.CloudinaryService;
import com.example.demo.service.ShopService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/shop")
public class ShopController {
	
	@Autowired
    private ShopService shopService;
    
    @Autowired
    private CloudinaryService cloudinaryService;
    @PostMapping("/add")
    public ResponseEntity<?> listShop(
            @RequestParam("image") MultipartFile image,
            @RequestParam("shopName") String shopName,
            @RequestParam("ownerName") String ownerName,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("address") String address,
            @RequestParam("openingHours") String openingHours,
            @RequestParam("categories") String categories,
            @RequestParam("description") String description,
            @RequestParam("token") String token) throws IOException {

       
      
        String imageUrl ="https://res.cloudinary.com/dguygzrkp/image/upload/sksyxpd90wjwdtjkivex.jpg"; //cloudinaryService.uploadImage(image);
        Shop shop = new Shop();
        shop.setShopName(shopName);
        shop.setOwnerName(ownerName);
        shop.setEmail(email);
        shop.setPhone(phone);
        shop.setAddress(address);
        shop.setOpeningHours(openingHours);
        shop.setCategories(categories);
        shop.setDescription(description);
        shop.setImage(imageUrl); // Set Image URL
        
       return  shopService.addShop(shop,token);
       
    }
    @GetMapping("/user")
    public ResponseEntity<Shop> fetchUserShop(@RequestHeader("Authorization") String token){
    	return shopService.fetchShop(token);
    }

}
