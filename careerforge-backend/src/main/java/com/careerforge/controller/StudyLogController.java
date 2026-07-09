package com.careerforge.controller;

import com.careerforge.entity.StudyLog;
import com.careerforge.service.StudyLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/studylogs")
@RequiredArgsConstructor
public class StudyLogController {

    private final StudyLogService service;

    @PostMapping
    public StudyLog add(@RequestBody StudyLog log) {
        return service.add(log);
    }

    @GetMapping
    public List<StudyLog> getAll() {
        return service.getAll();
    }
}