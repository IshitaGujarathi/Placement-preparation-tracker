package com.careerforge.service;

import com.careerforge.entity.Interview;
import com.careerforge.repository.InterviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InterviewServiceImpl implements InterviewService {

    private final InterviewRepository repository;

    @Override
    public Interview add(Interview interview) {
        return repository.save(interview);
    }

    @Override
    public List<Interview> getAll() {
        return repository.findAll();
    }

    @Override
    public Interview getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Interview not found"));
    }

    @Override
    public Interview update(Long id, Interview interview) {

        Interview existing = getById(id);

        existing.setCompany(interview.getCompany());
        existing.setRole(interview.getRole());
        existing.setInterviewDate(interview.getInterviewDate());
        existing.setResult(interview.getResult());

        return repository.save(existing);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}