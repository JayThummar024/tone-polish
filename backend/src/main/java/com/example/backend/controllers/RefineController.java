package com.example.backend.controllers;

import org.springframework.web.bind.annotation.*;
import com.example.backend.services.RefineService;
import org.springframework.http.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class RefineController {

    private final RefineService refineService;

    public RefineController(RefineService refineService) {
        this.refineService = refineService;
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Service is running");
    }

    @PostMapping("/refine")
    @CrossOrigin(origins = "http://localhost:3000") // Allow frontend
    public ResponseEntity<String> refine(@RequestBody Map<String, String> request) {
        String text = request.get("text");
        if (text == null || text.isBlank()) {
            return ResponseEntity.badRequest().body("Input cannot be empty");
        }
        return ResponseEntity.ok(refineService.refineText(text));
    }
}
