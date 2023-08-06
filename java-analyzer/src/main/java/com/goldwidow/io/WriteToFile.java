package com.goldwidow.io;

import java.io.File;

import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

public abstract class WriteToFile {
    public static void WriteJson(Object jsonObj, String fileName) {

        try {
            ObjectMapper mapper = new ObjectMapper();
            ObjectWriter writer = mapper.writer(new DefaultPrettyPrinter());
            writer.writeValue(new File(fileName), jsonObj);

        } catch (Exception e) {
            System.out.println("Error occurred while writing to file");
            e.printStackTrace();
        }

    }
}
