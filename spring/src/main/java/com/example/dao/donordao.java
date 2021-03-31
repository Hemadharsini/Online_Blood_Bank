package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.BloodBankModel;
import com.example.model.BloodDonorModel;

public interface donordao extends JpaRepository<BloodDonorModel, String>{
	
	List<BloodDonorModel> findBybloodGroup(String blood_group);

}
