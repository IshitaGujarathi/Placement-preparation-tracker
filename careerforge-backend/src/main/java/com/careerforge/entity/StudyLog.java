package com.careerforge.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "study_logs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudyLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;

    private Integer hoursStudied;

    private LocalDate studyDate;
}