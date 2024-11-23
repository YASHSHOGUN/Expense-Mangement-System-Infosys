package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryRepository categoryRepository;
    private Long nextId = 1L;

    @Override
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public String createCategory(Category category) {
        category.setCategoryId(nextId++);
        categoryRepository.save(category);
        return "Added";
    }

    @Override
    public String removeUserCategory(Long categoryId) {
        categoryRepository.deleteById(categoryId);
        return "remove success";
    }
}
