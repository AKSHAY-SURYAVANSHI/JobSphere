package com.jobsphere.dvo;

import jakarta.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int job_id;

    @Column
    private String Company;

    @Column
    private String Title;

    @Column
    private String Description;

    @Column
    private String Salary;

    @Column
    private String Location;

    @Column
    private String Skills;

    @Column
    private String EmployementType;

    @Column
    private String WorkMode;

    @OneToMany(mappedBy = "job", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Application> applications;

    public Jobs() {
        // Default constructor
    }

    public Jobs(int job_id, String company, String title, String description, String salary, String location) {
        this.job_id = job_id;
        Company = company;
        Title = title;
        Description = description;
        Salary = salary;
        Location = location;
    }

    public int getJob_id() {
        return job_id;
    }

    public void setJob_id(int job_id) {
        this.job_id = job_id;
    }

    public String getCompany() {
        return Company;
    }

    public void setCompany(String company) {
        Company = company;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getSalary() {
        return Salary;
    }

    public void setSalary(String salary) {
        Salary = salary;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public String getSkills() {
        return Skills;
    }

    public void setSkills(String skills) {
        Skills = skills;
    }

    public String getEmployementType() {
        return EmployementType;
    }

    public void setEmployementType(String employementType) {
        EmployementType = employementType;
    }

    public String getWorkMode() {
        return WorkMode;
    }

    public void setWorkMode(String workMode) {
        WorkMode = workMode;
    }

    public List<Application> getApplications() {
        return applications;
    }

    public void setApplications(List<Application> applications) {
        this.applications = applications;
    }

    @Override
    public int hashCode() {
        return Objects.hash(Company, Description, Location, Salary, Title, job_id, Skills, EmployementType, WorkMode);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Jobs other = (Jobs) obj;
        return Objects.equals(Company, other.Company) && Objects.equals(Description, other.Description)
                && Objects.equals(Location, other.Location) && Objects.equals(Salary, other.Salary)
                && Objects.equals(Title, other.Title) && job_id == other.job_id
                && Objects.equals(Skills, other.Skills) && Objects.equals(EmployementType, other.EmployementType)
                && Objects.equals(WorkMode, other.WorkMode);
    }

    @Override
    public String toString() {
        return "Jobs [job_id=" + job_id + ", Company=" + Company + ", Title=" + Title + ", Description=" + Description
                + ", Salary=" + Salary + ", Location=" + Location + ", Skills=" + Skills + ", EmployementType="
                + EmployementType + ", WorkMode=" + WorkMode + "]";
    }
}
