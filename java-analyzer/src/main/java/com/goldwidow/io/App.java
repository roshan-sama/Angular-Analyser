package com.goldwidow.io;


import com.github.javaparser.StaticJavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;

public class App 
{
    public static void main( String[] args )
    {
        String code = "public class Test { }";
        CompilationUnit cu = StaticJavaParser.parse(code);
        ClassOrInterfaceDeclaration cf = cu.getClassByName("Test").get();
        cf.
        System.out.println(cu.toString());
    }
}
