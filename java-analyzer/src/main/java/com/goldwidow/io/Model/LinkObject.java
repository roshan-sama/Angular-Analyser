package com.goldwidow.io.Model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Corresponding Typescript analysis is in typedefs.js
 * 
 * @see typedefs.js
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LinkObject {
    @JsonProperty("source")
    private Object Source;

    @JsonProperty("target")
    private Object Target;

    @JsonProperty("Type")
    private String Type;

}
