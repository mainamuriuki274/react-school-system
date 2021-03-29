import Student from "./Student"


const Students = ({ students, index ,onDelete, onUpdate}) => {
    return (
        <>
         {students.map((student) => 
            <Student key={ student.id } onUpdate = {onUpdate} onDelete = {onDelete} student = {student} />
            )}  
        </>
    )
}

export default Students
