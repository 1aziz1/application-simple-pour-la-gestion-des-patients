package com.patients.patient.patient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientsRepository extends JpaRepository<patient, Long> {
    @Query("Select p from patient p where p.name = ?1")
    Optional<patient> findPatientByName(String name);


}
