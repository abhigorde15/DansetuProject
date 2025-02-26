package com.projectBackend.ProjectBackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
 public User() {}
 @Id
 private String id;
 private String name;
 private String password;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public User(String id, String name, String password) {
	super();
	this.id = id;
	this.name = name;
	this.password = password;
}
 
}
