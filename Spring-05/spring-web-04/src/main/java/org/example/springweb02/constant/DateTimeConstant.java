package org.example.springweb02.constant;

import java.time.format.DateTimeFormatter;

public class DateTimeConstant {

    public static final String DD_MM_YYYY_PATTERN = "dd/MM/yyyy";
    public static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern(DD_MM_YYYY_PATTERN);


}
