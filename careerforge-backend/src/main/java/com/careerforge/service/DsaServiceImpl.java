package com.careerforge.service;
import com.careerforge.entity.DsaProblem;
import com.careerforge.repository.DsaProblemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DsaServiceImpl implements DsaService {

    private final DsaProblemRepository repository;

    @Override
    public DsaProblem addProblem(DsaProblem problem) {
        return repository.save(problem);
    }

    @Override
    public List<DsaProblem> getAllProblems() {
        return repository.findAll();
    }

    @Override
    public DsaProblem getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Problem not found"));
    }

    @Override
    public DsaProblem updateProblem(Long id, DsaProblem problem) {
        DsaProblem existing = getById(id);
        existing.setTitle(problem.getTitle());
        existing.setPlatform(problem.getPlatform());
        existing.setDifficulty(problem.getDifficulty());
        existing.setStatus(problem.getStatus());
        return repository.save(existing);
    }

    @Override
    public void deleteProblem(Long id) {
        repository.deleteById(id);
    }
}