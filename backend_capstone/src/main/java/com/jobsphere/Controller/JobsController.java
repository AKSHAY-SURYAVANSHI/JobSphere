package com.jobsphere.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobsphere.dvo.Jobs;
import com.jobsphere.service.JobService;

@CrossOrigin("*")
@RestController
@RequestMapping("/jobs")
public class JobsController {
	@Autowired
	private JobService service;

	@GetMapping
	public List<Jobs> findAll(){
		return service.findAll();
	}
	
	@PostMapping
	public Jobs add(@RequestBody Jobs Jobs) {
		return service.save(Jobs);
	}
}
