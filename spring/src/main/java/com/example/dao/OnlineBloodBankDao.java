package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.BloodBankModel;


@Repository
public interface OnlineBloodBankDao extends JpaRepository<BloodBankModel, String>  {
	//@Query("selct * from Blood_Bank where ")
	List<BloodBankModel> findBybloodGroup(String blood_group);

}
