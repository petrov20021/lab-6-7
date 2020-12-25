class StudentService {
    students = [];

    upsert(student) {
        let existedStudentId = this.students.findIndex(s => s.id === student.id);
        if (existedStudentId !== -1) {
            this.students[existedStudentId] = student;

            console.log(this.students)
            return
        }
        this.students.push(student);
        console.log(this.students)

    }

    getAll() {
        return this.students;
    }

    delete(id) {
        this.students = this.students.filter(s => s.id !== id)
    }
}

module.exports = StudentService;