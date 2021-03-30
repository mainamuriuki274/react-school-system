import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import Table from "./components/Table";
import { useState, useEffect } from 'react'

const App = () => {
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState([])

    useEffect(() => {
      const getStudents = async () => {
        const studentsFromServer = await fetchStudents()
        setStudents(studentsFromServer)
      }
      getStudents()
    },[])
    
    const fetchStudents = async () =>{
      const res = await fetch('http://127.0.0.1:8000/api/v1/students')
      const data = await res.json()
      console.log(data)
      return data
    }
    
    //Show Add Task
    const [showAddStudent,setShowAddStudent] = useState(false)

    //Add Task
    const addStudent = async (student) =>{
      const res = await fetch('http://127.0.0.1:8000/api/v1/students/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      })
    
      const newStudent = await res.json()
      setStudents([...students,newStudent])
    }
    
    //Delete Task
    const deleteStudent = async (id) =>{
        await fetch(`http://127.0.0.1:8000/api/v1/students/${id}`,{
          method: 'DELETE'
        })

      setStudents(
        students.filter((student) => student.id !== id)
        )
      }

    //Fetch Student Details
    const fetchStudent = async (id) =>{
      setShowAddStudent(true)
      const res = await fetch(`http://localhost:5000/students/${id}`)
      const studentFromServer = await res.json() 
      setStudent(studentFromServer) 
    }

    //Update Student Details
    const updateStudent = async (id,student) =>{
      const res = await fetch(`http://localhost:5000/students/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      })
    
      const newStudentDetails = await res.json()
      setStudent([...student,newStudentDetails])
    }
    const closeAddStudent = () => {
      setStudent('');
      setShowAddStudent(false);
    }

  return (
    <div className="container">
        <Header showAddStudent={showAddStudent}  onAdd={() =>setShowAddStudent(true)} onClose={closeAddStudent}/>
        {showAddStudent && <StudentForm student = {student} onUpdate={updateStudent} onAdd={addStudent}/> }
        <Table onUpdate={fetchStudent} onDelete={deleteStudent} students={students} />

    </div>
  );
}

export default App;
