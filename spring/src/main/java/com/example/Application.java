package com.example;

import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import com.example.dao.OnlineBloodBankDao;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		//@Autowired
		//OnlineBloodBankDao repo;
		
		SpringApplication.run(Application.class, args);
		System.out.println("Hello world");
		Calendar cal = Calendar.getInstance();
		Date today = cal.getTime();
		cal.add(Calendar.DATE, -90);
		Date expiry = cal.getTime();
		System.out.println(expiry);
		//repo.deleteByCreatedOnBefore(expiry);
		
		
		
	}

}
