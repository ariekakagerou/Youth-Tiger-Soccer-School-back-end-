const db = require('../../config/db');

class Student {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM student');
        return rows;
    }

    static async getById(id_student) {
        const [rows] = await db.query('SELECT * FROM student WHERE id_student = ?', [id_student]);
        return rows[0];
    }

    static async create(studentData) {
        const { id_student, name, date_birth, email, nohp, status, registration_date, gender, photo, position, assigned_by_coach } = studentData;
        const [result] = await db.query(
            'INSERT INTO student (id_student, name, date_birth, email, nohp, registration_date, gender, photo, status, position, assigned_by_coach) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [id_student, name, date_birth, email, nohp, registration_date, gender, photo, status, position, assigned_by_coach]
        );
        return { id_student: result.insertId, ...studentData };
    }

    static async update(id_student, updatedData) {
        const fields = Object.keys(updatedData)
            .map(key => `${key} = ?`).join(', '); // Buat string untuk query

        const values = Object.values(updatedData);
        values.push(id_student); // Tambahkan id_student ke akhir values untuk WHERE clause

        const query = `UPDATE student SET ${fields} WHERE id_student = ?`;
        await db.query(query, values);
    }

    static async delete(reg_id_student) {
        await db.query('DELETE FROM student WHERE reg_id_student = ?', [reg_id_student]);
    }

    static async getByEmail(email) {
        const [rows] = await db.query('SELECT * FROM student WHERE email = ?', [email]);
        console.log("Rows from database:", rows);
        return rows;
    }

    static async update(id_student, status) {
        await db.query('UPDATE student SET status = ? WHERE id_student = ?', [status, id_student]);
    }
}

module.exports = Student;