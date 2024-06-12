package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="loai")
@Data
public class Loai {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MaLoai")
    private Integer maloai;
    @Column(name="TenLoai")
    private String tenloai;

}
