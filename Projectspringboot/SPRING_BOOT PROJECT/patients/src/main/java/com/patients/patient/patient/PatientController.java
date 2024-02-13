package com.patients.patient.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/layer")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {
    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping
    public List<patient> GetPatients() {
        return patientService.GetPatients();
    }

    @PostMapping
    public void addNewPatient(@RequestBody patient patient) {
        patientService.addNewPatient(patient);
    }

    @DeleteMapping(path = "{patientId}")
    public void deletePatient(@PathVariable("patientId") Long patientId) {
        patientService.deletePatient(patientId);
    }

    @PutMapping(path="{patientId}")
    public void updatePatient(
            @PathVariable("patientId") Long patientId,
            @RequestParam(required = false) String name,
            @RequestParam(required=false) String lastname,
            @RequestParam(required =false) String assurance,
            @RequestParam(required =false) Double bill)
            {
                patientService.updatePatient (patientId, name,lastname,assurance,bill);

    }



}