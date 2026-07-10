package com.careerforge.controller;

import com.careerforge.entity.StudyLog;
import com.careerforge.service.StudyLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/studylogs")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
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

    @GetMapping("/{id}")
    public StudyLog getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public StudyLog update(@PathVariable Long id,
                           @RequestBody StudyLog log) {
        return service.update(id, log);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.delete(id);

        return "Study Log deleted successfully.";

    }

}