package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.model.Reports;
import com.example.demo.repository.ReportsRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserReportServiceImpl implements UserReportService{
    @Autowired
    private ReportsRepository reportsRepository;
    private Long nextId = 1L;

    @Override
    public List<Reports> getReports(Long userId) {
        return reportsRepository.findAll();
    }

    @Override
    public List<Reports> createReport(Reports reports) {
        reports.setReportId(nextId++);
        reportsRepository.save(reports);
        return reportsRepository.findAll();
    }

    @Override
    public List<Reports> removeUserReport(Long reportId) {
        reportsRepository.deleteById(reportId);
        return reportsRepository.findAll();
    }

    @Override
    public List<Reports> getAllReports() {
        return reportsRepository.findAll();
    }
}
