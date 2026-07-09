package com.careerforge.service;

import com.careerforge.entity.StudyLog;
import com.careerforge.repository.StudyLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyLogServiceImpl implements StudyLogService {

    private final StudyLogRepository repository;

    @Override
    public StudyLog add(StudyLog log) {
        return repository.save(log);
    }

    @Override
    public List<StudyLog> getAll() {
        return repository.findAll();
    }
}