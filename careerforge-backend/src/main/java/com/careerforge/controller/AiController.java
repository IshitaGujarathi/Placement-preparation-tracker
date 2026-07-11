package com.careerforge.controller;

import com.careerforge.dto.AiRequest;
import com.careerforge.dto.AiResponse;
import com.careerforge.service.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AiController {

    private final AiService aiService;

    @PostMapping("/chat")
    public AiResponse chat(@RequestBody AiRequest request) {

        String answer = aiService.askAI(request.getMessage());

        return new AiResponse(answer);

    }

}