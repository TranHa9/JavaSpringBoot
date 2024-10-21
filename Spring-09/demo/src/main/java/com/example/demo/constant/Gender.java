package com.example.demo.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Gender {
    MALE("NAM"),
    FEMALE("NỮ"),
    OTHER("KHÁC");
    private String vnValue;
}
