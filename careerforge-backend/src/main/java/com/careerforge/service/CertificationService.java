package com.careerforge.service;

import com.careerforge.entity.Certification;
import com.careerforge.repository.CertificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CertificationService {

    private final CertificationRepository repository;

    public Certification save(Certification certification) {
        return repository.save(certification);
    }

    public List<Certification> getAll() {
        return repository.findAll();
    }

    public Certification getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Certification not found"));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}