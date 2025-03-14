package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Orders;
import com.example.demo.model.User;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

	List<Orders> findByUser(User user);

}
