package com.patients.patient.patient;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientsRepository patientsRepository;

    @Autowired

    public PatientService(PatientsRepository patientsRepository) {
        this.patientsRepository = patientsRepository;
    }


    public List<patient> GetPatients() {
        return patientsRepository.findAll();
    }

    public void addNewPatient(patient patient) {


        Optional<patient> patientOptional = patientsRepository.findPatientByName(patient.getName());
        if (patientOptional.isPresent()) {
            throw new IllegalStateException("name taken");


        }
        patientsRepository.save(patient);


    }

    public void deletePatient(Long patientId) {
        boolean exists = patientsRepository.existsById(patientId);
        if (!exists) {
            throw new IllegalStateException("patient with id" + patientId + "does not exists ");

        }
        patientsRepository.deleteById(patientId);

    }

    @Transactional
    public void updatePatient(Long patientId, String name, String lastname, String assurance, Double bill) {

        patient patient = patientsRepository.findById(patientId)
                .orElseThrow(() -> new IllegalStateException("Patient with id " + patientId + " does not exist"));

        if (name != null && name.length() > 0 && !Objects.equals(patient.getName(), name)) {
            Optional<patient> patientOptional = patientsRepository.findPatientByName(name);
            if (patientOptional.isPresent()) {
                throw new IllegalStateException("Name taken");
            }
            patient.setName(name);
        }

        if (lastname != null && lastname.length() > 0 && !Objects.equals(patient.getLastname(), lastname)) {
            patient.setLastname(lastname);
        }

        if (assurance != null && assurance.length() > 0 && !Objects.equals(patient.getAssurance(), assurance)) {
            patient.setAssurance(assurance);
        }

        if (bill != null && bill >= 0 && !Objects.equals(patient.getBill(), bill)) {
            patient.setBill(bill);
        }
    }
}

