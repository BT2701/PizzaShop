package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "goiy")
@Data
public class GoiY {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String noidung;
}
