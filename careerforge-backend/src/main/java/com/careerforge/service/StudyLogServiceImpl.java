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

    @Override
    public StudyLog getById(Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Study Log not found"));

    }

    @Override
    public StudyLog update(Long id, StudyLog log) {

        StudyLog existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Study Log not found"));

        existing.setSubject(log.getSubject());
        existing.setHoursStudied(log.getHoursStudied());
        existing.setStudyDate(log.getStudyDate());

        return repository.save(existing);

    }

    @Override
    public void delete(Long id) {

        repository.deleteById(id);

    }

}