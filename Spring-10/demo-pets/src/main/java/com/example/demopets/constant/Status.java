package com.example.demopets.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Status {
    pending("chờ phê duyệt"),
    approved("đã phê duyệt"),
    rejected("đã từ chối");
    private final String vnValue;
}
