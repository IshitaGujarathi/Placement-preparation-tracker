package com.careerforge.service;

import com.careerforge.entity.Certification;

import java.util.List;

public interface CertificationService {

    List<Certification> getAll();

    Certification save(Certification certification);

    Certification update(Long id, Certification certification);

    void delete(Long id);

}