package com.example.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonProperty;
@Entity
public class LoginModel {
	
	@Id
	@GenericGenerator(name = "user_id", strategy = "com.example.model.idgenerator.User_Id")
	@GeneratedValue(generator = "user_id")  
	//@JsonProperty
	private String UserId;
	//private String email;
	private String password;
	@Embedded
	private UserModel User_details;
	public String getUserId() {
		return UserId;
	}
	public void setUserId(String userId) {
		UserId = userId;
	}
	/*public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}*/
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public UserModel getUser_details() {
		return User_details;
	}
	public void setUser_details(UserModel user_details) {
		User_details = user_details;
	}
	@Override
	public String toString() {
		return "LoginModel [UserId=" + UserId + ", email=" + " " + ", password=" + password + ", User_details="
				+ User_details.toString() + "]";
	}
	
	

}
