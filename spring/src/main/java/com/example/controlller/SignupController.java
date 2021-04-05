package com.example.controlller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.Logindaao;
import com.example.model.Login;
import com.example.model.LoginModel;
import com.example.model.SignUp;
import com.example.model.UserModel;
@CrossOrigin(origins="https://8081-badacebeffecadfbbbbcadddaaafdfbabacbdeb.examlyiopb.examly.io")
@RestController
public class SignupController {
	@Autowired
	Logindaao repo;
	
	@GetMapping("/all")
	@ResponseBody
	List<LoginModel> view_all()
	{
		//LoginModel lm = new LoginModel();
		
		/*UserModel um = new UserModel();
		um.setActive(true);
		um.setEmail("admin@gmail.com");
		um.setFname("admin");
		um.setLname("a");
		um.setMobileNumber("9486038403");
		um.setRole("Admin");
		//lm.setUserId("hema");
		lm.setUserId("admin");
		lm.setPassword("admin");
		lm.setUser_details(um);
		repo.save(lm);*/
		
		return repo.findAll();
	}
	
	@PostMapping("/signup")
	boolean saveUser(@RequestBody SignUp su)
	{
		
		if(su.getEmail() == "" || su.getPassword() == "")
		{
			return false;
		}
		System.out.println(su.getEmail()+" "+su.getFname()+" "+su.getLname()+" "+su.getPassword());
		LoginModel lm = new LoginModel();
		UserModel um = new UserModel();
		um.setFname( su.getFname());
		um.setLname(su.getLname());
		um.setEmail(su.getEmail());
		um.setMobileNumber(su.getMobileNumber());
		um.setActive(true);
		um.setRole("User");
		lm.setPassword(su.getPassword());
		lm.setUser_details(um);
		//System.out.print(lm.toString());
		//lm.getUser_details().getEmail();
		repo.save(lm);
		return true;
	}
	
	
	@PostMapping("/login")
	 
	LoginModel checkUser(@RequestBody Login l)
	{
		System.out.println(l.getEmail()+" "+l.getPassword());
		//LoginModel lm = null;
		LoginModel lm = repo.findByEmailAndMobile(l.getEmail(), l.getPassword());
		if(lm==null)
		{
			return null;
		}
		else
		{
			System.out.println(lm.toString());
		}
		
		return lm;
	}
	

}
