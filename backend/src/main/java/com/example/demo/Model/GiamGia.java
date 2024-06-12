package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity(name="giamgia")
@Data
public class GiamGia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer magiam;
    @Column
    private String tengiamgia;
    @Column
    private Integer phantramgiam;
    @Column
    private Integer dieukien;
    @Column
    private Timestamp ngaybd;
    @Column
    private Timestamp ngaykt;
}
