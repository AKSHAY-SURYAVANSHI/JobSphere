package com.jobsphere.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobsphere.dvo.Jobs;

public interface JobRepository extends JpaRepository<Jobs, Integer> {

}
