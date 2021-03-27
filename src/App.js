import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
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
      const res = await fetch('http://localhost:5000/students')
      const data = await res.json()
      console.log(data)
     return data
    }
    
    //Show Add Task
    const [showAddStudent,setShowAddStudent] = useState(false)

    //Add Task
    const addStudent = async (student) =>{
      const res = await fetch('http://localhost:5000/students/',{
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
        await fetch(`http://localhost:5000/students/${id}`,{
          method: 'DELETE'
        })

      setStudents(
        students.filter((student) => student.id !== id)
        )
      }

    //Update Student Details
    const updateStudent = async (id) =>{
      setShowAddStudent(true)
      const res = await fetch(`http://localhost:5000/students/${id}`)
      const studentFromServer = await res.json() 
      setStudent(studentFromServer) 
    }
      

  return (
    <div className="container">
        <Header showAddStudent={showAddStudent}  onAdd={() =>setShowAddStudent(!showAddStudent)} />
        {showAddStudent && <AddStudent student = {student} onAdd={addStudent}/> }
        <Table onUpdate={updateStudent} onDelete={deleteStudent} students={students} />

    </div>
  );
}

export default App;
