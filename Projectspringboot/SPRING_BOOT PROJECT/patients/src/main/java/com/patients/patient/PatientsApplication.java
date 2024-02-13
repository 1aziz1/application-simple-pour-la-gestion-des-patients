package com.patients.patient;

import com.patients.patient.patient.patient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication

public class PatientsApplication {


	public static void main(String[] args) {
		SpringApplication.run(PatientsApplication.class, args);
	}

}
