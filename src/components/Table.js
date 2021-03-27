import React from 'react'
import Students from './Students'

const Table = ({students,onDelete,onUpdate}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Admission Number</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Phonenumber</th>
                    <th>Form</th>
                    <th>Class</th>
                    <th>Edit</th>
                    <th>Delete</th> 
                </tr>
            </thead>
            <tbody>
                <Students onUpdate={onUpdate} onDelete={onDelete} students={students}/>
            </tbody>

        </table>
    )
}

export default Table
