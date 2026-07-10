package com.careerforge.service;

import com.careerforge.entity.Certification;
import com.careerforge.repository.CertificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CertificationServiceImpl implements CertificationService {

    private final CertificationRepository repository;

    @Override
    public List<Certification> getAll() {
        return repository.findAll();
    }

    @Override
    public Certification save(Certification certification) {
        return repository.save(certification);
    }

    @Override
    public Certification update(Long id, Certification certification) {

        Certification existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Certification not found"));

        existing.setCertificateName(certification.getCertificateName());
        existing.setOrganization(certification.getOrganization());
        existing.setCompletionDate(certification.getCompletionDate());
        existing.setCertificateUrl(certification.getCertificateUrl());

        return repository.save(existing);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

}