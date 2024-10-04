package com.example.homeWork.service;

import com.example.homeWork.entity.Customer;
import com.example.homeWork.model.request.CustomerCreationRequest;
import com.example.homeWork.model.response.CustomerResponse;
import com.example.homeWork.repository.CustomerReponsitory;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerReponsitory customerReponsitory;

    @Autowired
    ObjectMapper objectMapper;

    public List<CustomerResponse> getAll() {
        List<Customer> customers = customerReponsitory.getAll();
        return customers.stream().map(customer -> objectMapper.convertValue(customer, CustomerResponse.class)).toList();
    }

    public void createCustomer(CustomerCreationRequest request) {
        Customer customer = objectMapper.convertValue(request, Customer.class);
        customerReponsitory.save(customer);
    }

    public void deleteCustomer(int id) {
        customerReponsitory.delete(id);
    }
}
