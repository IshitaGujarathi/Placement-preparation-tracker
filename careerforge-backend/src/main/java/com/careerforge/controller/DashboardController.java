package com.careerforge.controller;

import com.careerforge.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public Map<String, Object> getDashboard() {
        return dashboardService.getDashboardData();
    }
}