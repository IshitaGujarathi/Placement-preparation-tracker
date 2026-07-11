package com.careerforge.controller;

import com.careerforge.entity.Certification;
import com.careerforge.service.CertificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/certifications")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CertificationController {

    private final CertificationService service;

    @GetMapping
    public List<Certification> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Certification create(@RequestBody Certification certification) {
        return service.save(certification);
    }

    @PutMapping("/{id}")
    public Certification update(@PathVariable Long id,
                                @RequestBody Certification certification) {
        return service.update(id, certification);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}