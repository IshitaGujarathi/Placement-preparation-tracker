package com.careerforge.service;

import com.careerforge.entity.Project;
import java.util.List;

public interface ProjectService {
    Project create(Project project);
    List<Project> getAll();
    Project getById(Long id);
    Project update(Long id, Project project);
    void delete(Long id);
}