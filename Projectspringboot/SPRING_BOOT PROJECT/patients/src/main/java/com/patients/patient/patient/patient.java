package com.patients.patient.patient;


import jakarta.persistence.*;

@Entity
@Table
public class patient
{
    @Id
    @SequenceGenerator(
            name="patient_sequence",
            sequenceName = "patient_name",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy=GenerationType.SEQUENCE,
            generator = "patient_sequence"
    )
    private long id ;
    private String name;
    private String lastname;
    private String assurance;
    private double bill;

    public patient() {
    }

    public patient(long id, String name, String lastname, String assurance, double bill) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.assurance = assurance;
        this.bill = bill;
    }

    public patient(String name, String lastname, String assurance, double bill) {
        this.name = name;
        this.lastname = lastname;
        this.assurance = assurance;
        this.bill = bill;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAssurance() {
        return assurance;
    }

    public void setAssurance(String assurance) {
        this.assurance = assurance;
    }

    public double getBill() {
        return bill;
    }

    public void setBill(double bill) {
        this.bill = bill;
    }

    @Override
    public String toString() {
        return "patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", assurance='" + assurance + '\'' +
                ", bill=" + bill +
                '}';
    }
}
