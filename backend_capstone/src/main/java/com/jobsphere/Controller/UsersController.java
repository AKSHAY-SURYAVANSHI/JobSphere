package com.jobsphere.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobsphere.dvo.Users;
import com.jobsphere.service.UsersService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UsersController {
	@Autowired
	private UsersService service;

	@GetMapping
	public List<Users> findAll(){
		return service.findAll();
	}
	
	@PostMapping
	public Users add(@RequestBody Users users) {
		return service.save(users);
	}
	
}
