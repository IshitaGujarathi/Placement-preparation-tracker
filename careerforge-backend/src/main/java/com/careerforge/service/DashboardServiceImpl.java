package com.careerforge.service;

import com.careerforge.repository.DsaProblemRepository;
import com.careerforge.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final DsaProblemRepository dsaRepo;
    private final ProjectRepository projectRepo;

    @Override
    public Map<String, Object> getDashboardData() {

        Map<String, Object> data = new HashMap<>();

        data.put("totalDsa", dsaRepo.count());
        data.put("totalProjects", projectRepo.count());

        return data;
    }
}