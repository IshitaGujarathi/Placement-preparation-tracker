package com.careerforge.entity;

import com.careerforge.entity.enums.Difficulty;
import com.careerforge.entity.enums.ProblemStatus;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "dsa_problems")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DsaProblem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String platform;

    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    @Enumerated(EnumType.STRING)
    private ProblemStatus status;
}