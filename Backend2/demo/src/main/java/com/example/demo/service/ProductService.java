package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.config.JwtUtil;
import com.example.demo.model.Products;
import com.example.demo.model.Shop;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.ShopRepository;
@Service
public class ProductService {
	@Autowired
    private JwtUtil jwtService;
	@Autowired
	private ShopRepository shopRepository;
	@Autowired
	private ProductRepository productRepository;
	public ResponseEntity<?> addproduct(String token, Products product) {
	    String username = jwtService.extractUsername(token);
	    if (username == null) {
	        return ResponseEntity.status(401).body("Invalid token.");
	    }
	    
	   
	    Shop shop = shopRepository.findByOwnerName(username); // Replace with your method of identifying the shop.
	    
	    if (shop == null) {
	        return ResponseEntity.status(404).body("Shop not found for this user.");
	    }
	    
	    
	    product.setShop(shop);  // Setting the Shop reference in the Product.
	    
	   
	    
	    productRepository.save(product); // Save the product
	    
	    return ResponseEntity.ok(product);
	}
	public ResponseEntity<?> fetchProducts(String token) {
		 String username = jwtService.extractUsername(token);
		    if (username == null) {
		        return ResponseEntity.status(401).body("Invalid token.");
		    }
		    
		   
		    Shop shop = shopRepository.findByOwnerName(username); // Replace with your method of identifying the shop.
		    
		    if (shop == null) {
		        return ResponseEntity.status(404).body("Shop not found for this user.");
		    }
		    List<Products> products = productRepository.findByShop(shop);

	        if (products.isEmpty()) {
	            return ResponseEntity.status(404).body("No products found for this shop.");
	        }

	        return ResponseEntity.ok(products);
		
	}


}
