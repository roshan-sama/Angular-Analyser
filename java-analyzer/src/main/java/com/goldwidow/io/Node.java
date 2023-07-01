package com.goldwidow.io;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

/** Corresponding Typescript analysis is in typedefs.js
 * @see typedefs.js */
@Data
public class Node {
    @JsonProperty("Name")
    private final String Name;

    @JsonProperty("Type")
    private final String Type;

    @JsonProperty("File Path")
    private final String FilePath;
    
}
