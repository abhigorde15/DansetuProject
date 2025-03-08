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
      
      
      @ManyToOne
      @JoinColumn(name = "user_id", nullable = false) // Foreign key referring to User (Institute, Donor, Shopkeeper)
      private User user;

    public DonationRequest(int reqId, String category, String quantity, User user) {
		super();
		this.reqId = reqId;
		this.category = category;
		this.quantity = quantity;
		this.user = user;
	}
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
