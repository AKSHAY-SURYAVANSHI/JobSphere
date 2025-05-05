package com.jobsphere.Controller;

import com.jobsphere.dvo.Application;
import com.jobsphere.dvo.Jobs;
import com.jobsphere.repo.JobRepository;
import com.jobsphere.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private JobRepository jobRepository;

    @PostMapping
    public ResponseEntity<Application> createApplication(@RequestBody Application application) {
        if (application.getJob() == null || application.getJob().getJob_id() == 0) {
            throw new RuntimeException("Job must be provided for the application.");
        }

        Jobs job = jobRepository.findById(application.getJob().getJob_id())
                .orElseThrow(() -> new RuntimeException("Job not found with id: " + application.getJob().getJob_id()));
        application.setJob(job);

        Application createdApplication = applicationService.createApplication(application);
        return ResponseEntity.ok(createdApplication);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable("id") int applicantId) {
        Application application = applicationService.getApplicationById(applicantId)
                .orElseThrow(() -> new RuntimeException("Application not found with id: " + applicantId));
        return ResponseEntity.ok(application);
    }

    @GetMapping
    public ResponseEntity<List<Application>> getAllApplications() {
        List<Application> applications = applicationService.getAllApplications();
        return ResponseEntity.ok(applications);
    }

    
}