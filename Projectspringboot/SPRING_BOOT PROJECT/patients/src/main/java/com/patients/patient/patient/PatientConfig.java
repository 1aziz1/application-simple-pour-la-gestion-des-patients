package com.patients.patient.patient;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PatientConfig {
    @Bean
    CommandLineRunner commandLineRunner(PatientsRepository repository) {
        return args ->{
           patient aziz= new patient(

                    "Aziz",
                    "Jabari",
                    "expired",
                    1
            );
            patient ela= new patient(
                    "ela",
                    "hlilou",
                    "expired",
                    1
            );
            patient ranya= new patient(
                    "ranya",
                    "goth",
                    "expired",
                    1
            );
            patient ahmed= new patient(
                    "ahmed",
                    "madanina",
                    "expired",
                    1
            );
            repository.saveAll(List.of(aziz,ahmed,ela,ranya));
        };
    }
}
