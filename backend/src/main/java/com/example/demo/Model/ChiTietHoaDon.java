package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="cthoadon")
@Data
public class ChiTietHoaDon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private Integer mahd;
    @Column
    private Integer masp;
    @Column
    private Integer soluong;
    @Column
    private Long dongia;
    @Column
    private Long thanhtien;

}
