package com.goldwidow.io;

import java.io.File;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicBoolean;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javaparser.JavaParser;
import com.github.javaparser.StaticJavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.NodeList;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.expr.ObjectCreationExpr;
import com.github.javaparser.ast.type.ClassOrInterfaceType;
import com.github.javaparser.symbolsolver.JavaSymbolSolver;
import com.github.javaparser.symbolsolver.javaparsermodel.TypeExtractor;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import com.github.javaparser.symbolsolver.resolution.typesolvers.*;
import com.goldwidow.io.Model.FalcorDependencyGraph;
import com.goldwidow.io.Model.LinkObject;
import com.goldwidow.io.Model.NodeObject;

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

        TypeSolver javaParserTypeSolver = new JavaParserTypeSolver(projectDirectory);
        CombinedTypeSolver combinedTypeSolver = new CombinedTypeSolver();
        combinedTypeSolver.add(javaParserTypeSolver);

        // Use the combined solver
        JavaSymbolSolver symbolSolver = new JavaSymbolSolver(combinedTypeSolver);
        StaticJavaParser.getConfiguration().setSymbolResolver(symbolSolver);
        List<NodeObject> nodes = new ArrayList<NodeObject>();

        FalcorDependencyGraph falcorGraph = getFalcorGraphFromFrontend();

        ObjectMapper objectMapper = new ObjectMapper();

        for (File file : FileUtils.listFiles(projectDirectory, new String[] { "java" }, true)) {

            System.out.println("File: " + file.getAbsolutePath());

            try {
                CompilationUnit cu = StaticJavaParser.parse(file);

                cu.findAll(ClassOrInterfaceDeclaration.class).forEach(c -> {
                    String fullName = c.getFullyQualifiedName().get();
                    String type = c.isInterface() ? "interface" : "class";

                    if (null != fullName && fullName.contains("com.goldwidow.io")) {
                        System.out.println(c.getName());
                        System.out.println("-------------");
                        NodeObject node = new NodeObject(fullName, type, file.getAbsolutePath(), null);
                        falcorGraph.getNodesById().put(fullName, objectMapper.valueToTree(node));
                        // System.out.println(c.getFullyQualifiedName());
                    } else {
                        System.out.println("Could not obtain full name for : " + file.getAbsolutePath());
                    }


                });

            } catch (Exception e) {
                System.out.println("Unable to parse: " + file.getAbsolutePath());
            }
        }

        falcorGraph.setLinks(createReferenceLinksForNodes(null, null, null, null));
        WriteToFile.WriteJson(falcorGraph, "output-bend.json");

        return args -> {

            // System.out.println("Let's inspect the beans provided by Spring Boot:");

            // MockHttpServletRequest request = new MockHttpServletRequest();
            // request.setMethod("GET");
            // request.setRequestURI("/api/test");

            // System.out.println(requestMappingHandlerMapping.getPathMatcher());
            // requestMappingHandlerMapping.getPatternParser();// () .match(request, "/");

            // // Your logic goes here
            // requestMappingHandlerMapping.getHandlerMethods().keySet().forEach(mapping ->
            // {
            // mapping.getDirectPaths();
            // System.out.println(mapping);
            // System.out.println(mapping.getDirectPaths());
            // });
            ;// .keySet().toArray();

        };
    }

    FalcorDependencyGraph getFalcorGraphFromFrontend() {
        FalcorDependencyGraph falc = new FalcorDependencyGraph();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            falc = objectMapper.readValue(new File("analysis-output.json"),
                    FalcorDependencyGraph.class);
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Could not read frontend output.json");
        }
        return falc;
    }

    // TODO: Update this to fetch all references to class or interface type, and add
    // them as link objects
    List<LinkObject> createReferenceLinksForNodes(ClassOrInterfaceDeclaration classOrInterface,
            String targetClassName, List<LinkObject> links, Map<String, JsonNode> nodesById) {
        AtomicBoolean hasReference = new AtomicBoolean(false);

        // https://stackoverflow.com/questions/15202997/what-is-the-difference-between-canonical-name-simple-name-and-class-name-in-jav
        classOrInterface.findAll(ClassOrInterfaceType.class).forEach(c -> {
            System.out.println("Found references?");
            System.out.println(c.getName());
            System.out.println(c.getClass().getCanonicalName());
            if(c.getClass().getCanonicalName() == targetClassName){
                hasReference.set(true);
            }
        });

        return links;
    }
}
