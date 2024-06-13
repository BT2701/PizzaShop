package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="nhacungcap")
@Data
public class NhaCungCap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mancc;
    @Column
    private String tenncc;
    @Column
    private String diachi;
    @Column
    private String dienthoai;
}
