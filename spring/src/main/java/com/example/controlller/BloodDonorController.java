import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.donordao;
import com.example.model.BloodBankModel;
import com.example.model.BloodDonorModel;
import com.example.model.UserModel;
@CrossOrigin(origins="https://8081-badacebeffecadfbbbbcadddaaafdfbabacbdeb.examlyiopb.examly.io")
@RestController
public class BloodDonorController {
	@Autowired
	donordao repo;
	
	@GetMapping("/donor")
	@ResponseBody
	public List<BloodDonorModel>  getDonor()
	{
		/*BloodDonorModel bd = new BloodDonorModel();
		bd.setAge(18);
		bd.setAvailability(1);
		bd.setBloodGroup("B+ve");
		bd.setBloodPressure("11.45");
		bd.setPHLevel("7.4");
		bd.setWeight(52);
		UserModel um = new UserModel();
		um.setActive(true);
		um.setEmail("hema@gmail.com.in");
		um.setFname("he");
		um.setLname("ma");
		um.setMobileNumber("63828888675");
		um.setRole("donor");
		bd.setDonar_details(um);
		
		repo.save(bd);*/
	
		return repo.findAll();
		
	}
	@GetMapping("/donor/{id}")
	@ResponseBody
	public Optional<BloodDonorModel> getDonorByID(@PathVariable("id") String id)
	{
		
		return repo.findById(id);
		
	}
	@PostMapping("/donor/{group}")
	@ResponseBody
	public List<BloodDonorModel>getDonorByBloodGroup(@PathVariable("group") String bloodGroup)
	{
		
		return repo.findBybloodGroup(bloodGroup);
		
	}
	
	@PostMapping("/admin/addDonor")
	public String addDonar(@RequestBody BloodDonorModel bbm)
	{
		//System.out.print(bbm.getAddress()+" "+bbm.getAvailability());
		repo.save(bbm);
		return "Added";
	}
	@DeleteMapping("/admin/donor/{id}")
	public String removeBloodSample (@PathVariable String id)
	{
		//BloodBankModel bbm = repo.getOne(id);
		Optional<BloodDonorModel> bbm_o = repo.findById(id);
		BloodDonorModel bbm1 = bbm_o.orElse(null);
		if(bbm1 != null)
		{
			System.out.println(bbm1.toString());
			repo.delete(bbm1);
		}
		//repo.delete(bbm);
		//System.out.println(bbm.toString());
		return "del";
	}
	
	@PutMapping("/admin/donor/{id}")
	
	public String updateBloodSample(@PathVariable String id,@RequestBody BloodDonorModel bbm)
	{
		System.out.println(id);
		System.out.println(bbm.toString());
		Optional<BloodDonorModel> bbm_o = repo.findById(id);
		BloodDonorModel bbm1 = bbm_o.orElse(null);
		if(bbm1 != null)
		{
			System.out.println(bbm1.toString());
			repo.save(bbm);
			
		}
		else
		{
			return "Not";
		}
		
		return "Updated";
	}
	


}
