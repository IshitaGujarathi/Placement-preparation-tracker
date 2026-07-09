package com.careerforge.service;

import com.careerforge.entity.DsaProblem;

import java.util.List;

public interface DsaService {
    DsaProblem addProblem(DsaProblem problem);
    List<DsaProblem> getAllProblems();
    DsaProblem getById(Long id);
    DsaProblem updateProblem(Long id, DsaProblem problem);
    void deleteProblem(Long id);
}