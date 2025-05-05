package com.jobsphere.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobsphere.dvo.Users;

public interface UserRespository extends JpaRepository<Users, Integer> {
	
}
