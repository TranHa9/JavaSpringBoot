package com.example.homeWork.util.file;

import java.io.IOException;
import java.util.List;

public interface DataReadable<T> {

    List<T> readDataFromFile(String fileName, Class<T[]> clazz) throws IOException;

}