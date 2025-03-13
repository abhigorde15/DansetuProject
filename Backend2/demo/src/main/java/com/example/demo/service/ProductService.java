package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
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
	public ResponseEntity<?> updateProduct(int id, Products product) {
		Products reqProduct = productRepository.findById(id).orElseThrow();
		reqProduct.setCategory(product.getCategory());
		reqProduct.setDiscount(product.getDiscount());
		reqProduct.setPrice(product.getPrice());
		reqProduct.setpName(product.getpName());
		reqProduct.setStockQuantity(product.getStockQuantity());
//		if(product.getImageUrl() != null) {
//			reqProduct.setImageUrl(product.getImageUrl());
//		}

		Products savedProduct =  productRepository.save(reqProduct);
		return ResponseEntity.ok(savedProduct);
	}
	public ResponseEntity<?> deleteProduct(int id) {
		try {
			if(!productRepository.existsById(id)) {
				ResponseEntity.status(404).body("No such Product Found with id"+id);
			}
			 productRepository.deleteById(id);
			 ResponseEntity.ok("Successfully Deleted");
		}
	    catch(EmptyResultDataAccessException e) {
	    	return ResponseEntity.status(404).body("Product not found with ID: " + id);
	    }
		
		return ResponseEntity.ok("Deleted Successfully");
	}
	public ResponseEntity<?> findAllFoodProducts() {
		try {
			List<Products>products = productRepository.findByCategory("Food");
			return ResponseEntity.ok(products);
		}
		 catch(EmptyResultDataAccessException e) {
		    	return ResponseEntity.status(404).body("Products not found " );
		    }
		
	}


}
