package com.example.homeWork.repository;


import com.example.homeWork.entity.Customer;
import com.example.homeWork.entity.Film;
import com.example.homeWork.util.file.FileUtil;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.List;

@Repository
public class CustomerReponsitory {
    private final FileUtil<Customer> customerFileUtil = new FileUtil<>();
    private final String fileName = "db/customers.json";

    public List<Customer> getAll() {
        try {
            return customerFileUtil.readDataFromFile(fileName, Customer[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void save(Customer customer) {
        List<Customer> customers = getAll();
        int maxId = 0;
        for (int i = 0; i < customers.size(); i++) {
            if (customers.get(i).getId() > maxId) {
                maxId = customers.get(i).getId();
            }
        }
        customer.setId(maxId + 1);

        customers.add(customer);

        customerFileUtil.writeDataToFile(customers, fileName);
    }

    public void delete(int id) {
        List<Customer> customers = getAll();
        customers.removeIf(customer -> customer.getId() == id);
        customerFileUtil.writeDataToFile(customers, fileName);
    }
}
