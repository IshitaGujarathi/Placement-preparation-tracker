package com.careerforge.service;

import com.careerforge.entity.Project;
import com.careerforge.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repository;

    @Override
    public Project create(Project project) {
        return repository.save(project);
    }

    @Override
    public List<Project> getAll() {
        return repository.findAll();
    }

    @Override
    public Project getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));
    }

    @Override
    public Project update(Long id, Project project) {

        Project existing = getById(id);

        existing.setProjectName(project.getProjectName());
        existing.setDescription(project.getDescription());
        existing.setGithubLink(project.getGithubLink());
        existing.setStatus(project.getStatus());

        return repository.save(existing);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}