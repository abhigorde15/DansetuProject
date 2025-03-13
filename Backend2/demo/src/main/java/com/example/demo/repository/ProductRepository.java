package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Products;
import com.example.demo.model.Shop;

public interface ProductRepository extends JpaRepository<Products, Integer> {

	List<Products> findByShop(Shop shop);

	List<Products> findByCategory(String string);

}
