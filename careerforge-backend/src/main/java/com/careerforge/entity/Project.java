package com.careerforge.entity;

import com.careerforge.entity.enums.ProjectStatus;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectName;

    @Column(length = 1000)
    private String description;

    private String githubLink;

    @Enumerated(EnumType.STRING)
    private ProjectStatus status;
}