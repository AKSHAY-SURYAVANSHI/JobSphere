package com.jobsphere.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jobsphere.dvo.Application;
import com.jobsphere.repo.ApplicationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Optional<Application> getApplicationById(int applicantId) {
        return applicationRepository.findById(applicantId);
    }

    public Application updateApplication(int applicantId, Application applicationDetails) {
        Application application = applicationRepository.findById(applicantId)
                .orElseThrow(() -> new RuntimeException("Application not found with id " + applicantId));
        
        return applicationRepository.save(application);
    }

    public void deleteApplication(int applicantId) {
        applicationRepository.deleteById(applicantId);
    }
}