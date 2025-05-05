package com.jobsphere.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobsphere.dvo.Application;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
}