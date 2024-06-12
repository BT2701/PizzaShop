package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="ctphieunhap")
@Data
public class ChiTietPhieuNhap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private Integer mapn;
    @Column
    private Integer masp;
    @Column
    private Integer soluong;
    @Column
    private Long dongia;
    @Column
    private Long thanhtien;
}
