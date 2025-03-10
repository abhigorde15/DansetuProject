package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "donation_request") 
public class DonationRequest {
      @Id 
      @GeneratedValue(strategy=GenerationType.IDENTITY)
      private int reqId;
      private String category;
      private String quantity;
      private int price;
      private String status="Pending";
      
      public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}


	public DonationRequest(int reqId, String category, String quantity, int price, String status, User user) {
		super();
		this.reqId = reqId;
		this.category = category;
		this.quantity = quantity;
		this.price = price;
		this.status = status;
		this.user = user;
	}


	@ManyToOne
      @JoinColumn(name = "user_id", nullable = false) // Foreign key referring to User (Institute, Donor, Shopkeeper)
      private User user;

   
	public DonationRequest() {}
	public int getReqId() {
		return reqId;
	}


	public void setReqId(int reqId) {
		this.reqId = reqId;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getQuantity() {
		return quantity;
	}


	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}
      
      
}
