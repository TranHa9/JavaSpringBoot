package com.example.login.repository;

import com.example.login.entity.User;
import com.example.login.util.file.FileUtil;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {
    final FileUtil<User> fileUtil = new FileUtil<>();
    final String fileName = "db/user.json";

    public List<User> getAll() {
        try {
            List<User> usersArray = fileUtil.readDataFromFile(fileName, User[].class);
            return usersArray != null ? usersArray : new ArrayList<>();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ArrayList<>();
    }
    public User save(User user) {
        List<User> users = getAll();
        int maxId = 0;
        if(!users.isEmpty()) {
            for (int i = 0; i < users.size(); i++) {
                if (users.get(i).getId() > maxId) {
                    maxId = users.get(i).getId();
                }
            }
        }
        user.setId(maxId + 1);
        users.add(user);
        fileUtil.writeDataToFile(users, fileName);

        return user;
    }

    public User findByEmail(String email) {
        List<User> users = getAll();
        if(users == null || users.isEmpty()) {
            return null;
        }
        return users.stream().filter(user -> user.getEmail().equals(email)).findFirst().orElse(null);
    }

    public void active(User user) {
            List<User> users = getAll();
            for (int i = 0; i < users.size(); i++) {
                if (users.get(i).getId() == user.getId()) {
                    users.get(i).setEnabled(user.isEnabled());
                    break;
                }
            }
            fileUtil.writeDataToFile(users, fileName);
    }
}
