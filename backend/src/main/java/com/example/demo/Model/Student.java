package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity(name = "student")
@Data
public class Student {
    @Id
    private Integer id;
    @Column
    private String name;
    @Column
    private Integer age;
    @Column
    private Integer department;
    @Column
    private Integer math;
    @Column
    private Integer english;
    @Column
    private Integer it;
}
