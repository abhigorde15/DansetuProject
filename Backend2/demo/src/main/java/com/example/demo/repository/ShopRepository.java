package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Shop;
import com.example.demo.model.User;

public interface ShopRepository  extends  JpaRepository<Shop,Integer>{
	boolean existsByOwnerName(String username);

	Optional<Shop> findByEmail(String email);

	Shop findByOwnerName(String username);
}
