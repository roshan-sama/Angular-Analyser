package com.goldwidow.io;

import java.lang.reflect.Array;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.github.javaparser.StaticJavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;

import jakarta.servlet.http.HttpServletRequest;

@SpringBootApplication
public class App {
    @Autowired
    private RequestMappingHandlerMapping requestMappingHandlerMapping;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {

        String code = "public class Test { }";
        CompilationUnit cu = StaticJavaParser.parse(code);
        ClassOrInterfaceDeclaration cf = cu.getClassByName("Test").get();
        
        WriteToFile.WriteJson();
        // cf.
        // System.out.println(cu.toString());

        return args -> {

            System.out.println("Let's inspect the beans provided by Spring Boot:");

            MockHttpServletRequest request = new MockHttpServletRequest();
            request.setMethod("GET");
            request.setRequestURI("/api/test");

            System.out.println(requestMappingHandlerMapping.getPathMatcher());
            requestMappingHandlerMapping.getPatternParser();//() .match(request, "/");

            // Your logic goes here
            requestMappingHandlerMapping.getHandlerMethods().keySet().forEach(mapping -> {
                mapping.getDirectPaths();
                System.out.println(mapping);
                System.out.println(mapping.getDirectPaths());
            });
            ;// .keySet().toArray();

        };
    }
}
