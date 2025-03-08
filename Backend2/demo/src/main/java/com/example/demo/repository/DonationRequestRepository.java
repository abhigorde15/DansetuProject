package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.DonationRequest;
import com.example.demo.model.User;

public interface DonationRequestRepository extends JpaRepository<DonationRequest, Integer> {
	@Query("SELECT d FROM DonationRequest d WHERE d.user.id = :userId")
	List<DonationRequest> findByUser_Id(@Param("userId") Integer userId);

	Optional<DonationRequest> findByReqId(int id);


}
