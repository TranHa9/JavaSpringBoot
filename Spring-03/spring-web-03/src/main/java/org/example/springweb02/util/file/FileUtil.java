package org.example.springweb02.util.file;


import com.google.gson.*;
import org.example.springweb02.constant.DateTimeConstant;
import org.example.springweb02.util.DataUtil;
import org.example.springweb02.util.StringUtil;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FileUtil<T> implements DataWritable<T>, DataReadable<T> {

    private static final Gson gson = new GsonBuilder()
            .serializeNulls()
            .registerTypeAdapter(LocalDate.class, new JsonSerializer<LocalDate>() {
                @Override
                public JsonElement serialize(LocalDate date, Type type, JsonSerializationContext jsonSerializationContext) {
                    return new JsonPrimitive(date.format(DateTimeConstant.DATE_FORMATTER));
                }
            })
            .registerTypeAdapter(LocalDate.class, new JsonDeserializer<LocalDate>() {
                @Override
                public LocalDate deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
                    return LocalDate.parse(jsonElement.getAsJsonPrimitive().getAsString(), DateTimeConstant.DATE_FORMATTER);
                }
            })
            .create();

    @Override
    public void writeDataToFile(List<T> data, String fileName) {
        if (StringUtil.isNullOrEmpty(fileName) || DataUtil.isNullOrEmpty(data)) {
            return;
        }
        File file = new File("src/main/resources/" + fileName);
        try (FileWriter fileWriter = new FileWriter(file.getAbsolutePath())) {
            String rs = gson.toJson(data);
            fileWriter.write(rs);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<T> readDataFromFile(String fileName, Class<T[]> clazz) throws IOException {
        if (StringUtil.isNullOrEmpty(fileName)) {
            return null;
        }
        File file = new File("src/main/resources/" + fileName);
        try (FileReader reader = new FileReader(file.getAbsolutePath())) {
            T[] dataArr = gson.fromJson(reader, clazz);
            return dataArr == null ? null : new ArrayList<>(Arrays.asList(dataArr));
        }
    }
}
