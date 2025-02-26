package com.projectBackend.ProjectBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectBackend.ProjectBackend.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,String> {

}
