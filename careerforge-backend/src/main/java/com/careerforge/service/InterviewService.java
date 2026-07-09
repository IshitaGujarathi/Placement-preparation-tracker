package com.careerforge.service;

import com.careerforge.entity.Interview;
import java.util.List;

public interface InterviewService {
    Interview add(Interview interview);
    List<Interview> getAll();
    Interview getById(Long id);
    Interview update(Long id, Interview interview);
    void delete(Long id);
}