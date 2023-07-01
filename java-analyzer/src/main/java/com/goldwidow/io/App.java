package com.goldwidow.io;

import java.io.File;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.github.javaparser.JavaParser;
import com.github.javaparser.StaticJavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;
import com.github.javaparser.symbolsolver.JavaSymbolSolver;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.*;

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

        File projectDirectory = new File("/workspaces/Angular-Analyser/java-analyzer/src/main/java/com/goldwidow/io");
        List<CompilationUnit> units = new ArrayList<>();

        TypeSolver javaParserTypeSolver = new JavaParserTypeSolver(projectDirectory);
        CombinedTypeSolver combinedTypeSolver = new CombinedTypeSolver();
        combinedTypeSolver.add(javaParserTypeSolver);

        // Use the combined solver
        JavaSymbolSolver symbolSolver = new JavaSymbolSolver(combinedTypeSolver);
        StaticJavaParser.getConfiguration().setSymbolResolver(symbolSolver);

        for (File file : FileUtils.listFiles(projectDirectory, new String[] { "java" }, true)) {
            System.out.println("File: " + file.getAbsolutePath());
            try {
                CompilationUnit cu = StaticJavaParser.parse(file);
                cu.findAll(ClassOrInterfaceDeclaration.class).forEach(c -> {
                    System.out.println(c.getName());
                    System.out.println(c.getFullyQualifiedName());                    
                });
            } catch (Exception e) {
                System.out.println("Unable to parse: " + file.getAbsolutePath());
            }
        }


        return args -> {

            System.out.println("Let's inspect the beans provided by Spring Boot:");

            MockHttpServletRequest request = new MockHttpServletRequest();
            request.setMethod("GET");
            request.setRequestURI("/api/test");

            System.out.println(requestMappingHandlerMapping.getPathMatcher());
            requestMappingHandlerMapping.getPatternParser();// () .match(request, "/");

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
