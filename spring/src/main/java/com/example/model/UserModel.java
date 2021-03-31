package com.example.model;

import javax.persistence.Embeddable;

@Embeddable
public class UserModel {
	
	private String fname;
	private String lname;
	private String mobileNumber;
	private String email;
	private Boolean active;
	private String role;
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "UserModel [fname=" + fname + ", lname=" + lname + ", mobileNumber=" + mobileNumber + ", email=" + email
				+ ", active=" + active + ", role=" + role + "]";
	}


}
