import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

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

import com.example.dao.OnlineBloodBankDao;
import com.example.model.BloodBankModel;


@CrossOrigin(origins="https://8081-badacebeffecadfbbbbcadddaaafdfbabacbdeb.examlyiopb.examly.io")
@RestController

public class BloodBankController {
	@Autowired
	OnlineBloodBankDao repo;
	
	
	/*public BloodBankController() {
		// TODO Auto-generated constructor stub
		//Calendar cal = Calendar.getInstance();
		//Date today = cal.getTime();
		//cal.add(Calendar.DATE, -90);
		//Date expiry = cal.getTime();
		//System.out.println(expiry);
		//repo.deleteBycreatedOn(expiry);
		//repo.deleteBycreated_on(expiry);
	}*/
	/*@PostMapping("/admin/addSample")
	@ResponseBody
	public BloodBankModel Add_Sample(BloodBankModel bbm)
	{
		repo.save(bbm);
		return bbm;
	}*/
	/*Calendar cal = Calendar.getInstance();
	Date today = cal.getTime();
	cal.add(Calendar.DATE, -90);
	Date expiry = cal.getTime();
	System.out.println(expiry);
	*/
	@GetMapping("/sample")
	@ResponseBody
	public List<BloodBankModel> showBloodSample()
	{
		/*System.out.println("Fffffffff");
		BloodBankModel bbm = new BloodBankModel();
		//bbm.setBloodBankID("bloodbankid1");
		bbm.setBloodGroup("B+ve");
		bbm.setAddress("KKM Hospital");
		bbm.setAvailability(1);
		bbm.setBloodPressure("11.5");
		bbm.setMobile("9486038403");
		bbm.setPHLevel("11.4");
		bbm.setQuantity(10);
		repo.save(bbm);*/
		System.out.print("In all");
		//repo.deletebyCreatedOn();
		return repo.findAll();
		
	}
	@GetMapping("/sample/{id}")
	@ResponseBody
	public Optional<BloodBankModel>Get_Sample_Details(@PathVariable("id") String bloodBankID)
	{
		
		return repo.findById(bloodBankID);
		
	}
	@PostMapping("/sample/{group}")
	@ResponseBody
	public List<BloodBankModel>Get_All_Sample_by_group(@PathVariable("group") String bloodGroup)
	{
		System.out.print(bloodGroup);
		
		return repo.findBybloodGroup(bloodGroup);
		
	}
	@PostMapping("/admin/addSample")
	public String addBlood(@RequestBody BloodBankModel bbm)
	{
		System.out.print(bbm.getAddress()+" "+bbm.getAvailability());
		repo.save(bbm);
		return "Added";
	}
	@DeleteMapping("/admin/sample/{id}")
	public String removeBloodSample (@PathVariable String id)
	{
		//BloodBankModel bbm = repo.getOne(id);
		Optional<BloodBankModel> bbm_o = repo.findById(id);
		BloodBankModel bbm1 = bbm_o.orElse(null);
		if(bbm1 != null)
		{
			System.out.println(bbm1.toString());
			repo.delete(bbm1);
		}
		//repo.delete(bbm);
		//System.out.println(bbm.toString());
		return "del";
	}
	
	@PutMapping("/admin/sample/{id}")
	
	public String updateBloodSample(@PathVariable String id,@RequestBody BloodBankModel bbm)
	{
		System.out.println(bbm.toString());
		Optional<BloodBankModel> bbm_o = repo.findById(id);
		BloodBankModel bbm1 = bbm_o.orElse(null);
		if(bbm1 != null)
		{
			System.out.println(bbm1.toString());
			
			repo.save(bbm);
			//repo.delete(bbm1);
		}
		else
		{
			return "Not";
		}
		
		return "Updated";
	}
	

}
