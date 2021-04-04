package com.example.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="Blood_Bank")
public class BloodBankModel {
	

	@Id
	@GenericGenerator(name = "sequence_id", strategy = "com.example.model.idgenerator.BloodBankID_Generator")
	@GeneratedValue(generator = "sequence_id")  
	@JsonProperty
	private String bloodBankID;
	private String bloodGroup;
	private String bloodPressure;
	private String PHLevel;
	private int Quantity;
	private int Availability;
	private String Mobile;
	private String Address;
	@JsonProperty
	private Date createdOn;

	  
	@PrePersist
	  protected void onCreate() {
	    createdOn = new Date();
	  }
	  public String getBloodBankID() {
			return bloodBankID;
		}

		public void setBloodBankID(String bloodBankID) {
			this.bloodBankID = bloodBankID;
		}

		public String getBloodGroup() {
			return bloodGroup;
		}

		public void setBloodGroup(String bloodGroup) {
			this.bloodGroup = bloodGroup;
		}

		public String getBloodPressure() {
			return bloodPressure;
		}

		public void setBloodPressure(String bloodPressure) {
			this.bloodPressure = bloodPressure;
		}

		public String getPHLevel() {
			return PHLevel;
		}

		public void setPHLevel(String pHLevel) {
			PHLevel = pHLevel;
		}

		public int getQuantity() {
			return Quantity;
		}

		public void setQuantity(int quantity) {
			Quantity = quantity;
		}

		public int getAvailability() {
			return Availability;
		}

		public void setAvailability(int availability) {
			Availability = availability;
		}

		public String getMobile() {
			return Mobile;
		}

		public void setMobile(String mobile) {
			Mobile = mobile;
		}

		public String getAddress() {
			return Address;
		}

		public void setAddress(String address) {
			Address = address;
		}
		public Date getCreatedOn() {
			return createdOn;
		}
		public void setCreatedOn(Date createdOn) {
			this.createdOn = createdOn;
		}
		@Override
		public String toString() {
			return "BloodBankModel [bloodBankID=" + bloodBankID + ", bloodGroup=" + bloodGroup + ", bloodPressure="
					+ bloodPressure + ", PHLevel=" + PHLevel + ", Quantity=" + Quantity + ", Availability=" + Availability
					+ ", Mobile=" + Mobile + ", Address=" + Address + ", createdOn=" + createdOn + "]";
		}

		/*public Date getCreatedOn() {
			return createdOn;
		}

		public void setCreatedOn(Date createdOn) {
			this.createdOn = createdOn;
		}*/

}
