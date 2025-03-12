package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.config.JwtUtil;
import com.example.demo.model.Products;
import com.example.demo.model.Shop;
import com.example.demo.service.CloudinaryService;
import com.example.demo.service.ProductService;
import com.example.demo.service.ShopService;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	@Autowired
    private ProductService productService;
	
   
    @Autowired
    private CloudinaryService cloudinaryService;
    @PostMapping("/add")
    public ResponseEntity<?> listShop(
            @RequestParam("pImage") MultipartFile image,
            @RequestParam("pName") String pName,
            @RequestParam("price") int price,
            @RequestParam("discount") float discount,
            @RequestParam("stockQuantity") int stockQuantity,
            @RequestParam("category") String category,
            @RequestHeader("Authorization") String token
           ) throws IOException {
    	
      String imageUrl ="https://res.cloudinary.com/dguygzrkp/image/upload/sksyxpd90wjwdtjkivex.jpg"; 	//cloudinaryService.uploadImage(image);
      
      Products product = new Products();
      product.setpName(pName);
      product.setDiscount(discount);
      product.setPrice(price);
      product.setStockQuantity(stockQuantity);
      product.setCategory(category);
      product.setImageUrl(imageUrl);
      return productService.addproduct(token,product);
      
    }
    @GetMapping("/user")
    public ResponseEntity<?> fetchUserProducts( @RequestHeader("Authorization") String token){
    	return productService.fetchProducts(token);
    }
}
