import Student from "./Student"


const Students = ({ students, index ,onDelete, onUpdate}) => {
    return (
        <>
         {students.map((student) => 
            <Student key={ index } onUpdate = {onUpdate} onDelete = {onDelete} student = {student} />
            )}  
        </>
    )
}

export default Students
