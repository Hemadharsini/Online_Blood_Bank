package com.example.controlller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.Logindaao;
import com.example.model.Login;
import com.example.model.LoginModel;
import com.example.model.UserModel;

@RestController
public class SignupController {
	@Autowired
	Logindaao repo;
	
	@GetMapping("/all")
	@ResponseBody
	List<LoginModel> view_all()
	{
		/*LoginModel lm = new LoginModel();
		UserModel um = new UserModel();
		um.setActive(true);
		um.setEmail("1412@gmail.com");
		um.setFname("Hemadharsini");
		um.setLname("P");
		um.setMobileNumber("9486038403");
		um.setRole("User");
		//lm.setUserId("hema");
		lm.setPassword("hema1412");
		lm.setUser_details(um);
		repo.save(lm);*/
		
		return repo.findAll();
	}
	
	@PostMapping("/signup")
	boolean saveUser(@RequestBody LoginModel lm)
	{
		lm.getUser_details().getEmail();
		repo.save(lm);
		return true;
	}
	
	
	@PostMapping("/login")
	
	LoginModel checkUser(@RequestBody Login l)
	{
		System.out.println(l.getEmail()+" "+l.getPassword());
		//LoginModel lm = null;
		LoginModel lm = repo.findByEmailAndMobile(l.getEmail(), l.getPassword());
		System.out.println(lm.toString());
		return lm;
	}
	

}
