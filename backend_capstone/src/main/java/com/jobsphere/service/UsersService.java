package com.jobsphere.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobsphere.dvo.Users;
import com.jobsphere.repo.UserRespository;

@Service
public class UsersService {
	@Autowired
	private UserRespository repo;
	
	public Users save(Users users) {
		return repo.save(users);
	}
	
	public List<Users> findAll(){
		return repo.findAll();
	}
	

	

}
