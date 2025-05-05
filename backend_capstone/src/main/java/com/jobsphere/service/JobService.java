package com.jobsphere.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobsphere.dvo.Jobs;
import com.jobsphere.repo.JobRepository;

@Service
public class JobService {
	@Autowired
	private JobRepository repo;
	
	public Jobs save(Jobs Jobs) {
		return repo.save(Jobs);
	}
	
	public List<Jobs> findAll(){
		return repo.findAll();
	}

}
