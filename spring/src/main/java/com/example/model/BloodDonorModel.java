package com.example.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class BloodDonorModel {
	//@Id
	//@GeneratedValue
	@Id
	@GenericGenerator(name = "d_id", strategy = "com.example.model.idgenerator.Donor_Id")
	@GeneratedValue(generator = "d_id")  
	@JsonProperty
	private String Id;
	@Embedded
	private UserModel donar_details;
	private String bloodGroup;
	private String PHLevel;
	private String bloodPressure;
	private int age;
	private int weight;
	private int availability;
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public UserModel getDonar_details() {
		return donar_details;
	}
	public void setDonar_details(UserModel donar_details) {
		this.donar_details = donar_details;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	public String getPHLevel() {
		return PHLevel;
	}
	public void setPHLevel(String pHLevel) {
		PHLevel = pHLevel;
	}
	public String getBloodPressure() {
		return bloodPressure;
	}
	public void setBloodPressure(String bloodPressure) {
		this.bloodPressure = bloodPressure;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public int getAvailability() {
		return availability;
	}
	public void setAvailability(int availability) {
		this.availability = availability;
	}
	@Override
	public String toString() {
		return "BloodDonorModel [Id=" + Id + ", donar_details=" + donar_details.toString() + ", bloodGroup=" + bloodGroup
				+ ", PHLevel=" + PHLevel + ", bloodPressure=" + bloodPressure + ", age=" + age + ", weight=" + weight
				+ ", availability=" + availability + "]";
	}
	
	
	
	

}
