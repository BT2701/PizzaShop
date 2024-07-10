package com.example.demo.Repository;

import com.example.demo.Model.SanPham;
import com.example.demo.Model.TaiKhoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TaiKhoanRepo extends JpaRepository<TaiKhoan, Integer> {
    @Query ("select kh from taikhoan tk " +
            "inner join khachhang kh on tk.khachhang.makh = kh.makh " +
            "where tk.username = :username and tk.matkhau = :password")
    public Object loginByUsername(@Param("username")String username, @Param("password")String password);

    @Query("select kh from taikhoan tk " +
            "inner join khachhang kh on tk.khachhang.makh = kh.makh " +
            "where kh.email=:email and tk.matkhau=:password")
    public Object loginByEmail(@Param("email")String email, @Param("password")String password);

    @Query("select tk from taikhoan tk inner join khachhang kh on tk.khachhang.makh=kh.makh where kh.sdt=:phonenumber and tk.matkhau=:password")
    public Object loginByPhonenumber(@Param("phonenumber")String phonenumber, @Param("password")String password);


    @Query("select tk from taikhoan tk where tk.username=:username")
    public TaiKhoan findByUsername(@Param("username")String username);
}
