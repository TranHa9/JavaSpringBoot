package org.example.springweb02.util;

public class StringUtil {

    public static boolean isNullOrEmpty(String str) {
        return DataUtil.isNullOrEmpty(str) || str.trim().isEmpty();
    }

}
