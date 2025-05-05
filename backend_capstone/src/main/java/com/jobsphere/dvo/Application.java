package com.jobsphere.dvo;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applicantId;

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    @JsonBackReference("users-applications")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "jobId", referencedColumnName = "job_id")
    @JsonBackReference("jobs-applications")
    private Jobs job;

    @Column
    private String name;

    @Column
    private String email;
    
    

    public Application() {
        // Default constructor
    }

    public Application(int applicantId, Users user, Jobs job, String name, String email) {
        this.applicantId = applicantId;
        this.user = user;
        this.job = job;
        this.name = name;
        this.email = email;
    }

    public int getApplicantId() {
        return applicantId;
    }

    public void setApplicantId(int applicantId) {
        this.applicantId = applicantId;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Jobs getJob() {
        return job;
    }

    public void setJob(Jobs job) {
        this.job = job;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}