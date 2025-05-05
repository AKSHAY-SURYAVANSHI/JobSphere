package com.jobsphere.dvo;

import jakarta.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    private String password;

    @Column
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Application> applications;

    public Users() {
        // Default constructor
    }

    public Users(int userId, String firstname, String lastname, String password, String email) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Application> getApplications() {
        return applications;
    }

    public void setApplications(List<Application> applications) {
        this.applications = applications;
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, firstname, lastname, password, userId);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Users other = (Users) obj;
        return Objects.equals(email, other.email) && Objects.equals(firstname, other.firstname)
                && Objects.equals(lastname, other.lastname) && Objects.equals(password, other.password)
                && userId == other.userId;
    }

    @Override
    public String toString() {
        return "Users [userId=" + userId + ", firstname=" + firstname + ", lastname=" + lastname + ", password="
                + password + ", email=" + email + "]";
    }
}
