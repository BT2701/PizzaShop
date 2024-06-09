import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentTable = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/students')
            .then(response => {
                console.log(response.data); // Log dữ liệu phản hồi
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu sinh viên!', error);
            });
    }, []);

    return (
        <div>
            <h2>Danh sách Sinh viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Khoa</th>
                        <th>Toán</th>
                        <th>Tiếng Anh</th>
                        <th>CNTT</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.department}</td>
                            <td>{student.math}</td>
                            <td>{student.english}</td>
                            <td>{student.it}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
