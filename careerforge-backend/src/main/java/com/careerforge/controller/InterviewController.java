package com.careerforge.controller;

import com.careerforge.entity.Interview;
import com.careerforge.service.InterviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interviews")
@RequiredArgsConstructor
public class InterviewController {

    private final InterviewService service;

    @PostMapping
    public Interview add(@RequestBody Interview interview) {
        return service.add(interview);
    }

    @GetMapping
    public List<Interview> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Interview getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Interview update(@PathVariable Long id,
                            @RequestBody Interview interview) {
        return service.update(id, interview);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Interview deleted successfully.";
    }
}