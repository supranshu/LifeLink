package com.lifelink.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lifelink.model.Insti;
import com.lifelink.model.Organs;
import com.lifelink.repos.InstiRepo;
import com.lifelink.repos.OrgansRepo;

@Service
public class OrganService {
	
	
	@Autowired
	private OrgansRepo organsRepo;
	
	@Autowired
	private InstiRepo instiRepo;
	
	public List<Insti> allInst(){
		
		return this.instiRepo.findAll();
	}
	
	public List<Organs> organsbyInstName(String instName){
		
		return this.organsRepo.findByDonorInstName(instName);
	
	}
	
	public Insti upInst(Insti insti) throws Exception {
		if(instiRepo.findById(insti.getInstId())!=null) {
			
			return this.instiRepo.save(insti);
		}
		else
		{
			throw new Exception("Institution already exists");
		}
	}
	
	public Organs upOrg(Organs org) {
			return this.organsRepo.save(org);
		
		
	}
	public boolean login(Insti inst) {
	    Optional<Insti> optionalInst = Optional.of(instiRepo.findByInstName(inst.getInstName()));
	    
	    if (optionalInst.isPresent()) {
	        Insti inst1 = optionalInst.get();
	        
	        if (inst.getPassword().equals(inst1.getPassword())) {
	            return true;
	        } else {
	            return false;
	        }
	    } else {
	        return false;
	    }
	}

	
	
	
	
}
