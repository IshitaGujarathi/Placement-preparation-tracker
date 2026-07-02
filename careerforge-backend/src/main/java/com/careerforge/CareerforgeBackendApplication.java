package com.careerforge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.careerforge")
public class CareerforgeBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CareerforgeBackendApplication.class, args);
    }

}