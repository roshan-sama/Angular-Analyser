package com.goldwidow.io;

import java.io.FileWriter;

public abstract class WriteToFile {
    public static void WriteJson(){
        try {
            FileWriter writer = new FileWriter("output.json");
            writer.write("test");
            writer.close();
        } catch (Exception e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
