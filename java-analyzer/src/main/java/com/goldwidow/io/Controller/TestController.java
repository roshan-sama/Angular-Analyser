package com.goldwidow.io.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {
    
    // test api get to return a string, with appropriate apring boot anntations:
    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
