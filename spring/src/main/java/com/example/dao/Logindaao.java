package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.model.LoginModel;

public interface Logindaao extends JpaRepository<LoginModel, Integer>{
	@Query("select p from LoginModel p where p.User_details.email = :email and p.password = :mobile")
    LoginModel findByEmailAndMobile(@Param("email") String email,
                                 @Param("mobile") String mobile);

}
