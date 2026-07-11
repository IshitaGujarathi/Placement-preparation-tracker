package com.careerforge.controller;

import com.careerforge.entity.DsaProblem;
import com.careerforge.service.DsaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dsa")
@RequiredArgsConstructor
public class DsaController {

    private final DsaService service;

    @PostMapping
    public DsaProblem add(@RequestBody DsaProblem problem) {
        return service.addProblem(problem);
    }

    @GetMapping
    public List<DsaProblem> getAll() {
        return service.getAllProblems();
    }

    @GetMapping("/{id}")
    public DsaProblem getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public DsaProblem update(@PathVariable Long id,
                             @RequestBody DsaProblem problem) {
        return service.updateProblem(id, problem);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteProblem(id);
        return "Problem deleted successfully.";
    }
}