package com.example.backend.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class RefineService {

    private static final Logger logger = LoggerFactory.getLogger(RefineService.class);

    public String refineText(String input) {
        try {
            if (input == null) {
                throw new IllegalArgumentException("Input text cannot be null");
            }
            String refined = "Refined: " + input.trim().toUpperCase();
            logger.info("Refined text: {}", refined);
            return refined;
        } catch (Exception e) {
            logger.error("Error refining text: {}", e.getMessage());
            throw e;
        }
    }
}
