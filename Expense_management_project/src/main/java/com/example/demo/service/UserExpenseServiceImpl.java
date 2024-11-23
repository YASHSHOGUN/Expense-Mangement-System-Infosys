package com.example.demo.service;
import com.example.demo.model.Expense;
import com.example.demo.repository.UserExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserExpenseServiceImpl implements UserExpenseService{

    @Autowired
    private UserExpenseRepository userExpenseRepository;
    private Long nextId  =1L;
    @Override
    public String createExpense(Expense expanse) {

        expanse.setExpenseId(nextId++);
        userExpenseRepository.save(expanse);
        return "success";
    }

    @Override
    public List<Expense> getAllExpense() {
        return userExpenseRepository.findAll();
    }

    @Override
    public String removeUserExpense(Long expenseId) {
        Optional<Expense> expense = userExpenseRepository.findById(expenseId);
        if(expense.isPresent())userExpenseRepository.delete(expense.get());
        return "deleted";
    }
}