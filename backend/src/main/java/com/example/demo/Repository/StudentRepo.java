package com.example.demo.Repository;

import com.example.demo.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
    @Query("SELECT count(s.id) as total from student s group by s.department")
    List<Integer> findStudentKhoa2();

    @Query("select s from student s where s.it > 5 group by s.department")
    List<Student> findStudentOver5();
}
