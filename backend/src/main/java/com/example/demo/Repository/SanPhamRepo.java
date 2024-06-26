package com.example.demo.Repository;

import com.example.demo.Model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SanPhamRepo extends JpaRepository<SanPham, Integer> {
    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "GROUP BY s.masp " +
            "ORDER BY total DESC")
    public List<Object[]> danhSachSpNoiBac();
    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> getALL();

    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "where (s.tensp like %:name%) and (s.loai.maloai = :type) and (s.dongia >= :from and s.dongia <= :to)" +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> filterByNameTypePrice(@Param("name") String name,
                                                @Param("type") int type,
                                                @Param("from") int from,
                                                @Param("to") int to );

    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "where (s.tensp like %:name%) and (s.loai.maloai = :type) " +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> filterByNameType(@Param("name") String name,
                                                @Param("type") int type
                                                );

    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "where (s.tensp like %:name%) and (s.dongia >= :from and s.dongia <= :to)" +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> filterByNamePrice(@Param("name") String name,
                                                @Param("from") int from,
                                                @Param("to") int to );

    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "where (s.loai.maloai = :type) and (s.dongia >= :from and s.dongia <= :to)" +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> filterByTypePrice(@Param("type") int type,
                                                @Param("from") int from,
                                                @Param("to") int to );

    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "where (s.tensp like %:name%) " +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> filterByName(@Param("name") String name);

    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "where (s.loai.maloai = :type) " +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> filterByType(@Param("type") int type);

    @Query("SELECT s, SUM(ct.soluong) AS total " +
            "FROM sanpham s " +
            "JOIN cthoadon ct ON s.masp = ct.sanpham.masp " +
            "where (s.dongia >= :from and s.dongia <= :to) " +
            "GROUP BY s.masp " +
            "ORDER BY total ")
    public List<Object[]> filterByPrice(@Param("from") int from,
                                                @Param("to") int to );


}
