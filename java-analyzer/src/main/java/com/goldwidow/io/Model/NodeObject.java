package com.goldwidow.io.Model;

import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Corresponding Typescript analysis is in typedefs.js
 * @see typedefs.js */
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class NodeObject {
    @JsonProperty("Name")
    private String Name;

    @JsonProperty("Type")
    private String Type;

    @JsonProperty("File Path")
    private String FilePath;
    
    @JsonProperty("Non Filterable")
    private Object NonFilterable;

}
