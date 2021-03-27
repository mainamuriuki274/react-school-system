import {FiEdit,FiTrash} from 'react-icons/fi';

const Student = ({student, onDelete, onUpdate}) => {
    return (
        <tr>
            <td></td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phonenumber}</td>
            <td>{student.form}</td>
            <td>{student.form_class}</td>
            <td><FiEdit size={20} onClick = {() => onUpdate(student.id)} style={{ color: 'blue', cursor: 'pointer'}} /></td>
            <td><FiTrash size={20} onClick={() => onDelete(student.id)} style={{ color: 'red', cursor: 'pointer'}}/></td>
        </tr>
    )
}

export default Student
