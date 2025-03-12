package com.example.demo.model;

import org.hibernate.annotations.ValueGenerationType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Products {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	private String pName;
	private double price;
	private float discount;
	private int stockQuantity;
    private String category;
    private String imageUrl;
	@ManyToOne
    @JoinColumn(name = "shop_id", nullable = false)  // Foreign key reference to Shop
    private Shop shop;
	public Products() {}
	public Products(int id, String pName, double price, float discount, int stockQuantity, String category,
			String imageUrl, Shop shop) {
		super();
		this.id = id;
		this.pName = pName;
		this.price = price;
		this.discount = discount;
		this.stockQuantity = stockQuantity;
		this.category = category;
		this.imageUrl = imageUrl;
		this.shop = shop;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	public int getStockQuantity() {
		return stockQuantity;
	}
	public void setStockQuantity(int stockQuantity) {
		this.stockQuantity = stockQuantity;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public Shop getShop() {
		return shop;
	}
	public void setShop(Shop shop) {
		this.shop = shop;
	}
	
	
}
