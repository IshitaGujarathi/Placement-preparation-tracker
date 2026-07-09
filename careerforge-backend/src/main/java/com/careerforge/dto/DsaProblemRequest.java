package com.careerforge.dto;

import com.careerforge.entity.enums.Difficulty;
import com.careerforge.entity.enums.ProblemStatus;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DsaProblemRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String platform;

    private Difficulty difficulty;

    private ProblemStatus status;

}