package com.example.login.util.file;

import java.io.IOException;
import java.util.List;

public interface DataWritable<T> {

    void writeDataToFile(List<T> data, String fileName) throws IOException;

}
